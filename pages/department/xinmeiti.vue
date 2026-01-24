<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "~/components/JHLabel.vue";
import JHCard from "~/components/JHCard.vue";
import Footer from "~/components/Footer.vue";
import CarouselPicturesBig from "~/components/CarouselPicturesBig.vue";
import { departmentContent, visualImages, editorialImages } from "~/constants/department";

const router = useRouter();
onMounted(() => {
  document.title = "新媒体中心";
});
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/department/xinmeiti.scss";
</style>

<template>
  <div style="height: 100px"></div>
  <JHLabel type="big">新媒体中心</JHLabel>
  <JHCard type="large" :title="departmentContent.visual.title" :isTitle="true">
    <CarouselPicturesBig :imgs="visualImages" />
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
    <CarouselPicturesBig :imgs="editorialImages" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.editorial.introduction" :key="index">
      {{ para }}
    </div>
    
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content" v-for="(para, index) in departmentContent.editorial.recruitment" :key="index">
      {{ para }}
    </div>
  </JHCard>
  
  <NuxtImg
    src="ui/fork.webp"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
