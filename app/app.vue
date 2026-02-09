<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const pageStore = usePageStore()
const { width } = useWindowSize()

function handleResize() {
  if (width.value >= 1024) {
    pageStore.pageSize = 'normal'
  } else if (width.value >= 768) {
    pageStore.pageSize = 'middle'
  } else {
    pageStore.pageSize = 'mini'
  }
}

onMounted(() => {
  watch(width, handleResize, { immediate: true })
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NavBar />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
