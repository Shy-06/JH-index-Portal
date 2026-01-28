<script setup lang="ts">
definePageMeta({ title: "干事培训中心", pageNo: 3 });
import { departmentContent, affairsImages } from "~~/constants/department";

onMounted(() => {
  document.title = "干事培训中心";
});
</script>

<style scoped lang="scss">
@use "assets/css/pages/department/ganshi.scss";
</style>

<template>
  <JHLabel type="big">干事培训中心</JHLabel>
  <JHCard type="large" :title="departmentContent.affairs.title" :isTitle="true">
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
  <NuxtImg src="ui/fork.webp" style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="navigateTo('/department')" />
</template>
