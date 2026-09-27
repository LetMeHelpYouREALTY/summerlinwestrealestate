import { COMMUNITY } from "./community-config";

export type AmenityCategoryId =
  | "restaurants"
  | "cafes"
  | "grocery"
  | "parks"
  | "golf"
  | "healthcare"
  | "pharmacies"
  | "shopping"
  | "parking"
  | "fitness"
  | "schools";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Legacy Places API type(s) for nearbySearch fallback */
  placeTypes: string[];
  /** Places API (New) primary types when supported */
  primaryTypes?: string[];
};

/** Master-planned family community — schools included; standard order per spec */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: "restaurants",
    label: "Restaurants",
    placeTypes: ["restaurant"],
    primaryTypes: ["restaurant"],
  },
  {
    id: "cafes",
    label: "Cafes",
    placeTypes: ["cafe"],
    primaryTypes: ["cafe"],
  },
  {
    id: "grocery",
    label: "Grocery",
    placeTypes: ["supermarket", "grocery_or_supermarket"],
    primaryTypes: ["supermarket", "grocery_store"],
  },
  {
    id: "parks",
    label: "Parks",
    placeTypes: ["park"],
    primaryTypes: ["park"],
  },
  {
    id: "golf",
    label: "Golf",
    placeTypes: ["golf_course"],
    primaryTypes: ["golf_course"],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    placeTypes: ["hospital", "doctor"],
    primaryTypes: ["hospital", "doctor"],
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    placeTypes: ["pharmacy"],
    primaryTypes: ["pharmacy"],
  },
  {
    id: "shopping",
    label: "Shopping",
    placeTypes: ["shopping_mall", "department_store"],
    primaryTypes: ["shopping_mall", "department_store"],
  },
  {
    id: "parking",
    label: "Parking",
    placeTypes: ["parking"],
    primaryTypes: ["parking"],
  },
  {
    id: "fitness",
    label: "Fitness",
    placeTypes: ["gym"],
    primaryTypes: ["gym"],
  },
  {
    id: "schools",
    label: "Schools",
    placeTypes: ["school"],
    primaryTypes: ["school"],
  },
];

export type CuratedPlace = {
  name: string;
  category: AmenityCategoryId;
  schemaType:
    | "Restaurant"
    | "CafeOrCoffeeShop"
    | "GroceryStore"
    | "Park"
    | "GolfCourse"
    | "Hospital"
    | "Pharmacy"
    | "ShoppingCenter"
    | "School"
    | "Place";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  description: string;
};

/** Verified public places commonly used by Summerlin West residents */
export const CURATED_PLACES: CuratedPlace[] = [
  {
    name: "Downtown Summerlin",
    category: "shopping",
    schemaType: "ShoppingCenter",
    streetAddress: "1980 Festival Plaza Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89135",
    description:
      "Open-air shopping, dining, and entertainment district at the heart of Summerlin.",
  },
  {
    name: "Whole Foods Market",
    category: "grocery",
    schemaType: "GroceryStore",
    streetAddress: "2015 Festival Plaza Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89135",
    description: "Full-service grocery at Downtown Summerlin.",
  },
  {
    name: "Red Rock Canyon National Conservation Area",
    category: "parks",
    schemaType: "Park",
    streetAddress: "1000 Scenic Loop Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89161",
    description:
      "Scenic desert conservation area and trails bordering Summerlin West.",
  },
  {
    name: "TPC Summerlin",
    category: "golf",
    schemaType: "GolfCourse",
    streetAddress: "1700 Village Center Cir",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    description: "Private golf club in the Summerlin area.",
  },
  {
    name: "Summerlin Hospital Medical Center",
    category: "healthcare",
    schemaType: "Hospital",
    streetAddress: "657 Town Center Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89145",
    description: "Acute-care hospital serving the Summerlin valley.",
  },
  {
    name: "Centennial Hills Hospital Medical Center",
    category: "healthcare",
    schemaType: "Hospital",
    streetAddress: "6900 N Durango Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    description: "Hospital northwest of Summerlin West via the 215 Beltway.",
  },
  {
    name: "Las Vegas Ballpark",
    category: "parks",
    schemaType: "Place",
    streetAddress: "1650 S Pavilion Center Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89135",
    description:
      "Home of the Las Vegas Aviators, adjacent to Downtown Summerlin.",
  },
  {
    name: "William G. Geer Elementary School",
    category: "schools",
    schemaType: "School",
    streetAddress: "8670 W O'Brien Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    description: "Clark County School District elementary serving Summerlin West.",
  },
  {
    name: "Sig Rogich Middle School",
    category: "schools",
    schemaType: "School",
    streetAddress: "8250 W Maule Ave",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89113",
    description: "Middle school in the Summerlin area.",
  },
  {
    name: "Palo Verde High School",
    category: "schools",
    schemaType: "School",
    streetAddress: "333 S Pavilion Center Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89144",
    description: "High school near Downtown Summerlin and Summerlin West.",
  },
];

export type AmenityFaq = { question: string; answer: string };

