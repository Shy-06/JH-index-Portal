<script setup lang="ts">
import { departmentContent, designImages } from "~~/constants/department";

onMounted(() => {
  document.title = "设计服务中心";
});
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
  <NuxtImg src="ui/fork.webp" style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="navigateTo('/department')" />
</template>
