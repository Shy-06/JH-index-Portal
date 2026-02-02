<div align="center">

# 精弘首页

[**浙江工业大学精弘网络主页代码仓库**](https://github.com/zjutjh/JingHong-Home-Vue)

[![Version](https://img.shields.io/badge/version-3.1.0-blue.svg)](package.json)
[![Nuxt](https://img.shields.io/badge/Nuxt-4.3.0-00DC82.svg)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D.svg)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6.svg)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzjutjh%2FJingHong-Home-Vue)

</div>

## ✨ 简介

[精弘网络](https://myzjut.org)主页，展示团队风采、产品服务和招新信息。

## 🚀 技术栈

- **框架**: Nuxt 4 + Vue 3
- **语言**: TypeScript
- **状态管理**: Pinia
- **样式**: Sass

## 📁 项目结构

```
jh-homepage/
├── app/                          # 应用源代码
│   ├── app.vue                   # 应用入口组件
│   ├── router.options.ts         # 路由配置
│   ├── assets/                   # 样式资源
│   │   └── css/                  # 全局和组件样式
│   │       ├── components/       # 组件样式
│   │       ├── pages/            # 页面样式
│   │       └── main.scss         # 全局样式
│   ├── components/               # 可复用组件库
│   │   ├── app/                  # 应用级组件
│   │   ├── index/                # 首页组件
│   │   ├── story/                # 故事页面组件
│   │   ├── department/           # 部门页面组件
│   │   └── *.vue                 # 通用组件
│   ├── layouts/                  # 页面布局
│   │   └── default.vue           # 默认布局
│   ├── pages/                    # 页面路由
│   │   ├── index.vue             # 首页
│   │   ├── activity.vue          # 活动展示
│   │   ├── product.vue           # 产品介绍
│   │   ├── story.vue             # 团队故事
│   │   ├── join.vue              # 招新页面
│   │   └── department/           # 部门介绍子页面
│   ├── stores/                   # Pinia 状态管理
│   ├── plugins/                  # Nuxt 插件
│   └── providers/                # 服务提供者
├── constants/                    # 全局配置常量
│   ├── activity.ts               # 活动常量
│   ├── department.ts             # 部门常量
│   ├── product.ts                # 产品常量
│   ├── recruitment.ts            # 招新常量
│   ├── story.ts                  # 故事常量
│   └── index.ts                  # 首页常量
├── public/                       # 公共静态资源
├── nuxt.config.ts                # Nuxt 配置文件
├── tsconfig.json                 # TypeScript 配置
├── package.json                  # 项目依赖配置
└── pnpm-lock.yaml                # 依赖锁定文件
```

## 🚦 快速开始

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

启动后访问 http://localhost:3000

## ⚙️ 配置说明

### 图片服务

在 `nuxt.config.ts` 中配置 `cubeBaseURL`，图片服务基于 [精弘立方储存](https://github.com/zjutjh/Cube-Go) 实现。

## 🔧 更新手册

项目的年度维护和更新指南请参考 [更新手册](docs/UPDATE_GUIDE.md)，包括：

- 📅 年度信息维护（首页、故事、部门、活动等）
- 🔧 项目维护（依赖更新、版本同步、配置检查等）
- ✅ 维护自检清单

## 📄 License

本项目基于 [MIT License](LICENSE) 开源。

---

<div align="center">

Made with ❤️ by [精弘网络](https://github.com/zjutjh)

</div>
