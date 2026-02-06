<script setup lang="ts">
import { historyEvents } from '~~/constants/index'

const eventNow = ref<number>(0)
const currentEvent = computed(() => historyEvents[eventNow.value]!)
</script>

<template>
  <JHLabel type="title">精弘大事记</JHLabel>
  <div class="base-pc">
    <div class="history-left">
      <NuxtImg :src="currentEvent.img" border="10" />
      <div class="event-name">{{ currentEvent.name }}</div>
    </div>
    <div class="history-right">
      <div class="time">{{ currentEvent.time }}</div>
      <div class="content">{{ currentEvent.content }}</div>
      <NuxtImg src="jingxiaohong/jingxiaohong.webp" />
    </div>
  </div>
  <div class="choices-container">
    <div class="choices">
      <div
        v-for="(item, index) in historyEvents"
        :key="index"
        class="item"
        :class="{ select: eventNow == index }"
        :style="{
          'background-image':
            'url(' + useRuntimeConfig().public.cubeBaseURL + item.img + ')',
        }"
        @click="eventNow = index"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/css/components/History.scss';

.choices {
  grid-template-columns: repeat(
    v-bind('historyEvents.length'),
    minmax(75px, 90px)
  );
}
</style>
