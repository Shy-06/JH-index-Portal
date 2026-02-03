<script lang="ts" setup>
definePageMeta({ layout: false, pageNo: 0 });
useSeoMeta({ title: '浙江工业大学精弘网络' });
const pageStore = usePageStore();
import { indexStoryContent } from '~~/constants/index';

function toStory() {
  navigateTo('/story');
}
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/index.scss";
</style>

<template>
  <Cover />
  <Introduce />
  <History v-if="pageStore.pageSize === 'normal'" />
  <template v-else>
    <Timeline />
    <JHCard title="我们的故事" type="large" class="story">
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
