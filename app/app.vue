<script setup lang="ts">
const pageStore = usePageStore();

function handleResize() {
  const width = document.documentElement.clientWidth;
  if (width >= 1024) {
    pageStore.pageSize = 'normal';
  } else if (width >= 768) {
    pageStore.pageSize = 'middle';
  } else {
    pageStore.pageSize = 'mini';
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
  <NuxtRouteAnnouncer />
  <NavBar />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
