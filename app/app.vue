<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const pageStore = usePageStore()
const { width } = useWindowSize()

function handleResize() {
  try {
    if (width.value >= 1024) {
      pageStore.pageSize = 'normal'
    } else if (width.value >= 768) {
      pageStore.pageSize = 'middle'
    } else {
      pageStore.pageSize = 'mini'
    }
  } catch (error) {
    console.error('[App] Error handling resize:', error)
  }
}

onMounted(() => {
  try {
    watch(width, handleResize, { immediate: true })
  } catch (error) {
    console.error('[App] Error setting up resize watcher:', error)
  }
})

onErrorCaptured((error) => {
  console.error('[App] Captured component error:', error)
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NavBar />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
