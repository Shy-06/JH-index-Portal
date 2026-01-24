<script setup lang="ts">
import { recruitmentInfo, posterImage } from "~/constants/recruitment";

const pageStore = usePageStore();

function toRecruit() {
  window.open(recruitmentInfo.registrationUrl);
  return false;
}
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/join.scss";
</style>

<template>
  <PageTop />
  <JHCard title="加入我们" type="large" :is-title="true">
    <div class="base" :class="pageStore.pageType">
      <NuxtImg class="poster" :src="posterImage" />
      <div class="detail-base" :class="pageStore.pageType">
        <div class="introduce" :class="pageStore.pageType">
          <JHButton type="middle" @click="toRecruit" style="position: relative;margin-bottom: 20px;">点我报名</JHButton>
          <JHLabel type="nano">线下摆摊</JHLabel>
          <div class="content">
            <div>朝晖: {{ recruitmentInfo.offline.chaohuiDate }}</div>
            <div>地址：{{ recruitmentInfo.offline.chaohuiLocation }}</div>
            <div style="margin-top: 20px">屏峰: {{ recruitmentInfo.offline.pingfengDate }}</div>
            <div>地址：{{ recruitmentInfo.offline.pingfengLocation }}</div>
          </div>

          <JHLabel type="nano">招新宣讲</JHLabel>
          <div class="content">
            <div>朝晖: {{ recruitmentInfo.presentation.chaohuiDate }}</div>
            <div>地址: {{ recruitmentInfo.presentation.chaohuiLocation }}</div>
          </div>
          <JHLabel type="nano">招新群号</JHLabel>
          <div class="content">
            <div class="row" v-for="group in recruitmentInfo.recruitmentGroups" :key="group.number">
              <span>{{ group.name }}</span><span>{{ group.number }}</span>
            </div>
          </div>
    </div>
        <div class="qr">
          <JHLabel type="nano">最新动态</JHLabel>
          <div class="qr-base">
            <div class="qr-code" v-for="qr in recruitmentInfo.qrCodes" :key="qr.name">
              <NuxtImg :src="qr.image" />
              {{ qr.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </JHCard>
  <Footer />
</template>
