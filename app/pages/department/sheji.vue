<script setup lang="ts">
definePageMeta({ pageNo: 3 });
useSeoMeta({ title: "设计服务中心-我们的部门-精弘网络" });
import { departmentContent, designImages } from "~~/constants/department";
</script>

<style scoped lang="scss">
@use "assets/css/pages/department/sheji.scss";
</style>

<template>
  <JHLabel type="big">设计服务中心</JHLabel>
  <JHCard type="large" :title="departmentContent.design.title" :isTitle="true">
    <CarouselPictures :imgs="designImages"></CarouselPictures>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.design.introduction" :key="index">
      {{ para }}
    </div>

    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.design.recruitment" :key="index">
      {{ para }}
    </div>
  </JHCard>
  <CloseButton />
</template>
