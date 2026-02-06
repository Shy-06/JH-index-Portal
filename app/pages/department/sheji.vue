<script setup lang="ts">
import { departmentContent, designImages } from "~~/constants/department";
definePageMeta({ pageNo: 3 });
useSeoMeta({ title: "设计服务中心 | 我们的部门" });
</script>

<template>
  <JHLabel type="big">设计服务中心</JHLabel>
  <JHCard type="large" :title="departmentContent.design.title">
    <CarouselPictures :imgs="designImages" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div
      v-for="(para, index) in departmentContent.design.introduction"
      :key="index"
      class="content"
    >
      {{ para }}
    </div>

    <JHLabel type="small">招新宣言</JHLabel>
    <div
      v-for="(para, index) in departmentContent.design.recruitment"
      :key="index"
      class="content"
    >
      {{ para }}
    </div>
  </JHCard>
  <CloseButton />
</template>

<style scoped lang="scss">
@use "~/assets/css/pages/department-detail.scss";

img {
  width: 80%;
  height: 300px;
}
</style>
