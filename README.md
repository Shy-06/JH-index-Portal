# 精弘首页前端仓库

本项目基于 **Nuxt 3** 框架构建，使用以下技术栈：

- **Nuxt 3** - Vue.js 全栈框架
- **Vue.js 3** - 渐进式前端框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **Pinia** - Vue 官方状态管理库
- **Vue-Echarts** - 数据可视化组件
- **Sass** - CSS 预处理器

## 项目结构

```
├── app.vue              # 应用根组件
├── nuxt.config.ts       # Nuxt 配置文件
├── pages/               # 页面目录（基于文件的路由）
│   ├── index.vue        # 首页
│   ├── story.vue        # 精弘故事
│   ├── product.vue      # 产品展示
│   ├── activity.vue     # 活动页面
│   ├── join.vue         # 加入我们
│   └── department/      # 部门介绍页面
├── components/          # 组件目录
├── stores/              # Pinia 状态管理
├── assets/              # 静态资源（CSS、图片等）
├── public/              # 公共资源（直接复制到根目录）
├── middleware/          # 路由中间件
└── utils/               # 工具函数
```

## 开发

### 环境要求

- Node.js >= 18
- pnpm

### 安装依赖

```bash
pnpm install
```

## 技术文档

- [Nuxt 3 文档](https://nuxt.com/)
- [Vue 3 文档](https://cn.vuejs.org/)
- [Pinia 文档](https://pinia.vuejs.org/zh/)



