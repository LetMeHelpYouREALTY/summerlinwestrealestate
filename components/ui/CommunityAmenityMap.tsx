"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AMENITY_CATEGORIES,
  type AmenityCategoryId,
  curatedPlacesByCategory,
  formatPlaceAddress,
} from "../../lib/amenities-data";
import {
  COMMUNITY,
  GOOGLE_MAPS_ENV,
  communityEmbedMapUrl,
} from "../../lib/community-config";
import styles from "./CommunityAmenityMap.module.css";

type MapPlaceResult = {
  name: string;
  lat: number;
  lng: number;
  address?: string;
  rating?: number;
};

type CommunityAmenityMapProps = {
  showStaticList?: boolean;
  defaultCategory?: AmenityCategoryId;
};

declare global {
  interface Window {
    __communityAmenityMapInit?: () => void;
    google?: typeof google;
  }
}

const MAP_SCRIPT_ID = "google-maps-amenity-script";

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("No window"));
  }
  if (window.google?.maps) {
    return Promise.resolve();
  }

  const existing = document.getElementById(MAP_SCRIPT_ID);
  if (existing) {
    return new Promise((resolve, reject) => {
      const check = () => {
        if (window.google?.maps) {
          resolve();
        }
      };
      existing.addEventListener("load", check);
      existing.addEventListener("error", () =>
        reject(new Error("Maps script error")),
      );
      check();
    });
  }

  return new Promise((resolve, reject) => {
    window.__communityAmenityMapInit = () => {
      resolve();
      delete window.__communityAmenityMapInit;
    };
    const script = document.createElement("script");
    script.id = MAP_SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&v=weekly&loading=async&callback=__communityAmenityMapInit`;
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });
}

function buildDirectionsLink(lat: number, lng: number, name: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${name}@${lat},${lng}`)}`;
}

export default function CommunityAmenityMap({
  showStaticList = true,
  defaultCategory = "restaurants",
}: CommunityAmenityMapProps) {
  const apiKey = GOOGLE_MAPS_ENV.apiKey;
  const mapId = GOOGLE_MAPS_ENV.mapId;
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const observerStarted = useRef(false);

  const [category, setCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [inView, setInView] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [useFallback, setUseFallback] = useState(!apiKey);
  const [statusText, setStatusText] = useState<string | null>(
    apiKey ? "Loading map…" : null,
  );

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const showPlaceOnMap = useCallback(
    (place: MapPlaceResult) => {
      const map = mapInstanceRef.current;
      const infoWindow =
        infoWindowRef.current ?? new google.maps.InfoWindow();
      infoWindowRef.current = infoWindow;
      if (!map) return;

      const marker = new google.maps.Marker({
        map,
        position: { lat: place.lat, lng: place.lng },
        title: place.name,
      });
      markersRef.current.push(marker);

      const ratingLine =
        place.rating != null ? `<p>Rating: ${place.rating.toFixed(1)}</p>` : "";
      const addressLine = place.address
        ? `<p>${place.address}</p>`
        : "";
      const directions = buildDirectionsLink(place.lat, place.lng, place.name);
      infoWindow.setContent(
        `<div style="max-width:220px"><strong>${place.name}</strong>${ratingLine}${addressLine}<p><a href="${directions}" target="_blank" rel="noopener noreferrer">Directions</a></p></div>`,
      );
      infoWindow.open({ map, anchor: marker });
    },
    [],
  );

  const searchLegacyNearby = useCallback(
    (
      map: google.maps.Map,
      center: google.maps.LatLng,
      cat: AmenityCategoryId,
    ) => {
      const config = AMENITY_CATEGORIES.find((c) => c.id === cat);
      if (!config) return;

      const service = new google.maps.places.PlacesService(map);
      const type = config.placeTypes[0];

      service.nearbySearch(
        {
          location: center,
          radius: COMMUNITY.searchRadiusMeters,
          type,
        },
        (results, status) => {
          if (
            status !== google.maps.places.PlacesServiceStatus.OK ||
            !results?.length
          ) {
            setStatusText(null);
            return;
          }
          clearMarkers();
          results.slice(0, 15).forEach((r) => {
            if (!r.geometry?.location || !r.name) return;
            showPlaceOnMap({
              name: r.name,
              lat: r.geometry.location.lat(),
              lng: r.geometry.location.lng(),
              address: r.vicinity,
              rating: r.rating,
            });
          });
          setStatusText(null);
        },
      );
    },
    [clearMarkers, showPlaceOnMap],
  );

  const searchNearby = useCallback(
    async (map: google.maps.Map, cat: AmenityCategoryId) => {
      const center = map.getCenter();
      if (!center) return;

      setStatusText("Searching nearby places…");
      clearMarkers();

      const config = AMENITY_CATEGORIES.find((c) => c.id === cat);
      if (!config) {
        setStatusText(null);
        return;
      }

      try {
        const placesLib = (await google.maps.importLibrary(
          "places",
        )) as google.maps.PlacesLibrary;
        const PlaceCtor = placesLib.Place;
        if (PlaceCtor?.searchNearby) {
          const primaryTypes =
            config.primaryTypes ?? config.placeTypes.slice(0, 1);
          const { places } = await PlaceCtor.searchNearby({
            fields: [
              "displayName",
              "location",
              "formattedAddress",
              "rating",
            ],
            locationRestriction: {
              center: { lat: center.lat(), lng: center.lng() },
              radius: COMMUNITY.searchRadiusMeters,
            },
            includedPrimaryTypes: primaryTypes,
            maxResultCount: 15,
          });

          if (!places?.length) {
            searchLegacyNearby(map, center, cat);
            return;
          }

          places.forEach((p) => {
            const loc = p.location;
            const name = p.displayName;
            if (!loc || !name) return;
            const placeName =
              typeof name === "string"
                ? name
                : String((name as { text?: string }).text ?? "Place");
            showPlaceOnMap({
              name: placeName,
              lat: loc.lat(),
              lng: loc.lng(),
              address: p.formattedAddress ?? undefined,
              rating: p.rating ?? undefined,
            });
          });
          setStatusText(null);
          return;
        }
      } catch {
        // fall through to legacy search
      }

      searchLegacyNearby(map, center, cat);
    },
    [clearMarkers, searchLegacyNearby, showPlaceOnMap],
  );

  const initMap = useCallback(async () => {
    if (!apiKey || !mapRef.current || mapInstanceRef.current) return;

    try {
      await loadGoogleMapsScript(apiKey);
      const center = COMMUNITY.center;
      const mapOptions: google.maps.MapOptions = {
        center,
        zoom: COMMUNITY.mapZoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      };
      if (mapId) {
        mapOptions.mapId = mapId;
      }

      const map = new google.maps.Map(mapRef.current, mapOptions);
      mapInstanceRef.current = map;

      communityMarkerRef.current = new google.maps.Marker({
        map,
        position: center,
        title: COMMUNITY.name,
        label: {
          text: "★",
          color: "#ffffff",
          fontWeight: "700",
        },
        zIndex: 999,
      });

      const communityInfo = new google.maps.InfoWindow({
        content: `<div style="max-width:240px"><strong>${COMMUNITY.name}</strong><p>Your hyperlocal guide anchor</p></div>`,
      });
      communityMarkerRef.current.addListener("click", () => {
        communityInfo.open({ map, anchor: communityMarkerRef.current! });
      });

      setMapReady(true);
      setUseFallback(false);
      await searchNearby(map, category);
    } catch {
      setUseFallback(true);
      setStatusText(null);
    }
  }, [apiKey, category, mapId, searchNearby]);

  useEffect(() => {
    if (observerStarted.current || !containerRef.current) return;
    observerStarted.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || useFallback || !apiKey) return;
    void initMap();
  }, [inView, useFallback, apiKey, initMap]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!mapReady || !map || useFallback) return;
    void searchNearby(map, category);
  }, [category, mapReady, useFallback, searchNearby]);

  const staticPlaces = curatedPlacesByCategory(category);

  return (
    <div className={styles.mapSection} ref={containerRef}>
      <div
        className={styles.filterBar}
        role="tablist"
        aria-label="Filter nearby amenities by category"
      >
        {AMENITY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={category === cat.id}
            aria-label={`Show ${cat.label} near ${COMMUNITY.name}`}
            className={`${styles.filterChip} ${category === cat.id ? styles.filterChipActive : ""}`}
            onClick={() => setCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.mapFrame}>
        {useFallback ? (
          <iframe
            title={`Map of ${COMMUNITY.name}, ${COMMUNITY.city}`}
            className={styles.embedFallback}
            src={communityEmbedMapUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <>
            <div
              ref={mapRef}
              className={styles.mapCanvas}
              role="application"
              aria-label={`Interactive map of amenities near ${COMMUNITY.name}`}
            />
            {statusText ? (
              <div className={styles.statusMessage}>{statusText}</div>
            ) : null}
          </>
        )}
      </div>

      {showStaticList ? (
        <div className={styles.staticList}>
          <h3 className={styles.staticListTitle}>
            Featured {AMENITY_CATEGORIES.find((c) => c.id === category)?.label}{" "}
            near {COMMUNITY.name}
          </h3>
          <ul>
            {staticPlaces.length > 0 ? (
              staticPlaces.map((place) => (
                <li key={place.name} className={styles.staticItem}>
                  <div className={styles.staticItemName}>{place.name}</div>
                  <div className={styles.staticItemMeta}>
                    {formatPlaceAddress(place)}
                  </div>
                  <p className={styles.staticItemMeta}>{place.description}</p>
                  <a
                    className={styles.staticItemLink}
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatPlaceAddress(place))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Directions
                  </a>
                </li>
              ))
            ) : (
              <li className={styles.staticItem}>
                Browse the map filters above or view curated highlights in other
                categories.
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
