'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  sticky?: boolean;
}

export default function Logo({
  className = 'flex items-center',
  width = 150,
  height = 68,
  sticky = false,
}: LogoProps) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <Link href="/" className={className}>
      {/* Light logo - shown by default, hidden on dark mode */}
      <Image
        src="/images/header/logo.svg"
        alt="Summerlin West Real Estate"
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isHomepage
            ? sticky
              ? 'block dark:hidden'
              : 'hidden'
            : sticky
              ? 'block dark:hidden'
              : 'block dark:hidden'
        }`}
        priority
      />

      {/* Dark logo - hidden by default, shown on dark mode */}
      <Image
        src="/images/header/dark-logo.svg"
        alt="Summerlin West Real Estate"
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isHomepage
            ? sticky
              ? 'hidden dark:block'
              : 'block'
            : sticky
              ? 'dark:block hidden'
              : 'dark:block hidden'
        }`}
        priority
      />
    </Link>
  );
}
