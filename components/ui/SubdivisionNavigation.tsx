'use client';
import Link from 'next/link';
import { useId, useState } from 'react';
import styles from './SubdivisionNavigation.module.css';

interface Subdivision {
  slug: string;
  name: string;
  type: string;
}

interface SubdivisionNavigationProps {
  currentSlug?: string;
  subdivisions?: Subdivision[];
}

const defaultSubdivisions = [
  { slug: 'san-marcos', name: 'San Marcos', type: 'Luxury/Gated' },
  { slug: 'casa-rosa', name: 'Casa Rosa', type: 'Luxury/Gated' },
  { slug: 'solano', name: 'Solano', type: 'Family' },
  { slug: 'encanto', name: 'Encanto', type: 'Family' },
  { slug: 'paradiso', name: 'Paradiso', type: 'Luxury/Gated' },
  { slug: 'palmilla', name: 'Palmilla', type: 'Luxury/Gated' },
  { slug: 'estancia', name: 'Estancia', type: 'Luxury/Gated' },
  { slug: 'talaverde', name: 'Talaverde', type: 'Luxury/Gated' },
  { slug: 'sonesta', name: 'Sonesta', type: 'Luxury/Gated' },
  { slug: 'barrington', name: 'Barrington', type: 'Premium Non-Gated' },
  { slug: 'monterossa', name: 'Monterossa', type: 'Premium Non-Gated' },
  { slug: 'kingwood', name: 'Kingwood', type: 'Premium Non-Gated' },
  { slug: 'ashton-park', name: 'Ashton Park', type: 'Family' },
  { slug: 'bella-vista', name: 'Bella Vista', type: 'Family' },
  { slug: 'hillstone', name: 'Hillstone', type: 'Family' },
  { slug: 'portofino', name: 'Portofino', type: 'Family' },
  { slug: 'somerset', name: 'Somerset', type: 'Family' },
  { slug: 'summerfield', name: 'Summerfield', type: 'Family' },
  { slug: 'vista-verde', name: 'Vista Verde', type: 'Family' },
  { slug: 'talega', name: 'Talega', type: 'Family' },
  { slug: 'canterra', name: 'Canterra', type: 'Additional' },
  { slug: 'capri', name: 'Capri', type: 'Additional' },
  { slug: 'cara-vella', name: 'Cara Vella', type: 'Additional' },
  { slug: 'miraleste', name: 'Miraleste', type: 'Additional' },
  { slug: 'sage-hills', name: 'Sage Hills', type: 'Additional' },
  { slug: 'santalina', name: 'Santalina', type: 'Additional' },
];

export default function SubdivisionNavigation({ 
  currentSlug, 
  subdivisions = defaultSubdivisions 
}: SubdivisionNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const listId = useId();

  // Group subdivisions by type
  const groupedSubdivisions = subdivisions.reduce((acc, sub) => {
    if (!acc[sub.type]) {
      acc[sub.type] = [];
    }
    acc[sub.type].push(sub);
    return acc;
  }, {} as Record<string, Subdivision[]>);

  const typeOrder = ['Luxury/Gated', 'Premium Non-Gated', 'Family', 'Additional'];

  return (
    <nav className={styles.subdivisionNav} aria-label="Subdivision Navigation">
      <div className={styles.navHeader}>
        <h3 className={styles.navTitle}>Explore The Vistas Subdivisions</h3>
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={listId}
        >
          {isOpen ? 'Hide' : 'Show'} All Subdivisions
          <span className={`${styles.toggleIcon} ${isOpen ? styles.open : ''}`}>
            ▼
          </span>
        </button>
      </div>

      <div 
        id={listId}
        className={`${styles.subdivisionList} ${isOpen ? styles.open : ''}`}
      >
        {typeOrder.map((type) => {
          const typeSubs = groupedSubdivisions[type];
          if (!typeSubs || typeSubs.length === 0) return null;

          return (
            <div key={type} className={styles.typeGroup}>
              <h4 className={styles.typeTitle}>{type}</h4>
              <ul className={styles.subdivisionGrid}>
                {typeSubs.map((subdivision) => (
                  <li key={subdivision.slug} className={styles.subdivisionItem}>
                    <Link
                      href={`/service-area/${subdivision.slug}`}
                      className={`${styles.subdivisionLink} ${
                        currentSlug === subdivision.slug ? styles.current : ''
                      }`}
                    >
                      {subdivision.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className={styles.navFooter}>
        <Link href="/service-area" className={styles.viewAllLink}>
          View All Subdivisions →
        </Link>
      </div>
    </nav>
  );
}
