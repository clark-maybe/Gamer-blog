import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH_STATIC

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`${basePath || ''}${src}`} {...rest} />
)

export default Image
