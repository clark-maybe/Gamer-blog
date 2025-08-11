const basePath = process.env.BASE_PATH

const Image = ({ src, name }: any) => (
  <div className="resourceWrapper">
    <a href={src} target="_blank">
      {name || '这是一个资源'}
    </a>
  </div>
)

export default Image
