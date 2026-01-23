<script lang="ts" setup>
import JHLabel from "~/components/JHLabel.vue";
import JHCard from "~/components/JHCard.vue";
import Footer from "~/components/Footer.vue";
import { usePageStore } from "~/stores/pages";
import CarouselPictures from "~/components/CarouselPicturesBig.vue";
import CarouselCards from "~/components/CarouselCards.vue";
import JHButton from "~/components/JHButton.vue";
import PageTop from "~/components/PageTop.vue";
import { 
  yixingImages, 
  yurenImages, 
  persons, 
  missionContent,
  yixingContent,
  yurenContent,
  socialLifeContent
} from "~/constants/story";

const router = useRouter();
const pageStore = usePageStore();

function toProduct() {
  router.push("/product");
}
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/story.scss";
</style>

<template>
  <PageTop />
  <JHLabel type="title" v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'">我们的故事</JHLabel>
  <JHCard type="large" title="我们的使命" :isTitle="true">
    <div class="shiming-base" :class="pageStore.pageType">
      <img
        class="shiming-img"
        src="https://img.lonesome.cn/jhwl/home/photo/index/shiming.webp"
        v-if="pageStore.pageType == 'normal'"
      />
      <div
        class="shiming-imgs"
        v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'"
      >
        <img class="shiming-imgs-img" src="https://img.lonesome.cn/jhwl/home/photo/index/shiming1.webp" />
        <img class="shiming-imgs-img" src="https://img.lonesome.cn/jhwl/home/photo/index/shiming2.webp" />
        <img class="shiming-imgs-img" src="https://img.lonesome.cn/jhwl/home/photo/index/shiming3.webp" />
        <img class="shiming-imgs-img" src="https://img.lonesome.cn/jhwl/home/photo/index/shiming4.webp" />
      </div>
      <div class="shiming" :class="pageStore.pageType">
        <h2>{{ missionContent.title }}</h2>
        <pre style="white-space: pre-wrap; font-family: inherit;">{{ missionContent.description }}</pre>
      </div>
    </div>
  </JHCard>
  <JHCard type="large" title="精弘毅行" :isTitle="true">
    <CarouselPictures :imgs="yixingImages"></CarouselPictures>
    <div class="yixing-content" :class="pageStore.pageType">
      {{ yixingContent.paragraph1 }}
    </div>
    <div class="yixing-content" :class="pageStore.pageType">
      {{ yixingContent.paragraph2 }}
    </div>
  </JHCard>
  <JHCard type="large" title="网络育人" :isTitle="true">
    <CarouselPictures :imgs="yurenImages"></CarouselPictures>
    <div class="yixing-content" :class="pageStore.pageType">
      {{ yurenContent }}
    </div>
  </JHCard>
  <JHCard type="large" title="生活社交" :isTitle="true">
    <div class="shenghuo" :class="pageStore.pageType">
      <img src="https://img.lonesome.cn/jhwl/home/photo/story/shenghuo/shenghuo1.webp" id="img1" />
      <div class="content">
        {{ socialLifeContent.text1 }}
      </div>
      <img src="https://img.lonesome.cn/jhwl/home/photo/story/shenghuo/shenghuo2.webp" id="img2" />
      <div class="content">
        {{ socialLifeContent.text2 }}
      </div>
      <img src="https://img.lonesome.cn/jhwl/home/photo/story/shenghuo/shenghuo3.webp" id="img3" />
      <div class="shenghuo-imgs">
        <img src="https://img.lonesome.cn/jhwl/home/photo/story/shenghuo/shenghuo4.webp" id="img4" />
        <img src="https://img.lonesome.cn/jhwl/home/photo/story/shenghuo/shenghuo5.webp" id="img5" />
      </div>
      <div class="content">
        {{ socialLifeContent.text3 }}
      </div>
    </div>
  </JHCard>

  <div class="jiyu">
    <JHLabel type="title">前辈寄语</JHLabel>
    <div class="jiyu-base" :class="pageStore.pageType">
      <CarouselCards :card="persons" :type="pageStore.pageType"></CarouselCards>
    </div>
    <div
      class="jiyu-base"
      :class="pageStore.pageType"
      v-if="pageStore.pageType != 'normal'"
    ></div>
  </div>

  <div style="height: 200px"></div>
  <JHButton type="middle" @click="toProduct">
    我们的产品
    <img
      src="https://img.lonesome.cn/jhwl/home/photo/svg/rightArrow.svg"
      style="width: 20px; margin-left: 20px"
    />
  </JHButton>
  <Footer />
</template>
