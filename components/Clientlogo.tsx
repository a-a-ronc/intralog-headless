// components/ClientLogo.tsx
'use client'

import Image from 'next/image'

export default function ClientLogo({
  src,
  alt,
  height = 40,
  width = 120,
  className = '',
}: {
  src: string
  alt: string
  height?: number
  width?: number
  className?: string
}) {
  const isSvg = src.toLowerCase().endsWith('.svg')

  // SVGs aren’t bitmap-optimized by next/image; either <img> or Image with unoptimized both work.
  if (isSvg) {
    return (
      // Using <img> keeps colors crisp and avoids any SVG optimization warnings
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={className}
        style={{ objectFit: 'contain' }}
      />
    )
  }

  // Raster logos (PNG/JPG/WEBP/AVIF/GIF) – fully optimized by next/image
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
