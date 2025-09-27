import crypto from 'node:crypto';

// Google Maps API Configuration
export const GOOGLE_MAPS_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  urlSigningSecret: process.env.GOOGLE_MAPS_URL_SIGNING_SECRET,
  baseUrl: 'https://maps.googleapis.com/maps/api',
};

// URL Signing Function for Static Maps and other signed requests
export function signGoogleMapsUrl(path: string, query: string): string {
  if (!GOOGLE_MAPS_CONFIG.urlSigningSecret) {
    throw new Error('Google Maps URL signing secret not configured');
  }

  // Decode the signing secret from base64
  const decodedKey = Buffer.from(GOOGLE_MAPS_CONFIG.urlSigningSecret, 'base64');

  // Create the URL to sign
  const urlToSign = `${path}?${query}`;

  // Create HMAC-SHA1 signature
  const signature = crypto
    .createHmac('sha1', decodedKey)
    .update(urlToSign)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${urlToSign}&signature=${signature}`;
}

// Helper function to create signed static map URL
export function createSignedStaticMapUrl(params: {
  center: string;
  zoom: number;
  size: string;
  maptype?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
  markers?: string[];
  path?: string;
  scale?: 1 | 2;
  format?: 'png' | 'png8' | 'png32' | 'gif' | 'jpg' | 'jpg-baseline';
}): string {
  const queryParams = new URLSearchParams({
    center: params.center,
    zoom: params.zoom.toString(),
    size: params.size,
    maptype: params.maptype || 'roadmap',
    key: GOOGLE_MAPS_CONFIG.apiKey || '',
  });

  if (params.markers) {
    params.markers.forEach((marker) => {
      queryParams.append('markers', marker);
    });
  }

  if (params.path) {
    queryParams.append('path', params.path);
  }

  if (params.scale) {
    queryParams.append('scale', params.scale.toString());
  }

  if (params.format) {
    queryParams.append('format', params.format);
  }

  return signGoogleMapsUrl('/staticmap', queryParams.toString());
}

// Places API Helper Functions
export const PLACES_API_ENDPOINTS = {
  autocomplete: '/place/autocomplete/json',
  details: '/place/details/json',
  nearby: '/place/nearbysearch/json',
  textSearch: '/place/textsearch/json',
  photo: '/place/photo',
};

// Create signed Places API URL
export function createSignedPlacesUrl(endpoint: string, params: Record<string, string>): string {
  const queryParams = new URLSearchParams({
    ...params,
    key: GOOGLE_MAPS_CONFIG.apiKey || '',
  });

  return signGoogleMapsUrl(endpoint, queryParams.toString());
}

// Geocoding Helper
export function createGeocodingUrl(address: string): string {
  const queryParams = new URLSearchParams({
    address,
    key: GOOGLE_MAPS_CONFIG.apiKey || '',
  });

  return `${GOOGLE_MAPS_CONFIG.baseUrl}/geocode/json?${queryParams.toString()}`;
}

// Reverse Geocoding Helper
export function createReverseGeocodingUrl(lat: number, lng: number): string {
  const queryParams = new URLSearchParams({
    latlng: `${lat},${lng}`,
    key: GOOGLE_MAPS_CONFIG.apiKey || '',
  });

  return `${GOOGLE_MAPS_CONFIG.baseUrl}/geocode/json?${queryParams.toString()}`;
}

// Places Autocomplete Helper
export function createPlacesAutocompleteUrl(
  input: string,
  options?: {
    types?: string;
    components?: string;
    sessiontoken?: string;
  }
): string {
  const queryParams = new URLSearchParams({
    input,
    key: GOOGLE_MAPS_CONFIG.apiKey || '',
  });

  if (options?.types) {
    queryParams.append('types', options.types);
  }

  if (options?.components) {
    queryParams.append('components', options.components);
  }

  if (options?.sessiontoken) {
    queryParams.append('sessiontoken', options.sessiontoken);
  }

  return `${GOOGLE_MAPS_CONFIG.baseUrl}${PLACES_API_ENDPOINTS.autocomplete}?${queryParams.toString()}`;
}

// Places Details Helper
export function createPlacesDetailsUrl(placeId: string, fields?: string[]): string {
  const queryParams = new URLSearchParams({
    place_id: placeId,
    key: GOOGLE_MAPS_CONFIG.apiKey || '',
  });

  if (fields) {
    queryParams.append('fields', fields.join(','));
  }

  return `${GOOGLE_MAPS_CONFIG.baseUrl}${PLACES_API_ENDPOINTS.details}?${queryParams.toString()}`;
}

// Nearby Search Helper
export function createNearbySearchUrl(
  location: string,
  radius: number,
  options?: {
    type?: string;
    keyword?: string;
    name?: string;
  }
): string {
  const queryParams = new URLSearchParams({
    location,
    radius: radius.toString(),
    key: GOOGLE_MAPS_CONFIG.apiKey || '',
  });

  if (options?.type) {
    queryParams.append('type', options.type);
  }

  if (options?.keyword) {
    queryParams.append('keyword', options.keyword);
  }

  if (options?.name) {
    queryParams.append('name', options.name);
  }

  return `${GOOGLE_MAPS_CONFIG.baseUrl}${PLACES_API_ENDPOINTS.nearby}?${queryParams.toString()}`;
}

// Error handling for API responses
export function handleGoogleMapsError(response: unknown): void {
  if (response.status === 'REQUEST_DENIED') {
    throw new Error('Google Maps API request denied. Check your API key and billing status.');
  }

  if (response.status === 'OVER_QUERY_LIMIT') {
    throw new Error('Google Maps API quota exceeded. Please try again later.');
  }

  if (response.status === 'INVALID_REQUEST') {
    throw new Error('Invalid Google Maps API request. Check your parameters.');
  }

  if (response.status === 'NOT_FOUND') {
    throw new Error('Google Maps API resource not found.');
  }

  if (response.status === 'ZERO_RESULTS') {
    throw new Error('No results found for the given parameters.');
  }
}

// Type definitions for Google Maps API responses
export interface GoogleMapsApiResponse {
  status: string;
  error_message?: string;
}

export interface GeocodingResult {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  place_id: string;
  types: string[];
}

export interface PlacesAutocompletePrediction {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
  types: string[];
}

export interface PlaceDetails {
  name: string;
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  photos?: Array<{
    photo_reference: string;
    height: number;
    width: number;
  }>;
  reviews?: Array<{
    author_name: string;
    rating: number;
    text: string;
    time: number;
  }>;
  rating?: number;
  user_ratings_total?: number;
  types: string[];
}
