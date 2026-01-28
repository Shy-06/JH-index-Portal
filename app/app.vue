<script setup lang="ts">
const pageStore = usePageStore();

function handleResize() {
  const width = document.documentElement.clientWidth;
  const body = document.querySelector('body');

  if (width >= 1024) {
    pageStore.pageSize = 'normal';
    body?.setAttribute('style', 'min-width: 1440px');
  } else if (width >= 768) {
    pageStore.pageSize = 'middle';
    body?.setAttribute('style', 'min-width: 420px');
  } else {
    pageStore.pageSize = 'mini';
    body?.setAttribute('style', 'min-width: 320px');
  }
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <NavBar />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
