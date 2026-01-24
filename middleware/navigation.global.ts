import { usePageStore } from '~/stores/pages';

const routeMap: Record<string, { pageNow: number; title: string }> = {
  '/': { pageNow: 0, title: '精弘首页' },
  '/story': { pageNow: 1, title: '我们的故事' },
  '/product': { pageNow: 2, title: '我们的产品' },
  '/department': { pageNow: 3, title: '我们的部门' },
  '/activity': { pageNow: 4, title: '我们的活动' },
  '/join': { pageNow: 5, title: '加入我们' },
};

export default defineNuxtRouteMiddleware((to) => {
  const pageStore = usePageStore();

  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }

  if (/^\/index(?:\/|$)/.test(to.path)) {
    const newPath = to.path.replace(/^\/index/, '') || '/';
    return navigateTo(newPath, { redirectCode: 301 });
  }

  const path = to.path;
  const firstSegment = `/${path.split('/')[1]}`;

  const route = routeMap[path] || routeMap[firstSegment];
  if (route) {
    pageStore.pageNow = route.pageNow;
    useHead({ title: route.title });
  }
});
