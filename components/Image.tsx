import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH_STATIC

const Image = ({ src, ...rest }: ImageProps) => {

  return <NextImage src={`${basePath || ''}${src}`} unoptimized={true} {...rest} />

}

export default Image
