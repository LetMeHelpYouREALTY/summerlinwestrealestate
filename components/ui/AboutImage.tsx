import Image from 'next/image';
import styles from './AboutImage.module.css';

export default function AboutImage({
  src,
  alt,
  width = 400,
  height = 300,
  className = '',
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-2xl ${className} ${styles.image}`}
      style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
      loading="lazy"
    />
  );
}
