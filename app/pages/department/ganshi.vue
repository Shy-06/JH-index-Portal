<script setup lang="ts">
definePageMeta({ pageNo: 3 });
useSeoMeta({ title: "干事培训中心 | 我们的部门" });
import { departmentContent, affairsImages } from "~~/constants/department";
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/department-detail.scss";
</style>

<template>
  <JHLabel type="big">干事培训中心</JHLabel>
  <JHCard type="large" :title="departmentContent.affairs.title">
    <CarouselPictures :imgs="affairsImages"></CarouselPictures>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.affairs.introduction" :key="index">
      {{ para }}
    </div>

    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.affairs.recruitment" :key="index">
      {{ para }}
    </div>
  </JHCard>
  <CloseButton />
</template>
