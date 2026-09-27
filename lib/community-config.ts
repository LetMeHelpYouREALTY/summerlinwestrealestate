/**
 * Hyperlocal anchor for Summerlin West amenity map and schema.
 * Center: geographic POI labeled "Summerlin West, Las Vegas, NV" (36.1699922, -115.3489459)
 * per public map reference; aligns with the western Summerlin villages service area.
 */
export const COMMUNITY = {
  name: "Summerlin West",
  city: "Las Vegas",
  state: "NV",
  stateCode: "NV",
  country: "US",
  center: {
    lat: 36.1699922,
    lng: -115.3489459,
  },
  mapZoom: 13,
  searchRadiusMeters: 8000,
  siteUrl: "https://summerlinwestrealestate.com",
  agent: {
    name: "Dr. Jan Duffy",
    title: "REALTOR®",
    phone: "+1-702-550-0112",
    phoneDisplay: "(702) 550-0112",
    phoneTel: "7025500112",
    email: "jan@summerlinwestrealestate.com",
    officeEmail: "info@summerlinwestrealestate.com",
    license: "NV License #1234567",
    brokerage: "Brokered by Realty Experts, LLC",
    officeAddress: "1980 Festival Plaza Dr (One Summerlin)",
    officeCity: "Las Vegas",
    officeZip: "89135",
  },
} as const;

export const GOOGLE_MAPS_ENV = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID,
} as const;

export function communityEmbedMapUrl(): string {
  const { lat, lng } = COMMUNITY.center;
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
}

export function directionsUrl(lat: number, lng: number, name?: string): string {
  const label = name ? encodeURIComponent(name) : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${label}&destination_place_id=`;
}
