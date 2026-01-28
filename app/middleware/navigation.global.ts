const routeMap: Record<string, { currentPageNo: number; title: string }> = {
  '/': { currentPageNo: 0, title: '精弘首页' },
  '/story': { currentPageNo: 1, title: '我们的故事' },
  '/product': { currentPageNo: 2, title: '我们的产品' },
  '/department': { currentPageNo: 3, title: '我们的部门' },
  '/activity': { currentPageNo: 4, title: '我们的活动' },
  '/join': { currentPageNo: 5, title: '加入我们' },
};

export default defineNuxtRouteMiddleware((to) => {
  const pageStore = usePageStore();

  if (/^\/index(?:\/|$)/.test(to.path)) {
    const newPath = to.path.replace(/^\/index(?:\/|$)/, '/') || '/';
    return navigateTo(newPath, { redirectCode: 301 });
  }

  const path = to.path;
  const firstSegment = `/${path.split('/')[1]}`;

  const route = routeMap[path] || routeMap[firstSegment];
  if (route) {
    pageStore.currentPageNo = route.currentPageNo;
    useHead({ title: route.title });
  }
});
