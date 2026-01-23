# 精弘首页前端仓库

本项目使用 Nuxt 4 全栈框架构建：
- Vue.js 3 前端框架
  - TypeScript
  - Nuxt 4 全栈框架
  - Pinia 全局状态管理
  - Nuxt Image 图像优化
  - Sass/SCSS 样式预处理器

## 项目结构

- `app.vue` 根组件
- `assets/` 静态资源目录
  - `css/` 样式文件
- `components/` Vue 组件
  - 页面组件（NavBar, Footer, PageTop 等）
  - UI 组件（JHButton, JHInput, JHCard 等）
  - 功能组件（Carousel, Timeline, History 等）
- `pages/` 页面路由（自动生成路由）
  - `index.vue` 首页
  - `activity.vue` 活动页
  - `product.vue` 产品页
  - `story.vue` 故事页
  - `join.vue` 加入页
  - `department/` 部门页面
- `stores/` Pinia 状态管理
- `constants/` 常量数据配置
  - `activity.ts` 活动数据
  - `product.ts` 产品数据
  - `story.ts` 故事数据
  - `department.ts` 部门数据
  - `recruitment.ts` 招新数据
- `middleware/` 中间件
  - `navigation.global.ts` 全局导航中间件
- `utils/` 工具函数
  - `const.ts` 配置常量
- `public/` 公共静态文件
- `nuxt.config.ts` Nuxt 配置文件

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

- 修改配置文件：`nuxt.config.ts`
- 运行时配置：`utils/const.ts`
- 图片资源配置在 `nuxt.config.ts` 中的 `runtimeConfig.public.cubeBaseURL`