export const AMENITIES_FAQS: AmenityFaq[] = [
  {
    question: `What grocery stores are near ${COMMUNITY.name}?`,
    answer: `Whole Foods Market at Downtown Summerlin (2015 Festival Plaza Dr) and additional grocers along Charleston Blvd and the 215 corridor serve ${COMMUNITY.name} residents.`,
  },
  {
    question: `How far is ${COMMUNITY.name} from the Las Vegas Strip?`,
    answer: `Approximate drive time to the Las Vegas Strip is about 20–25 minutes via Summerlin Parkway and I-15, depending on traffic and your starting village.`,
  },
  {
    question: `Are there hospitals near ${COMMUNITY.name}?`,
    answer: `Summerlin Hospital Medical Center (657 Town Center Dr) and Centennial Hills Hospital Medical Center (6900 N Durango Dr) are both within a short drive of Summerlin West.`,
  },
  {
    question: `Where do residents shop and dine near ${COMMUNITY.name}?`,
    answer: `Downtown Summerlin (1980 Festival Plaza Dr) combines national retailers, local restaurants, and seasonal events a few minutes from most Summerlin West villages.`,
  },
  {
    question: `How close is Red Rock Canyon to ${COMMUNITY.name}?`,
    answer: `Red Rock Canyon National Conservation Area borders western Summerlin; the visitor area at 1000 Scenic Loop Dr is roughly 15–20 minutes from central Summerlin West.`,
  },
  {
    question: `How far is Harry Reid International Airport from ${COMMUNITY.name}?`,
    answer: `Approximate drive time to Harry Reid International Airport is about 25–30 minutes via the 215 Beltway and I-15, depending on traffic.`,
  },
  {
    question: `What schools serve ${COMMUNITY.name}?`,
    answer: `Clark County schools commonly referenced for Summerlin West include William G. Geer Elementary, Sig Rogich Middle School, and Palo Verde High School; confirm attendance zones with CCSD for a specific address.`,
  },
  {
    question: `Is golf available near ${COMMUNITY.name}?`,
    answer: `TPC Summerlin (1700 Village Center Cir) and additional public and private courses throughout Summerlin and the northwest valley are within easy driving distance.`,
  },
];

export type ContentSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const AMENITIES_CONTENT_SECTIONS: ContentSection[] = [
  {
    id: "dining",
    title: "Dining & Cafes",
    paragraphs: [
      `Downtown Summerlin anchors everyday dining for ${COMMUNITY.name}, with restaurant rows along Festival Plaza Drive and Pavilion Center Drive. Residents also reach Charleston Boulevard and the 215 corridor for additional national and local options.`,
      `Use the interactive map above to filter Restaurants and Cafes near the community center; listings update from Google when your Maps API key is configured.`,
    ],
  },
  {
    id: "parks",
    title: "Parks & Outdoor Recreation",
    paragraphs: [
      `Western ${COMMUNITY.name} sits at the gateway to Red Rock Canyon National Conservation Area, with trailheads and scenic drives minutes away. Village parks, pools, and trail networks within Summerlin West connect neighborhoods to open space.`,
      `Las Vegas Ballpark at 1650 S Pavilion Center Dr adds year-round events next to Downtown Summerlin.`,
    ],
  },
  {
    id: "golf",
    title: "Golf",
    paragraphs: [
      `TPC Summerlin at 1700 Village Center Cir is a landmark private club in the area. Additional Summerlin and northwest valley courses are within a short drive for public tee times and resort-style layouts.`,
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    paragraphs: [
      `Summerlin Hospital Medical Center (657 Town Center Dr) provides acute care in the valley. Centennial Hills Hospital Medical Center (6900 N Durango Dr) expands options to the northwest via the 215 Beltway.`,
      `Use the Healthcare filter on the map to locate doctors, urgent care, and specialists near your village.`,
    ],
  },
  {
    id: "shopping",
    title: "Shopping & Services",
    paragraphs: [
      `Downtown Summerlin combines apparel, home, and specialty retailers at 1980 Festival Plaza Dr. Whole Foods Market at 2015 Festival Plaza Dr covers grocery runs without leaving the district.`,
    ],
  },
  {
    id: "schools",
    title: "Schools",
    paragraphs: [
      `${COMMUNITY.name} families typically look to Clark County School District campuses such as William G. Geer Elementary (8670 W O'Brien Dr), Sig Rogich Middle School (8250 W Maule Ave), and Palo Verde High School (333 S Pavilion Center Dr). Always verify zoning for your exact lot before you buy.`,
    ],
  },
  {
    id: "commute",
    title: "Commute & Key Destinations",
    paragraphs: [
      `Approximate drive times from central ${COMMUNITY.name}: Las Vegas Strip 20–25 minutes; Harry Reid International Airport 25–30 minutes; Downtown Summerlin under 10 minutes from most villages; Red Rock Canyon visitor center 15–20 minutes. Times vary with traffic and starting address.`,
      `The 215 Beltway and Summerlin Parkway link ${COMMUNITY.name} to employment centers across the valley while keeping Red Rock views intact.`,
    ],
  },
];

export function formatPlaceAddress(place: CuratedPlace): string {
  return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
}

export function curatedPlacesByCategory(
  category: AmenityCategoryId,
): CuratedPlace[] {
  return CURATED_PLACES.filter((p) => p.category === category);
}
