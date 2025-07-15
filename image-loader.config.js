import { imageLoader } from 'next-image-loader/image-loader'

// write self-define a custom loader
// (resolverProps: { src: string; width: number; quality?: number }) => string
imageLoader.loader = ({ src, width, quality }) => {
  const params = new URLSearchParams({ url: src, w: Math.min(width, 1080), q: quality || 75 })
  return `${process.env.NEXT_PUBLIC_OPTIMIZE_DOMAIN}?${params}`
}