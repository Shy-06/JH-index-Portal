<script setup lang="ts">
import { usePageStore } from "~/stores/pages";
import { introduceContent } from "~/constants/index";

const pageStore = usePageStore();
</script>

<style scoped lang="scss">
@use "~/assets/css/components/Introduce.scss";
</style>

<template>
  <div class="base" :class="pageStore.pageType">
    <NuxtImg
      src="https://img.lonesome.cn/jhwl/home/photo/index/xiaohongLeft.webp"
      v-if="!(pageStore.pageType == 'mini')"
    />
    <div class="introduce">
      <div class="title">
        {{
          pageStore.pageType == "mini" || pageStore.pageType == "middle"
            ? introduceContent.title.mini
            : introduceContent.title.normal
        }}
      </div>
      <div class="content" :class="pageStore.pageType">
        <span v-for="(line, index) in introduceContent.description" :key="index">
          {{ line }}<br v-if="index < introduceContent.description.length - 1" />
        </span>
      </div>
    </div>
    <NuxtImg
      src="https://img.lonesome.cn/jhwl/home/photo/index/xiaohongRight.webp"
      v-if="!(pageStore.pageType == 'mini')"
    />
  </div>
</template>
