<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "~/components/JHLabel.vue";
import JHCard from "~/components/JHCard.vue";
import Footer from "~/components/Footer.vue";
import CarouselPicturesBig from "~/components/CarouselPicturesBig.vue";
import { departmentContent, designImages } from "~/constants/department";

const router = useRouter();
onMounted(() => {
  document.title = "设计服务中心";
});
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/department/sheji.scss";
</style>

<template>
  <div style="height: 100px"></div>
  <JHLabel type="big">设计服务中心</JHLabel>
  <JHCard type="large" :title="departmentContent.design.title" :isTitle="true">
    <CarouselPicturesBig :imgs="designImages"></CarouselPicturesBig>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.design.introduction" :key="index">
      {{ para }}
    </div>
    
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.design.recruitment" :key="index">
      {{ para }}
    </div>
  </JHCard>
  <NuxtImg
    src="https://img.lonesome.cn/jhwl/home/photo/department/fork.webp"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
