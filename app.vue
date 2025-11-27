<script setup lang="ts">
import { usePageStore } from "~/stores/pages";
import { welcome } from "~/utils/const";

const pageStore = usePageStore();

function handleResize() {
  const width = document.documentElement.clientWidth;
  if (width >= 1024) {
    pageStore.pageType = "normal";
    document.querySelector("body")?.setAttribute("style", "min-width: 1440px");
  } else if (width >= 768) {
    pageStore.pageType = "middle";
    document.querySelector("body")?.setAttribute("style", "min-width: 420px");
  } else {
    pageStore.pageType = "mini";
    document.querySelector("body")?.setAttribute("style", "min-width: 320px");
  }
}

onMounted(() => {
  handleResize();
  window.onresize = handleResize;
  welcome();
});
</script>

<template>
  <div>
    <NavBar />
    <NuxtPage />
  </div>
</template>
