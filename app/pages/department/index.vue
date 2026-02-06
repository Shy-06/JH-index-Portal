<script lang="ts" setup>
definePageMeta({ pageNo: 3 })
useSeoMeta({ title: '我们的部门' })
const pageStore = usePageStore()
const assetsBaseURL = useRuntimeConfig().public.cubeBaseURL
</script>

<template>
  <div>
    <JHLabel
      v-if="pageStore.pageSize == 'mini' || pageStore.pageSize == 'middle'"
      type="title"
    >
      我们的部门
    </JHLabel>
    <JHCard title="部门结构" type="large">
      <NuxtImg src="common/structPc.webp" style="width: 100%" />
    </JHCard>
    <div class="base" :class="pageStore.pageSize">
      <div class="item" @click="navigateTo('/department/ganshi')">
        <div
          class="img"
          :style="{ backgroundImage: `url(${assetsBaseURL}ui/ganshi.svg)` }"
        />
        <JHButton type="small" class="text">干事培训中心</JHButton>
      </div>
      <div class="item" @click="navigateTo('/department/jishu')">
        <div
          class="img"
          :style="{ backgroundImage: `url(${assetsBaseURL}ui/jishu.svg)` }"
        />
        <JHButton type="small" class="text">技术研发中心</JHButton>
      </div>
      <div class="item" @click="navigateTo('/department/sheji')">
        <div
          id="img3"
          class="img"
          :style="{ backgroundImage: `url(${assetsBaseURL}ui/sheji.svg)` }"
        />
        <JHButton type="small" class="text">设计服务中心</JHButton>
      </div>
      <div class="item" @click="navigateTo('/department/xinmeiti')">
        <div
          id="img4"
          class="img"
          :style="{ backgroundImage: `url(${assetsBaseURL}ui/xinmeiti.svg)` }"
        />
        <JHButton type="small" class="text">新媒体中心</JHButton>
      </div>
    </div>
    <NextPage @click="navigateTo('/activity')"> 我们的活动 </NextPage>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/css/pages/department-index.scss';
</style>
