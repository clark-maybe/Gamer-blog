# GAMER Next.js Blog

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.5-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)

  <a href="./README.en-US.md">🇬🇧 English</a> | <a href="./README.ja-JP.md">🇯🇵 日本語</a>

Gamer，一个基于Nextjs开发的「游戏」主题个人网站，融合了现代 Web 技术与属于游戏的独特交互体验。

## :sparkles: 示例站点

- [Clark's Blog](https://clarkf.site)

如果你也使用了Gamer，欢迎提出PR～

## TODO
- [ ] 全面的i18n支持
- [ ] 自动计算Coop中的社群卡片等级（目前没多少coop，干脆人工计算了）
- [ ] Sparks页面性能问题和移动端适配

## :rocket: 基础特性

- **:zap: 极致性能**：在 LightHouse、Gtmetrix测试中表现卓越，平均Performance 95%, SEO 与 Best Practice 均接近 100%
- **:art: 游戏风设计**：简约而不简单的游戏风UI/组件设计，完美契合主题
- **:gem: 细节至上**：响应式设计、流畅且现代化的前端动画
- **☀️ 深色/浅色模式**：精心设计的深色/浅色模式，可以记住你的偏好
- **🌎 国际化支持**：路由层面的国际化支持，SEO友好、无感切换
- **:computer: 实时状态**：通过WS连接，实时查看博主状态、在线人数、发送弹幕
- **:pencil: 语法支持**：支持丰富的 Markdown 、 Latex语法，满足多样化写作需求
- **🔌 扩展插件**：可选择Buttondown、kBar、Umami等插件拓展功能

## 🎮 特色功能

「你可以像玩游戏一样浏览博客！」

- **完整的键盘/手柄支持**: 无须鼠标也可以流畅浏览博客，还支持手柄震动哦
- **探索不再孤单**: 和niko一起探索不同页面，以假想的第三人称视角介绍自己的博文/页面，这里还有许多隐藏的交互等待挖掘
- **Quest：寻找彩蛋**: Gamer融合了多达20+游戏作品的要素，并通过适当的风格化调整契合主题
- **Sparks**: 穿过深处的红色通道，搭乘「海原電鉄」前往另一个风格迥异的世界

### 🔧 技术特性

- **Next.js 15** + **React 19** + **TypeScript**
- **Tailwind CSS 4** 样式系统
- **Contentlayer** 内容管理
- **Supabase** 后端服务
- **Framer Motion** 动画库
- **MDX** 支持

## 🚀 快速开始

### 环境要求

- Node.js 18+
- Yarn 或 npm

### 安装依赖

```bash
npm install
```

### 环境配置

复制 `.env.example` 到 `.env.local` 并配置环境变量。

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建部署

```bash
npm run build
npm start
```

## 📁 项目结构

```
GAMER-Nextjs-blog/
├── app/                  # Next.js App Router
│   ├── [locale]/         # 国际化路由
│   │   └── (main)/       # 主要页面
│   │       ├── blog/     # 博客页面
│   │       ├── projects/
│   │       ├── sparks/
│   │       └── ...
│   └── api/              # API 路由
├── components/           # React 组件
│   ├── CharacterOverlay.tsx   # 角色控制组件
│   ├── AnimatedConstruction.tsx # 建筑动画
│   ├── GuessGame.tsx          # 猜游戏组件
│   └── ...
├── data/                 # 静态数据
│   ├── blog/             # 博客文章 (MDX)
│   ├── authors/          # 作者信息
│   └── projectsData.ts   # 项目数据
├── contexts/             # React Context
├── css/                  # 样式文件
├── public/               # 静态资源
└── supabase/             # Supabase Edge Functions
```

## 🌐 国际化

项目使用 `next-intl` 实现多语言支持：

```typescript
// messages/zh.json
{
  "home": {
    "title": "欢迎来到我的博客",
    "description": "一个游戏化的个人空间"
  }
}
```

## 📝 博客写作

使用自定义样式，请参考：`style-test.mdx`

使用 MDX 格式编写博客文章：

```mdx
---
title: '我的第一篇博客'
date: '2024-01-01'
tags: ['技术', '分享']
draft: false
summary: '这是一篇示例博客文章'
---

# 欢迎来到我的博客

这里可以使用 **Markdown** 语法，也可以使用 React 组件！
```

## 🔧 部署

### Vercel 部署

1. Fork 本仓库
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署完成

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 协议 / License

本项目使用 [GNU GPL v3](https://choosealicense.com/licenses/gpl-3.0/) 协议。

使用Gamer时，**请勿移除网页底部的署名链接**。

## 🙏 致谢

- 基于 [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) 开发
- 感谢所有开源项目的贡献者

## 📞 联系

- 网站: [https://clarkf.site](https://clarkf.site)
- GitHub: [@clark-maybe](https://github.com/clark-maybe)
- 邮箱: me@clarkf.site

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
