export default defineNuxtRouteMiddleware((to) => {
  const pageStore = usePageStore();
  
  if (process.client) {
    window.scrollTo({ top: 0 });
  }
  
  if (to.path === '/index') {
    return navigateTo('/', { redirectCode: 301 });
  }
  
  const path = to.path;
  const firstSegment = path.split('/')[1];
  
  if (path === '/' || path === '/index') {
    pageStore.pageNow = 0;
    useHead({ title: '精弘首页' });
  } else if (path === '/story') {
    pageStore.pageNow = 1;
    useHead({ title: '我们的故事' });
  } else if (path === '/product') {
    pageStore.pageNow = 2;
    useHead({ title: '我们的产品' });
  } else if (firstSegment === 'join') {
    pageStore.pageNow = 5;
    useHead({ title: '加入我们' });
  } else if (firstSegment === 'department') {
    pageStore.pageNow = 3;
    useHead({ title: '我们的部门' });
  } else if (path === '/activity') {
    pageStore.pageNow = 4;
    useHead({ title: '我们的活动' });
  } else if (path === '/admin') {
    pageStore.pageNow = 6;
    useHead({ title: '管理页面' });
  }
});
