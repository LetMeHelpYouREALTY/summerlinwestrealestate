import { useState } from 'react';
import { useLeadCaptureModal } from '../../hooks/useLeadCaptureModal';

const COMMUNITIES = [
  'The Vistas',
  'Red Rock',
  'Stonebridge',
  'Reverence',
  'The Cliffs',
  'Redpoint',
  'Downtown Summerlin',
];

const PROPERTY_TYPES = [
  { label: 'House', value: 'house' },
  { label: 'Condo', value: 'condo' },
  { label: 'Townhome', value: 'townhome' },
];

const listings = [
  {
    name: 'The Vistas Summerlin Home for Sale',
    description: 'Modern 4 bed, 3 bath home in The Vistas, Summerlin.',
    address: {
      street: '1980 Festival Plaza Dr (One Summerlin)',
      city: 'Las Vegas',
      region: 'NV',
      postal: '89135',
      country: 'US',
    },
    images: [
      'https://placehold.co/400x300?text=Photo+1',
      'https://placehold.co/400x300?text=Photo+2',
    ],
    price: '899000',
  },
  // Add more listings as needed
];

const listingsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': listings.map((listing) => ({
    '@type': 'Residence',
    name: listing.name,
    description: listing.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.address.street,
      addressLocality: listing.address.city,
      addressRegion: listing.address.region,
      postalCode: listing.address.postal,
      addressCountry: listing.address.country,
    },
    image: listing.images,
    offers: {
      '@type': 'Offer',
      price: listing.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    telephone: '+1-702-550-0112',
  })),
};

export default function PropertySearchWidget() {
  const [community, setCommunity] = useState('');
  const [price, setPrice] = useState([400000, 1200000]);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const { openModal } = useLeadCaptureModal();

  const handleTypeChange = (type: string) => {
    setPropertyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingsJsonLd) }}
      />
      <div className="bg-white rounded-lg p-6 max-w-xl mx-auto" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
        <h2 className="text-xl font-bold text-[#0A2540] mb-4">Find Your Dream Home</h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            openModal('Property Search'); // Only context/source allowed; prefill not supported in current modal
          }}
        >
          {/* Community Dropdown */}
          <div>
            <label className="block text-sm font-medium text-[#0A2540] mb-1">Community</label>
            <select
              title="Select Community"
              className="w-full border border-gray-200 rounded px-3 py-2 focus:ring-[#3A8DDE] focus:border-[#3A8DDE]"
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
            >
              <option value="">Select a community</option>
              {COMMUNITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          {/* Price Range Slider */}
          <div>
            <label className="block text-sm font-medium text-[#0A2540] mb-1">
              Price Range (${price[0].toLocaleString()} - ${price[1].toLocaleString()})
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={200000}
                max={2000000}
                step={10000}
                value={price[0]}
                onChange={(e) =>
                  setPrice([
                    Number(e.target.value),
                    price[1] > Number(e.target.value) ? price[1] : Number(e.target.value),
                  ])
                }
                className="w-1/2 accent-[#3A8DDE]"
                aria-label="Minimum price"
              />
              <input
                type="range"
                min={200000}
                max={2000000}
                step={10000}
                value={price[1]}
                onChange={(e) =>
                  setPrice([
                    price[0] < Number(e.target.value) ? price[0] : Number(e.target.value),
                    Number(e.target.value),
                  ])
                }
                className="w-1/2 accent-[#3A8DDE]"
                aria-label="Maximum price"
              />
            </div>
          </div>
          {/* Bedrooms Selector */}
          <div>
            <label className="block text-sm font-medium text-[#0A2540] mb-1">Bedrooms</label>
            <select
              title="Select Bedrooms"
              className="w-full border border-gray-200 rounded px-3 py-2 focus:ring-[#3A8DDE] focus:border-[#3A8DDE]"
              value={bedrooms}
              onChange={(e) => setBedrooms(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}+
                </option>
              ))}
            </select>
          </div>
          {/* Bathrooms Selector */}
          <div>
            <label className="block text-sm font-medium text-[#0A2540] mb-1">Bathrooms</label>
            <select
              title="Select Bathrooms"
              className="w-full border border-gray-200 rounded px-3 py-2 focus:ring-[#3A8DDE] focus:border-[#3A8DDE]"
              value={bathrooms}
              onChange={(e) => setBathrooms(Number(e.target.value))}
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n}+
                </option>
              ))}
            </select>
          </div>
          {/* Property Type Checkboxes */}
          <div>
            <label className="block text-sm font-medium text-[#0A2540] mb-1">Property Type</label>
            <div className="flex gap-4 flex-wrap">
              {PROPERTY_TYPES.map((type) => (
                <label key={type.value} className="inline-flex items-center gap-1 text-sm">
                  <input
                    type="checkbox"
                    checked={propertyTypes.includes(type.value)}
                    onChange={() => handleTypeChange(type.value)}
                    className="accent-[#16B286]"
                  />
                  {type.label}
                </label>
              ))}
            </div>
          </div>
          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-[#3A8DDE] text-white font-semibold py-2 rounded shadow hover:bg-[#0A2540] transition"
          >
            Search Properties
          </button>
        </form>
      </div>
    </>
  );
}
