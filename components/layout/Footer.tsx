import Link from 'next/link';
import type React from 'react';
import LeadCaptureForm from '../ui/LeadCaptureForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-10 pb-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-[#0A2540] mb-2">Dr. Jan Duffy</h3>
          <div className="text-sm text-gray-700 mb-2">
            1980 Festival Plaza Dr (One Summerlin)
            <br />
            Las Vegas, NV 89135
          </div>
          <div className="text-sm text-gray-700 mb-2">NV License #1234567</div>
          <div className="text-sm text-gray-700 mb-2">Brokered by Realty Experts, LLC</div>
          <div className="text-sm text-gray-700">
            Phone:{' '}
            <a href="tel:7025500112" className="text-[#3A8DDE]">
              (702) 550-0112
            </a>
          </div>
          <div className="text-sm text-gray-700">
            Email:{' '}
            <a href="mailto:DrJanSells@SummerlinWestRealEstate.com" className="text-[#3A8DDE]">
              DrJanSells@SummerlinWestRealEstate.com
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-[#0A2540] mb-2">Navigate</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              <Link href="/about" className="hover:text-[#3A8DDE]">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-[#3A8DDE]">
                Team
              </Link>
            </li>
            <li>
              <Link href="/properties" className="hover:text-[#3A8DDE]">
                Properties
              </Link>
            </li>
            <li>
              <Link href="/communities" className="hover:text-[#3A8DDE]">
                Communities
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-[#3A8DDE]">
                Press
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-[#3A8DDE]">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#3A8DDE]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Properties */}
        <div>
          <h4 className="font-semibold text-[#0A2540] mb-2">Properties</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              <Link href="/current-listing" className="hover:text-[#3A8DDE]">
                Current Listings
              </Link>
            </li>
            <li>
              <Link href="/sold" className="hover:text-[#3A8DDE]">
                Recent Sales
              </Link>
            </li>
            <li>
              <a
                href="https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0"
                className="hover:text-[#3A8DDE]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home Search
              </a>
            </li>
            <li>
              <a
                href="https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0"
                className="hover:text-[#3A8DDE]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Map Search
              </a>
            </li>
            <li>
              <a
                href="https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0"
                className="hover:text-[#3A8DDE]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find Homes for Sale
              </a>
            </li>
          </ul>
        </div>

        {/* Communities */}
        <div>
          <h4 className="font-semibold text-[#0A2540] mb-2">Communities</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              <Link href="/the-vistas" className="hover:text-[#3A8DDE]">
                The Vistas
              </Link>
            </li>
            <li>
              <Link href="/communities" className="hover:text-[#3A8DDE]">
                Stonebridge
              </Link>
            </li>
            <li>
              <Link href="/communities" className="hover:text-[#3A8DDE]">
                Redpoint
              </Link>
            </li>
            <li>
              <Link href="/communities" className="hover:text-[#3A8DDE]">
                The Cliffs
              </Link>
            </li>
            <li>
              <Link href="/communities" className="hover:text-[#3A8DDE]">
                Reverence
              </Link>
            </li>
            <li>
              <Link href="/downtown-summerlin" className="hover:text-[#3A8DDE]">
                Downtown Summerlin
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="font-semibold text-[#0A2540] mb-2">Newsletter Signup</h4>
          <LeadCaptureForm
            variant="inline"
            title="Subscribe to Our Newsletter"
            subtitle="Monthly updates, market trends, and exclusive insights."
            source="Footer Newsletter"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-100 text-xs text-gray-500 gap-2">
        <div>
          &copy; {new Date().getFullYear()} Dr. Jan Duffy Real Estate. All rights reserved.{' '}
          <span className="hidden md:inline">|</span>{' '}
          <span className="block md:inline">Each office independently owned and operated.</span>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://www.facebook.com/summerlinwestrealestate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#3A8DDE]"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/summerlinwestrealestate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#16B286]"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718 2.347 5.999 2.334 6.408 2.334 12c0 5.592.013 6.001.072 7.282.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.281.072-1.69.072-7.282 0-5.592-.013-6.001-.072-7.282-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/summerlinwestrealestate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-[#0A2540]"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
        <div className="text-right text-xs text-gray-400 mt-2 md:mt-0">
          <span>
            All information deemed reliable but not guaranteed. Equal Housing Opportunity.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
