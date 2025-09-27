import Image from 'next/image';
import styles from './AgentAvatar.module.css';

export default function AgentAvatar({
  src,
  alt,
  size = 160,
  borderColor = '#FFD700',
}: {
  src: string;
  alt: string;
  size?: number;
  borderColor?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full mx-auto mb-4 ${styles.imageContainer}`}
    />
  );
}
