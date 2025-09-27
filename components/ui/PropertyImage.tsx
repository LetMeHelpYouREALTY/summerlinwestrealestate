import Image from 'next/image';
import styles from './PropertyImage.module.css';

export default function PropertyImage({
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
    <div className={styles.imageContainer}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-xl shadow-md ${className} ${styles.image}`}
        loading="lazy"
      />
    </div>
  );
}
