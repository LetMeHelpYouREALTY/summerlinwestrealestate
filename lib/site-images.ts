/**
 * Heading-matched site images.
 * Git copies live in /public/images (backup). Cloudflare Images is primary
 * when NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH is set and the IDs exist.
 */

export type SiteImage = {
  id: string;
  local: string;
  alt: string;
};

const CF_HASH = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH ?? '';

export function deliveryUrl(image: SiteImage): string {
  if (CF_HASH) {
    return `https://imagedelivery.net/${CF_HASH}/${image.id}/public`;
  }
  return image.local;
}

export const siteImages = {
  heroH1: {
    id: 'swre-hero-h1',
    local: '/images/hero-h1-summerlin-west.png',
    alt: 'Desert-modern home in Summerlin West, Las Vegas, with Red Rock Canyon in the distance',
  },
  og: {
    id: 'swre-og',
    local: '/images/og-image.png',
    alt: 'Summerlin West Real Estate — Homes by Dr. Jan Duffy',
  },
  servicesH2: {
    id: 'swre-our-services',
    local: '/images/h2-our-services.png',
    alt: 'Staged living room in a Summerlin West listing — buy, sell, and home valuation services',
  },
  theVistas: {
    id: 'swre-the-vistas',
    local: '/images/communities/the-vistas.png',
    alt: 'Luxury home in The Vistas, Summerlin West, Las Vegas, with mountain views',
  },
  thePaseos: {
    id: 'swre-the-paseos',
    local: '/images/communities/the-paseos.png',
    alt: 'Single-family homes and community pool architecture in The Paseos, Summerlin West',
  },
  stonebridge: {
    id: 'swre-stonebridge',
    local: '/images/communities/stonebridge.png',
    alt: 'Modern homes in Stonebridge, Summerlin West, near Red Rock Canyon',
  },
  redpoint: {
    id: 'swre-redpoint',
    local: '/images/communities/redpoint.png',
    alt: 'New-construction contemporary home in Redpoint, Summerlin West',
  },
  redpointSquare: {
    id: 'swre-redpoint-square',
    local: '/images/communities/redpoint-square.png',
    alt: 'Townhomes and mixed-use buildings at Redpoint Square, Summerlin West',
  },
  reverence: {
    id: 'swre-reverence',
    local: '/images/communities/reverence.png',
    alt: 'Luxury estate in Reverence, Summerlin West, with city-light views',
  },
  redRockCountryClub: {
    id: 'swre-red-rock-cc',
    local: '/images/communities/red-rock-country-club.png',
    alt: 'Custom homes beside the golf course at Red Rock Country Club, Las Vegas',
  },
  theRidges: {
    id: 'swre-the-ridges',
    local: '/images/communities/the-ridges.png',
    alt: 'Custom hillside estate in The Ridges, Summerlin, Las Vegas',
  },
  downtownSummerlin: {
    id: 'swre-downtown-summerlin',
    local: '/images/communities/downtown-summerlin.png',
    alt: 'Downtown Summerlin retail promenade at dusk, Las Vegas',
  },
  summerlinWest: {
    id: 'swre-hero-h1',
    local: '/images/hero-h1-summerlin-west.png',
    alt: 'Summerlin West master-planned homes with Red Rock Canyon beyond',
  },
} as const satisfies Record<string, SiteImage>;

export const communityImageBySlug: Record<string, SiteImage> = {
  'the-vistas': siteImages.theVistas,
  'the-paseos': siteImages.thePaseos,
  stonebridge: siteImages.stonebridge,
  redpoint: siteImages.redpoint,
  'redpoint-square': siteImages.redpointSquare,
  reverence: siteImages.reverence,
  'red-rock-country-club': siteImages.redRockCountryClub,
  'red-rock': siteImages.redRockCountryClub,
  'red-rock-canyon': siteImages.redRockCountryClub,
  'the-ridges': siteImages.theRidges,
  'downtown-summerlin': siteImages.downtownSummerlin,
  'summerlin-west': siteImages.summerlinWest,
  'summerlin-west-golf': siteImages.redRockCountryClub,
  'new-construction': siteImages.redpoint,
  'family-neighborhoods': siteImages.thePaseos,
};

export function imageForCommunity(slug: string): SiteImage {
  return communityImageBySlug[slug] ?? siteImages.heroH1;
}
