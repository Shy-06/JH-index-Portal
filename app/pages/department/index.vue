<script lang="ts" setup>
definePageMeta({ pageNo: 3 });
useSeoMeta({ title: "我们的部门-精弘网络" });
const pageStore = usePageStore();
const assetsBaseURL = useRuntimeConfig().public.cubeBaseURL;
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/department-index.scss";
</style>
<template>
  <JHLabel type="title" v-if="pageStore.pageSize == 'mini' || pageStore.pageSize == 'middle'">我们的部门</JHLabel>
  <JHCard title="部门结构" type="large">
    <NuxtImg src="common/structPc.webp" style="width: 100%;" />
  </JHCard>
  <div class="base" :class="pageStore.pageSize">
    <div class="item" @click="navigateTo('/department/ganshi')">
      <div class="img" :style="{ backgroundImage: `url(${assetsBaseURL}ui/ganshi.svg)` }"></div>
      <JHButton type="small" class="text">干事培训中心</JHButton>
    </div>
    <div class="item" @click="navigateTo('/department/jishu')">
      <div class="img" :style="{ backgroundImage: `url(${assetsBaseURL}ui/jishu.svg)` }"></div>
      <JHButton type="small" class="text">技术研发中心</JHButton>
    </div>
    <div class="item" @click="navigateTo('/department/sheji')">
      <div class="img" :style="{ backgroundImage: `url(${assetsBaseURL}ui/sheji.svg)` }" id="img3"></div>
      <JHButton type="small" class="text">设计服务中心</JHButton>
    </div>
    <div class="item" @click="navigateTo('/department/xinmeiti')">
      <div class="img" :style="{ backgroundImage: `url(${assetsBaseURL}ui/xinmeiti.svg)` }" id="img4"></div>
      <JHButton type="small" class="text">新媒体中心</JHButton>
    </div>
  </div>
  <NextPage @click="navigateTo('/activity')"> 我们的活动 </NextPage>
</template>
