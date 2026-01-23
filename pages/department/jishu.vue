<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "~/components/JHLabel.vue";
import JHCard from "~/components/JHCard.vue";
import Footer from "~/components/Footer.vue";
import CarouselPicturesBig from "~/components/CarouselPicturesBig.vue";
import { departmentContent, technologyImages } from "~/constants/department";

const router = useRouter();

onMounted(() => {
  document.title = "技术研发中心";
});
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/department/jishu.scss";
</style>

<template>
  <div style="height: 100px"></div>
  <JHLabel type="big">技术研发中心</JHLabel>
  <JHCard type="large" title="产研部" :isTitle="true">
    <CarouselPicturesBig :imgs="technologyImages"></CarouselPicturesBig>
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
  <img
    src="https://img.lonesome.cn/jhwl/home/photo/department/fork.webp"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
