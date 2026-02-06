<script setup lang="ts">
import { introduceContent } from "~~/constants/index";

const pageStore = usePageStore();
</script>

<template>
  <div class="base" :class="pageStore.pageSize">
    <NuxtImg
      v-if="!(pageStore.pageSize == 'mini')"
      src="jingxiaohong/xiaohongLeft.webp"
    />
    <div class="introduce">
      <div class="title">{{ introduceContent.title[pageStore.pageSize] }}</div>
      <div class="content" :class="pageStore.pageSize">
        <span
          v-for="(line, index) in introduceContent.description"
          :key="index"
        >
          {{ line
          }}<br v-if="index < introduceContent.description.length - 1" />
        </span>
      </div>
    </div>
    <NuxtImg
      v-if="!(pageStore.pageSize == 'mini')"
      src="jingxiaohong/xiaohongRight.webp"
    />
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/css/components/Introduce.scss";
</style>
