<script setup lang="ts">
import { ref, computed } from "vue";
import { historyEvents } from "~/constants/index";

const pageStore = usePageStore();
const eventNow = ref<number>(0);
const currentEvent = computed(() => historyEvents[eventNow.value]!);
</script>

<style scoped lang="scss">
@use "~/assets/css/components/History.scss";
</style>

<template>
  <JHLabel type="title" v-if="pageStore.pageType == 'normal'">精弘大事记</JHLabel>
  <div class="base-pc" v-if="pageStore.pageType == 'normal'">
    <div class="history-left">
      <NuxtImg :src="currentEvent.img" border="10" />
      <div class="event-name">{{ currentEvent.name }}</div>
    </div>
    <div class="history-right" :class="pageStore.pageType">
      <div class="time">{{ currentEvent.time }}</div>
      <div class="content">{{ currentEvent.content }}</div>
      <NuxtImg src="jingxiaohong/jingxiaohong.webp" border="2" />
    </div>
  </div>
  <div class="history-choice">
    <div class="red-line"></div>
    <div class="item" v-for="(item, index) in historyEvents" :class="{ select: eventNow == index }"
      v-bind:style="{ 'background-image': 'url(' + useRuntimeConfig().public.cubeBaseURL + item.img + ')' }"
      @click="eventNow = index"></div>
  </div>
</template>
