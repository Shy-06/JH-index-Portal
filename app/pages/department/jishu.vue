<script setup lang="ts">
import { departmentContent, technologyImages } from "~~/constants/department";

onMounted(() => {
  document.title = "技术研发中心";
});
</script>

<style scoped lang="scss">
@use "assets/css/pages/department/jishu.scss";
</style>

<template>
  <JHLabel type="big">技术研发中心</JHLabel>
  <JHCard type="large" title="产研部" :isTitle="true">
    <CarouselPictures :imgs="technologyImages"></CarouselPictures>
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
    <div class="content" v-for="(para, index) in departmentContent.technology.introduction" :key="index">
      {{ para }}
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.technology.recruitment" :key="index">
      {{ para }}
    </div>
  </JHCard>
  <NuxtImg src="ui/fork.webp" style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="navigateTo('/department')" />
</template>
