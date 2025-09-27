import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './MobileNav.module.css';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: '/current-listing', label: 'Vistas Listing' },
  { href: '/communities', label: 'Communities' },
  { href: '/market', label: 'Market' },
  { href: '/hidden-home-equity-tax', label: 'Hidden Home Equity Tax' },
  { href: '/compare', label: 'Compare' },
  {
    href: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0',
    label: 'The Vistas',
  },
  { href: '/sold', label: 'Sold' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const _pathname = usePathname();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          className={`fixed inset-0 z-[2000] flex ${styles.overlayBg}`}
        >
          {/* Overlay to close menu */}
          <div className="flex-1" onClick={onClose} />
          {/* Slide-out menu */}
          <motion.nav
            role="navigation"
            aria-label="Main menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            className={`w-72 max-w-[90vw] h-full bg-white shadow-xl flex flex-col p-6 relative ${styles.menuRadius}`}
          >
            {/* Close button */}
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
            {/* Navigation links */}
            <div className="flex flex-col gap-4 mt-8 mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`text-lg font-medium py-2 px-3 rounded transition-colors text-[#0A2540] hover:bg-[#F7F9FC] active:bg-[#3A8DDE] ${
                    _pathname === link.href ? 'bg-[#3A8DDE] text-white' : ''
                  } ${styles.touchManipulation}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Quick actions */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="tel:7025500112"
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#16B286] text-white rounded font-semibold text-base shadow hover:bg-[#13996e] transition-colors ${styles.touchManipulation}`}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                </svg>
                Call
              </a>
              <a
                href="mailto:DrJanSells@SummerlinWestRealEstate.com"
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#3A8DDE] text-white rounded font-semibold text-base shadow hover:bg-[#2563eb] transition-colors ${styles.touchManipulation}`}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.83l7.29 6.46a1 1 0 001.42 0L20 8.83V18H4z" />
                </svg>
                Email
              </a>
            </div>
            {/* Property search links */}
            <div className="flex gap-4 justify-center mt-auto">
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Browse Properties"
                className={`hover:text-[#3A8DDE] ${styles.iconLarge}`}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </a>
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Listings"
                className={`hover:text-[#16B286] ${styles.iconLarge}`}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718 2.347 5.999 2.334 6.408 2.334 12c0 5.592.013 6.001.072 7.282.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.281.072-1.69.072-7.282 0-5.592-.013-6.001-.072-7.282-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                </svg>
              </a>
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Search Properties"
                className={`hover:text-[#0A2540] ${styles.iconLarge}`}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
