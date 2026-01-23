<script lang="ts" setup>
import JHLabel from "~/components/JHLabel.vue";
import { usePageStore } from "~/stores/pages";
import JHCard from "~/components/JHCard.vue";
import JHButton from "~/components/JHButton.vue";
import Footer from "~/components/Footer.vue";
import PageTop from "~/components/PageTop.vue";
const pageStore = usePageStore();
const router = useRouter();
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/department-index.scss";
</style>
<template>
  <PageTop />
  <JHLabel type="title" v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'">我们的部门</JHLabel>
  <JHCard title="部门结构" type="large" :is-title="true">
    <NuxtImg src="https://img.lonesome.cn/jhwl/home/photo/haibao/structPc.webp" style="width: 70%;position: relative;right: 2%;" />
  </JHCard>
  <div v-show="pageStore.pageType == 'normal'" style="height: 100px"></div>
  <div class="base" :class="pageStore.pageType">
    <div class="line1">
      <div class="item">
        <div
          class="img"
          style="background-image: url(https://img.lonesome.cn/jhwl/home/photo/svg/ganshi.svg)"
          id="img1"
        ></div>
        <JHButton
          type="small"
          @click="router.push('/department/ganshi')"
          class="button"
          >干事培训中心</JHButton
        >
      </div>
      <div class="item">
        <div
          class="img"
          style="background-image: url(https://img.lonesome.cn/jhwl/home/photo/svg/jishu.svg)"
          id="img2"
        ></div>

        <JHButton
          type="small"
          @click="router.push('/department/jishu')"
          class="button"
          >技术研发中心</JHButton
        >
      </div>
    </div>
    <div class="line2">
      <div class="item">
        <div
          class="img"
          style="background-image: url(https://img.lonesome.cn/jhwl/home/photo/svg/sheji.svg)"
          id="img3"
        ></div>

        <JHButton
          type="small"
          @click="router.push('/department/sheji')"
          class="button"
          >设计服务中心</JHButton
        >
      </div>
      <div class="item">
        <div
          class="img"
          style="background-image: url(https://img.lonesome.cn/jhwl/home/photo/svg/xinmeiti.svg)"
          id="img4"
        ></div>

        <JHButton
          type="small"
          @click="router.push('/department/xinmeiti')"
          class="button"
          >新媒体中心</JHButton
        >
      </div>
    </div>
  </div>
  <div style="height: 100px"></div>
  <JHButton type="middle" @click="router.push('/activity')">
    我们的活动
    <NuxtImg
      src="https://img.lonesome.cn/jhwl/home/photo/svg/rightArrow.svg"
      style="width: 20px; margin-left: 20px"
    />
  </JHButton>
  <Footer />
</template>
