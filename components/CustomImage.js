import Image from 'next/image';

export default function CustomImage({ src, alt, sizes, ...otherProps }) {
  return (
    <figure className="aspect-4/3 relative">
      <Image
        className="object-cover object-top"
        src={src}
        alt={alt || ''}
        fill={true}
        loading="lazy"
        sizes={sizes || '(max-width: 768px) 100vw, 672px'}
        {...otherProps}
      />
    </figure>
  );
}
