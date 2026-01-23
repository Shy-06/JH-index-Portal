<script setup lang="ts">
import JHLabel from "./JHLabel.vue";
import { usePageStore } from "~/stores/pages";
import { ref } from "vue";
import { historyEvents } from "~/constants/index";

const pageStore = usePageStore();
const eventNow = ref<number>(0);
</script>

<style scoped lang="scss">
@use "~/assets/css/components/History.scss";
</style>

<template>
  <JHLabel type="title" v-if="pageStore.pageType == 'normal'">精弘大事记</JHLabel>
  <div class="base-pc" v-if="pageStore.pageType == 'normal'">
    <div class="history-left">
      <NuxtImg :src="historyEvents[eventNow][2]" border="10" />
      <div class="event-name">{{ historyEvents[eventNow][3] }}</div>
    </div>
    <div class="history-right" :class="pageStore.pageType">
      <div class="time">{{ historyEvents[eventNow][0] }}</div>
      <div class="content">{{ historyEvents[eventNow][1] }}</div>
      <NuxtImg src="https://img.lonesome.cn/jhwl/home/photo/index/jingxiaohong.webp" border="2" />
    </div>
  </div>
  <div class="history-choice">
    <div class="red-line"></div>
    <div class="item" v-for="(item, index) in historyEvents" :class="{ select: eventNow == index }"
      v-bind:style="{ 'background-image': 'url(' + item[2] + ')' }" @click="eventNow = index"></div>
  </div>
</template>
