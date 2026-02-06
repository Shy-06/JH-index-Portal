<script setup lang="ts">
import { departmentContent, technologyImages } from "~~/constants/department";
definePageMeta({ pageNo: 3 });
useSeoMeta({ title: "技术研发中心 | 我们的部门" });
</script>

<template>
  <JHLabel type="big">技术研发中心</JHLabel>
  <JHCard type="large" title="产研部">
    <CarouselPictures :imgs="technologyImages" />
    <JHLabel type="big">产品</JHLabel>

    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      {{ departmentContent.product.introduction }}
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      {{ departmentContent.product.recruitment }}
    </div>
    <JHLabel type="big" style="margin-top: 5%">技术</JHLabel>
    <JHLabel type="small">部门介绍</JHLabel>
    <div
      v-for="(para, index) in departmentContent.technology.introduction"
      :key="index"
      class="content"
    >
      {{ para }}
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div
      v-for="(para, index) in departmentContent.technology.recruitment"
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
</style>
