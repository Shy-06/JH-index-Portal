<script setup lang="ts">
definePageMeta({ pageNo: 3 });
useSeoMeta({ title: "新媒体中心-我们的部门-精弘网络" });
import { departmentContent, visualImages, editorialImages } from "~~/constants/department";
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/department-detail.scss";

img {
  width: 80%;
}
</style>

<template>
  <JHLabel type="big">新媒体中心</JHLabel>
  <JHCard type="large" :title="departmentContent.visual.title" :isTitle="true">
    <CarouselPictures :imgs="visualImages" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.visual.introduction" :key="index">
      {{ para }}
    </div>

    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.visual.recruitment" :key="index">
      {{ para }}
    </div>
  </JHCard>

  <JHCard type="large" :title="departmentContent.editorial.title" :isTitle="true">
    <CarouselPictures :imgs="editorialImages" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.editorial.introduction" :key="index">
      {{ para }}
    </div>

    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.editorial.recruitment" :key="index">
      {{ para }}
    </div>
  </JHCard>

  <CloseButton />
</template>
