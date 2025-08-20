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

  // SVGs: serve directly to avoid next/image warnings and preserve crisp vectors
  if (isSvg) {
    return (
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

  // Raster logos (PNG / JPG / WEBP / AVIF etc.) use next/image for optimization
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
