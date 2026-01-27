<script lang="ts" setup>
const pageStore = usePageStore();
const assetsBaseURL = useRuntimeConfig().public.cubeBaseURL;
</script>

<style scoped lang="scss">
@use "assets/css/pages/department-index.scss";
</style>
<template>
  <JHLabel type="title" v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'">我们的部门</JHLabel>
  <JHCard title="部门结构" type="large" :is-title="true">
    <NuxtImg src="common/structPc.webp" style="width: 70%;position: relative;right: 2%;" />
  </JHCard>
  <div v-show="pageStore.pageType == 'normal'" style="height: 100px"></div>
  <div class="base" :class="pageStore.pageType">
    <div class="line1">
      <div class="item">
        <div class="img" :style="{ backgroundImage: `url(${assetsBaseURL}ui/ganshi.svg)` }" id="img1"></div>
        <JHButton type="small" @click="navigateTo('/department/ganshi')" class="button">干事培训中心</JHButton>
      </div>
      <div class="item">
        <div class="img" :style="{ backgroundImage: `url(${assetsBaseURL}ui/jishu.svg)` }" id="img2"></div>

        <JHButton type="small" @click="navigateTo('/department/jishu')" class="button">技术研发中心</JHButton>
      </div>
    </div>
    <div class="line2">
      <div class="item">
        <div class="img" :style="{ backgroundImage: `url(${assetsBaseURL}ui/sheji.svg)` }" id="img3"></div>

        <JHButton type="small" @click="navigateTo('/department/sheji')" class="button">设计服务中心</JHButton>
      </div>
      <div class="item">
        <div class="img" :style="{ backgroundImage: `url(${assetsBaseURL}ui/xinmeiti.svg)` }" id="img4"></div>

        <JHButton type="small" @click="navigateTo('/department/xinmeiti')" class="button">新媒体中心</JHButton>
      </div>
    </div>
  </div>
  <div style="height: 100px"></div>
  <JHButton type="middle" @click="navigateTo('/activity')">
    我们的活动
    <NuxtImg src="ui/rightArrow.svg" style="width: 20px; margin-left: 20px" />
  </JHButton>
</template>
