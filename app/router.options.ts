import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: _routes => {
    return [
      ..._routes,
      { path: '/index', redirect: '/' }
    ]
  },
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop !== false) {
      if (from && to.path.replace(/\/$/, "") !== from.path.replace(/\/$/, "")) return ({ left: 0, top: 0 });
    }
    return false;
  }
} satisfies RouterConfig
