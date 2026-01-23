<script lang="ts" setup>
import { usePageStore } from '~/stores/pages';
import { indexStoryContent } from '~/constants/index';

const pageStore = usePageStore();
const router = useRouter();

function toStory() {
  router.push('/story');
}
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/index.scss";
</style>
<template>
  <Start />
  <Introduce />
  <History v-if="pageStore.pageType === 'normal'" />
  <Timeline v-if="pageStore.pageType === 'mini' || pageStore.pageType === 'middle'" />
  <JHCard
    v-if="pageStore.pageType === 'mini' || pageStore.pageType === 'middle'"
    title="我们的故事"
    :is-title="true"
    type="large"
    class="story"
  >
    <img src="https://img.lonesome.cn/jhwl/home/photo/index/story.webp" alt="Our Story" />
    <JHButton type="middle" @click="toStory">
      我们的故事
      <img
        src="https://img.lonesome.cn/jhwl/home/photo/svg/rightArrow.svg"
        alt="Arrow"
        style="width: 20px; margin-left: 20px"
      />
    </JHButton>
    <div class="story-content">
      {{ indexStoryContent.text }}
    </div>
  </JHCard>
  <Contact />
  <Footer />
</template>
