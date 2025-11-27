<script lang="ts" setup>
import { usePageStore } from "~/stores/pages";
import { indexStoryContent } from "~/constants/index";

const pageStore = usePageStore();
const router = useRouter();

function toStory() {
  router.push("/story");
}
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/index.scss";
</style>
<template>
  <start />
  <introduce />
  <!-- 21届部长团没有拍客服视频 故取消 -->
   <!-- <JHVideo /> -->
  <history v-if="pageStore.pageType == 'normal'" />
  <timeline
    v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'"
  />
  <JHCard
    title="我们的故事"
    :is-title="true"
    type="large"
    class="story"
    v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'"
  >
    <img src="https://img.lonesome.cn/jhwl/home/photo/index/story.webp" />
    <JHButton type="middle" @click="toStory">
      我们的故事
      <img
        src="https://img.lonesome.cn/jhwl/home/photo/svg/rightArrow.svg"
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
