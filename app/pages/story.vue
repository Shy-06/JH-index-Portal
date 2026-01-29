<script lang="ts" setup>
definePageMeta({ pageNo: 1 });
useSeoMeta({ title: "我们的故事-精弘网络" });
const pageStore = usePageStore();
import {
  yixingImages,
  yurenImages,
  persons,
  missionContent,
  yixingContent,
  yurenContent,
  socialLifeContent
} from "~~/constants/story";
</script>

<style scoped lang="scss">
@use "assets/css/pages/story.scss";
</style>

<template>
  <JHLabel type="title" v-if="pageStore.pageSize == 'mini' || pageStore.pageSize == 'middle'">我们的故事</JHLabel>
  <JHCard type="large" title="我们的使命" :isTitle="true">
    <div class="shiming-base" :class="pageStore.pageSize">
      <NuxtImg v-if="pageStore.pageSize == 'normal'" class="shiming-img" src="temp/shiming.webp" />
      <div v-else class="shiming-imgs" :class="pageStore.pageSize">
        <NuxtImg class="shiming-imgs-img" src="temp/shiming1.webp" />
        <NuxtImg class="shiming-imgs-img" src="temp/shiming2.webp" />
        <NuxtImg class="shiming-imgs-img" src="temp/shiming3.webp" />
        <NuxtImg class="shiming-imgs-img" src="temp/shiming4.webp" />
      </div>
      <div class="shiming" :class="pageStore.pageSize">
        <h2>{{ missionContent.title }}</h2>
        <pre style="white-space: pre-wrap; font-family: inherit;">{{ missionContent.description }}</pre>
      </div>
    </div>
  </JHCard>
  <JHCard type="large" title="精弘毅行" :isTitle="true">
    <CarouselPictures :imgs="yixingImages"></CarouselPictures>
    <div class="yixing-content" :class="pageStore.pageSize">
      {{ yixingContent.paragraph1 }}
    </div>
    <div class="yixing-content" :class="pageStore.pageSize">
      {{ yixingContent.paragraph2 }}
    </div>
  </JHCard>
  <JHCard type="large" title="网络育人" :isTitle="true">
    <CarouselPictures :imgs="yurenImages"></CarouselPictures>
    <div class="yixing-content" :class="pageStore.pageSize">
      {{ yurenContent }}
    </div>
  </JHCard>
  <JHCard type="large" title="生活社交" :isTitle="true">
    <div class="shenghuo" :class="pageStore.pageSize">
      <NuxtImg src="groupPhoto/shenghuo0.webp" id="img1" />
      <div class="content">
        {{ socialLifeContent.text1 }}
      </div>
      <NuxtImg src="groupPhoto/shenghuo1.webp" id="img2" />
      <div class="content">
        {{ socialLifeContent.text2 }}
      </div>
      <NuxtImg src="groupPhoto/shenghuo2.webp" id="img3" />
      <div class="shenghuo-imgs">
        <NuxtImg src="groupPhoto/shenghuo3.webp" id="img4" />
        <NuxtImg src="groupPhoto/shenghuo4.webp" id="img5" />
      </div>
      <div class="content">
        {{ socialLifeContent.text3 }}
      </div>
    </div>
  </JHCard>

  <div class="jiyu">
    <JHLabel type="title">前辈寄语</JHLabel>
    <CarouselCards :card="persons" :type="pageStore.pageSize"></CarouselCards>
  </div>

  <div style="height: 200px"></div>
  <JHButton type="middle" @click="navigateTo('/product')">
    我们的产品
    <NuxtImg src="ui/rightArrow.svg" style="width: 20px; margin-left: 20px" />
  </JHButton>
</template>
