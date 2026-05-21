export interface Project {
  type: 'external' | 'internal' // 'external' 表示外链，'internal' 表示内部项目
  title: string
  description: string
  imgSrc: string
  href?: string
  details?: string
}

const projectsData: Project[] = [
  {
    type: 'external',
    title: 'Coin 监控',
    description: `监控不同数字货币的价格`,
    imgSrc: 'https://logjs.site/shib_logo.png',
    href: 'https://logjs.site/coin_monitor.html',
  },
]

export default projectsData
