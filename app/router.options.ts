import type { RouterConfig } from '@nuxt/schema'

export default {
    scrollBehavior(to, from, savedPosition) {
        if (from && to.path !== from.path) {
            window.scrollTo({ top: 0 });
        }
        return false;
    }
} satisfies RouterConfig
