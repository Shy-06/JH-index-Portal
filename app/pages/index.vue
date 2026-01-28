<script lang="ts" setup>
definePageMeta({ layout: false, title: '精弘首页', pageNo: 0 });

import { indexStoryContent } from '~~/constants/index';

const pageStore = usePageStore();

function toStory() {
  navigateTo('/story');
}
</script>

<style scoped lang="scss">
@use "assets/css/pages/index.scss";
</style>

<template>
  <Cover />
  <Introduce />
  <History v-if="pageStore.pageSize === 'normal'" />
  <template v-else>
    <Timeline />
    <JHCard title="我们的故事" :is-title="true" type="large" class="story">
      <NuxtImg src="common/story.webp" alt="Our Story" />
      <JHButton type="middle" @click="toStory">
        我们的故事
        <NuxtImg src="ui/rightArrow.svg" alt="Arrow" style="width: 20px; margin-left: 20px" />
      </JHButton>
      <div class="story-content">
        {{ indexStoryContent.text }}
      </div>
    </JHCard>
  </template>
  <Contact />
  <Footer />
</template>
