const basePath = process.env.BASE_PATH

const Resource = ({ src, name }: any) => {
  //提取文件格式
  const fileType = src.split('.').pop()

  return (
    <div className="resourceWrapper">
      <a className="resource" href={src} target="_blank">
        {name || '这是一个资源'} ({fileType}格式) - 点击下载
      </a>
    </div>
  )
}

export default Resource
