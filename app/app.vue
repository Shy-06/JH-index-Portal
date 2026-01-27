<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const pageStore = usePageStore();

function handleResize() {
  const width = document.documentElement.clientWidth;
  const body = document.querySelector('body');

  if (width >= 1024) {
    pageStore.pageType = 'normal';
    body?.setAttribute('style', 'min-width: 1440px');
  } else if (width >= 768) {
    pageStore.pageType = 'middle';
    body?.setAttribute('style', 'min-width: 420px');
  } else {
    pageStore.pageType = 'mini';
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
  <NuxtPage />
</template>
