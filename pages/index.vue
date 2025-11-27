<script lang="ts" setup>
import { usePageStore } from "~/stores/pages";

const pageStore = usePageStore();
const router = useRouter();

function toStory() {
  router.push("/story");
}
</script>
<style scoped>
.story img {
  width: 60%;
  height: 60%;
  border-radius: 15px;
}

.story-content {
  margin-top: 10px;
  font-size: large;
}
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
      因梦想，我们齐聚一堂；因使命，我们同舟共济。
    </div>
  </JHCard>
  <Contact />
  <Footer />
</template>
