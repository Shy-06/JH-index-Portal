# 精弘首页前端仓库

本项目是精弘网络首页的前端应用，基于 Nuxt 4 全栈框架构建。

## 技术栈

- **核心框架**: Nuxt 4 (支持 SSR/SSG)
- **前端**: Vue.js 3 + TypeScript
- **状态管理**: Pinia
- **样式**: Sass/SCSS
- **图像优化**: Nuxt Image (自定义 CubeImage Provider)
- **包管理**: pnpm

## 项目结构

```
jh-homepage
├── app.vue                    # 应用根组件，处理响应式布局
├── nuxt.config.ts             # Nuxt 配置文件
├── tsconfig.json              # TypeScript 配置
├── package.json               # 项目依赖和脚本
│
├── assets/                    # 静态资源目录
│   └── css/                   # 全局样式文件
│       └── main.scss          # 主样式入口
│
├── components/                # 可复用 Vue 组件
│   ├── NavBar.vue             # 顶部导航栏
│   ├── Footer.vue             # 底部页脚
│   ├── PageTop.vue            # 页面顶部
│   ├── Start.vue              # 启动组件
│   ├── Introduce.vue          # 介绍组件
│   ├── Contact.vue            # 联系方式
│   ├── History.vue            # 历史组件
│   ├── Timeline.vue           # 时间线组件
│   ├── Carousel.vue           # 轮播图
│   ├── CarouselCards.vue      # 卡片轮播
│   ├── CarouselPicturesBig.vue # 大图轮播
│   ├── JHButton.vue           # 按钮组件
│   ├── JHInput.vue            # 输入框组件
│   ├── JHSelect.vue           # 选择框组件
│   ├── JHCard.vue             # 卡片组件
│   ├── JHLabel.vue            # 标签组件
│   ├── JHNotice.vue           # 通知组件
│   └── JHDataPresent.vue      # 数据展示组件
│
├── pages/                     # 页面路由（自动生成路由）
│   ├── index.vue              # 首页 (/)
│   ├── activity.vue           # 活动页 (/activity)
│   ├── product.vue            # 产品页 (/product)
│   ├── story.vue              # 故事页 (/story)
│   ├── join.vue               # 招新页 (/join)
│   └── department/            # 部门页面
│       ├── index.vue          # 部门总览 (/department)
│       ├── jishu.vue          # 技术部 (/department/jishu)
│       ├── sheji.vue          # 设计部 (/department/sheji)
│       ├── xinmeiti.vue       # 新媒体部 (/department/xinmeiti)
│       └── ganshi.vue         # 感石工作室 (/department/ganshi)
│
├── stores/                    # Pinia 状态管理
│   └── pages.ts               # 页面状态管理（响应式布局状态）
│
├── constants/                 # 常量数据配置
│   ├── index.ts               # 常量入口
│   ├── activity.ts            # 活动数据
│   ├── product.ts             # 产品数据
│   ├── story.ts               # 故事数据
│   ├── department.ts          # 部门信息
│   └── recruitment.ts         # 招新数据
│
├── providers/                 # 自定义服务提供者
│   └── cubeImage.ts           # 自定义图片服务 Provider
│
├── middleware/                # 中间件
│   └── navigation.global.ts   # 全局导航中间件
│
└── public/                    # 公共静态文件
    └── favicon.png            # 网站图标
```

## 核心特性

- **响应式布局**: 支持桌面端（≥1024px）、平板端（768-1023px）、移动端（<768px）三种布局模式
- **自动路由**: 基于 `pages/` 目录的文件结构自动生成路由
- **组件化设计**: 高度模块化的组件库，易于维护和扩展
- **图片优化**: 自定义 CubeImage Provider，优化图片加载性能
- **类型安全**: 全面的 TypeScript 类型支持
- **SSR/SSG 支持**: 支持服务端渲染和静态站点生成

## 开发部署

### 1. 安装依赖
```bash
pnpm install
```

### 2. 开发模式
```bash
pnpm run dev
```
访问 http://localhost:3000

### 3. 生产构建
```bash
pnpm run build
```

### 4. 预览生产构建
```bash
pnpm run preview
```

### 5. 静态站点生成（可选）
```bash
pnpm run generate
```

## 生产部署

### 方式一：Node.js 服务器部署
1. 构建项目
```bash
pnpm run build
```

2. 上传 `.output` 目录到服务器

3. 在服务器上运行
```bash
node .output/server/index.mjs
```

### 方式二：静态部署
1. 生成静态文件
```bash
pnpm run generate
```

2. 上传 `.output/public` 目录到服务器

3. 配置静态资源服务器（以 nginx 为例）
```nginx
server {
    listen 8080;
    server_name jh-home;
    
    location / {
        root /www/jhhome;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

4. 注意检查您配置的监听端口是否开放

## 配置说明

### 图片服务配置
项目使用自定义的 CubeImage Provider 作为图片服务，配置位于 `nuxt.config.ts`

### SEO 配置
页面 meta 信息配置在 `nuxt.config.ts` 的 `app.head` 中:
- 网站标题: "精弘首页"
- 语言: 中文简体 (zh-CN)
- 响应式视口配置
- Favicon 配置

### 响应式断点
- **Desktop** (normal): ≥ 1024px，最小宽度 1440px
- **Tablet** (middle): 768-1023px，最小宽度 420px  
- **Mobile** (mini): < 768px，最小宽度 320px

