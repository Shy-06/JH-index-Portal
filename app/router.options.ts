import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: _routes => {
    return [
      ..._routes,
      { path: '/index', redirect: '/' }
    ]
  },
  scrollBehavior(to, from, savedPosition) {
    if (!(typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop))
      return false;
    if (savedPosition) return savedPosition;
    if (from && to.path.replace(/\/$/, "") !== from.path.replace(/\/$/, ""))
      return ({ left: 0, top: 0 });
    return false;
  }
} satisfies RouterConfig
