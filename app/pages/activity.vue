<script lang="ts" setup>
definePageMeta({ pageNo: 4 });
useSeoMeta({ title: "我们的活动-精弘网络" });
const pageStore = usePageStore();
import { acmCompetitionInfo } from "~~/constants/activity";
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/activity.scss";
</style>

<template>
  <JHLabel type="title" v-if="pageStore.pageSize == 'mini' || pageStore.pageSize == 'middle'">我们的活动</JHLabel>
  <JHCard title="ACM新生赛" type="large">
    <div class="base" :class="pageStore.pageSize">
      <NuxtImg class="poster" :src="acmCompetitionInfo.posterImage" />
      <div class="detail-base" :class="pageStore.pageSize">
        <div class="introduce" :class="pageStore.pageSize">
          <JHLabel type="nano">活动介绍</JHLabel>
          <div class="content">
            <pre style="white-space: pre-wrap; font-family: inherit;">{{ acmCompetitionInfo.introduction }}</pre>
          </div>
          <JHLabel type="nano">竞赛群号</JHLabel>
          <div class="content">{{ acmCompetitionInfo.competitionGroup }}</div>
        </div>
        <div class="qr">
          <div class="qr-base" :class="pageStore.pageSize">
            <div class="qr-code">
              <NuxtImg :src="acmCompetitionInfo.groupQrCode" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </JHCard>
  <NextPage @click="navigateTo('/join')"> 加入我们 </NextPage>
</template>
