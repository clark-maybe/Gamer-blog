import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH_STATIC

const Image = ({ src, ...rest }: ImageProps) => {
  const isExternal = typeof src === 'string' && src.startsWith('http')
  const imageSrc = isExternal ? src : `${basePath || ''}${src}`

  return <NextImage src={imageSrc} unoptimized={isExternal} {...rest} />
}

export default Image
