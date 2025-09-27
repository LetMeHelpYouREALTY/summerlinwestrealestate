'use client';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Header/Logo';
import styles from './Header.module.css';

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
  submenu?: NavLink[];
}

const navLinks: NavLink[] = [
  { href: '/about', label: 'Resume' },
  { href: '/team', label: 'Team' },
  {
    href: '/properties',
    label: 'Properties',
    submenu: [
      { href: '/current-listing', label: 'Current Listings' },
      { href: '/sold', label: 'Recent Sales' },
      {
        href: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0',
        label: 'Home Search',
        external: true,
      },
    ],
  },
  {
    href: '/communities',
    label: 'Communities',
    submenu: [
      { href: '/service-area', label: 'The Vistas Service Area' },
      { href: '/service-area/san-marcos', label: 'San Marcos' },
      { href: '/service-area/casa-rosa', label: 'Casa Rosa' },
      { href: '/service-area/solano', label: 'Solano' },
      { href: '/service-area/encanto', label: 'Encanto' },
      { href: '/service-area/paradiso', label: 'Paradiso' },
      { href: '/service-area/palmilla', label: 'Palmilla' },
    ],
  },
  { href: '/press', label: 'Press' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveSubmenu(label);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <nav className={styles.navDesktop} aria-label="Main navigation">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className={styles.navItem}
              onMouseEnter={() => link.submenu && handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
              role={link.submenu ? "button" : undefined}
              tabIndex={link.submenu ? 0 : undefined}
            >
              {link.external ? (
                <a
                  href={link.href}
                  className={styles.navLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              )}

              {link.submenu && activeSubmenu === link.label && (
                <div className={styles.submenu}>
                  {link.submenu.map((subLink) => (
                    <div key={subLink.href} className={styles.submenuItem}>
                      {subLink.external ? (
                        <a
                          href={subLink.href}
                          className={styles.submenuLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {subLink.label}
                        </a>
                      ) : (
                        <Link href={subLink.href} className={styles.submenuLink}>
                          {subLink.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
