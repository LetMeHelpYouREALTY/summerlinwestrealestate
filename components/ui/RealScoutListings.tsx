'use client';
import { useEffect } from 'react';

export default function RealScoutListings() {
  useEffect(() => {
    // Add the script to the head if it doesn't exist
    if (
      !document.querySelector(
        'script[src="https://em.realscout.com/widgets/realscout-web-components.umd.js"]'
      )
    ) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      document.head.appendChild(script);
    }

    // Add the styles if they don't exist
    if (!document.querySelector('style[data-realscout-styles]')) {
      const style = document.createElement('style');
      style.setAttribute('data-realscout-styles', 'true');
      style.textContent = `
        realscout-office-listings {
          --rs-listing-divider-color: rgb(101, 141, 172);
          width: 100%;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      {/* Remove <Head> <script> and <style> tags, rely on useEffect for script and style injection */}
      <realscout-office-listings
        agent-encoded-id="QWdlbnQtMjI1MDUw"
        sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
        listing-status="For Sale"
        property-types="SFR,MF,TC"
        price-min="500000"
        price-max="1200000"
      />
    </>
  );
}
