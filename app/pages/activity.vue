<script lang="ts" setup>
import { acmCompetitionInfo } from "~/constants/activity";

const pageStore = usePageStore();
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/activity.scss";
</style>

<template>
  <PageTop />
  <JHLabel type="title" v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'">我们的活动</JHLabel>
  <JHCard title="ACM新生赛" type="large" :is-title="true">
    <div class="base" :class="pageStore.pageType">
      <NuxtImg class="poster" :src="acmCompetitionInfo.posterImage" />
      <div class="detail-base" :class="pageStore.pageType">
        <div class="introduce" :class="pageStore.pageType">
          <JHLabel type="nano">活动介绍</JHLabel>
          <div class="content">
            <pre style="white-space: pre-wrap; font-family: inherit;">{{ acmCompetitionInfo.introduction }}</pre>
          </div>
          <JHLabel type="nano">竞赛群号</JHLabel>
          <div class="content">{{ acmCompetitionInfo.competitionGroup }}</div>
        </div>
        <div class="qr">
          <div class="qr-base" :class="pageStore.pageType">
            <div class="qr-code">
              <NuxtImg :src="acmCompetitionInfo.groupQrCode" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </JHCard>
  <div style="height: 100px"></div>
  <JHButton type="middle" @click="navigateTo('/join')">
    加入我们
    <NuxtImg src="ui/rightArrow.svg" style="width: 20px; margin-left: 20px" />
  </JHButton>
  <Footer />
</template>
