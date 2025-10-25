# Nuxt 3 迁移完成

本项目已成功从 Vite + Vue Router 迁移到 Nuxt 3 框架。

## 主要变化

### 1. 项目结构

原结构 → 新结构：
- `src/views/` → `pages/` (Nuxt 自动路由)
- `src/components/` → `components/` (自动导入)
- `src/stores/` → `stores/` (Pinia 集成)
- `src/utils/` → `utils/`
- `src/apis/` → `apis/`
- `src/router/index.ts` → 已删除 (Nuxt 文件系统路由)
- `index.html` → 配置移至 `nuxt.config.ts`
- `App.vue` → `app.vue` (Nuxt 根组件)

### 2. 路由系统

**之前 (Vue Router):**
```typescript
// src/router/index.ts
const routes = [
  { path: '/index', component: () => import('../views/index.vue') },
  { path: '/story', component: () => import('../views/story.vue') }
]
```

**现在 (Nuxt 文件系统路由):**
```
pages/
  index.vue       → /index
  story.vue       → /story
  product.vue     → /product
  department/
    index.vue     → /department
    ganshi.vue    → /department/ganshi
    jishu.vue     → /department/jishu
```

### 3. 导航守卫

**之前:**
```typescript
// router/index.ts
router.beforeEach((to, from) => {
  // 路由守卫逻辑
})
```

**现在:**
```typescript
// middleware/navigation.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  // 全局中间件
})
```

### 4. 组件导入

**之前:**
```vue
<script>
import NavBar from '../components/NavBar.vue'
import { usePageStore } from '../stores/pages'
</script>
```

**现在 (自动导入):**
```vue
<script setup>
// 组件和 composables 自动导入，无需 import
const pageStore = usePageStore()
const router = useRouter()
</script>
```

### 5. 依赖更新

更新的主要包：
- `vue`: 3.3.4 → 3.5.22
- `pinia`: 2.1.4 → 3.0.3
- `sass`: 1.63.6 → 1.93.2
- `typescript`: 4.9.5 → 5.9.3
- `vue-tsc`: 1.8.1 → 3.1.2
- **移除**: `vue-router`, `vite`, `@vitejs/plugin-vue`
- **新增**: `nuxt` 4.2.0, `@pinia/nuxt` 0.11.2

## 配置文件

### nuxt.config.ts

```typescript
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: '精弘首页',
      // ... 其他配置
    }
  }
})
```

## 运行命令

**开发环境:**
```bash
pnpm dev
```

**生产构建:**
```bash
pnpm build
```

**预览构建:**
```bash
pnpm preview
```

**生成静态站点:**
```bash
pnpm generate
```

## 主要特性

### ✅ 保留的功能
- 所有页面和组件
- Pinia 状态管理
- 页面导航逻辑
- 响应式设计 (pageType: normal/middle/mini)
- 所有样式和资源

### 🚀 新增特性
- **服务端渲染 (SSR)** - 更好的 SEO 和首屏加载
- **自动导入** - 组件、composables、utils 无需手动导入
- **文件系统路由** - 基于文件结构自动生成路由
- **自动代码分割** - 更优的性能
- **内置优化** - 图片、字体、CSS 等自动优化
- **TypeScript 支持** - 完整的类型推导

## 注意事项

1. **路由跳转**: 继续使用 `useRouter().push()` 或 `<NuxtLink>`
2. **API 路径**: 所有导入路径已更新为 `~/` 前缀
3. **环境变量**: 使用 `.env` 文件 (已加入 .gitignore)
4. **构建输出**: `.nuxt/` 和 `.output/` 目录 (已加入 .gitignore)

## 文件保留

为了向后兼容和参考，保留了原始文件：
- `src/` - 原始源代码目录
- `vite.config.ts` - 原 Vite 配置
- `tsconfig.json` - TypeScript 配置

## 测试

构建已成功完成，输出位于 `.output/` 目录。
运行 `pnpm dev` 启动开发服务器进行测试。

## 下一步

1. 测试所有页面和功能
2. 检查 API 调用是否正常
3. 验证响应式布局
4. 考虑添加 SEO 优化 (useHead, useSeoMeta)
5. 优化静态资源加载

---

迁移时间: 2025-10-25
Nuxt 版本: 4.2.0
