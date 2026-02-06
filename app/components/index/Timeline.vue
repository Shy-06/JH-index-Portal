<script setup lang="ts">
import { historyEvents } from '~~/constants/index'

const angle = (Math.atan(0.5) * 180) / Math.PI + 'deg'
const angle2 = (-Math.atan(0.5) * 180) / Math.PI + 'deg'
const scale = 1 / Math.cos(Math.atan(0.5))
const styleVal = (index: number) => {
  return {
    '--angle': index % 2 === 0 ? angle : angle2,
    '--scale': scale,
    '--border': index % 2 === 0 ? 'dashed' : 'solid',
    '--line_seen': index === historyEvents.length - 1 ? 'none' : 'block',
  }
}
const top111 = ref(0)
const historyLine = ref<HTMLElement | null>(null)
function handleScrollX() {
  if (historyLine.value) {
    top111.value = historyLine.value.getBoundingClientRect().top
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScrollX, true)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScrollX, true)
})
</script>

<template>
  <JHCard title="精弘成长史" type="large">
    <div ref="history" class="history">
      <div ref="historyLine" class="history-line">
        <div
          v-for="(item, index) in historyEvents"
          :key="index"
          class="history-item"
          :style="styleVal(index)"
        >
          <div
            class="img"
            :class="[
              index % 2 === 0 ? 'history-img1' : 'history-img2',
              top111 < 487 - (index - 2) * 80 - 60
                ? 'history-img'
                : 'history-img-hide',
            ]"
            :style="{
              'background-image':
                'url(' + useRuntimeConfig().public.cubeBaseURL + item.img + ')',
            }"
          >
            <div class="history-content">
              <div class="history-content1">{{ item.time }}</div>
              <div class="history-content2">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </JHCard>
</template>

<style scoped lang="scss">
.history-line {
  padding: 4rem 0 1rem;
  width: 10rem;
  margin: auto;

  &-mask {
    position: absolute;
    width: 10rem;
    top: var(--top);
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: white;
    border-radius: 0;
    z-index: 2;
  }
}

.history-item {
  position: relative;
  width: 10rem;
  height: 5rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.5rem;
    box-sizing: border-box;
    border-bottom: 1px var(--border) black;
    transform-origin: bottom center;
    transform: rotateZ(var(--angle)) scale(var(--scale));
    display: var(--line_seen);
    z-index: 1;
  }
}

.history-img {
  position: relative;
  top: -2.2rem;
  width: 4.4rem;
  height: 4.4rem;
  background-color: white;
  border-radius: 50%;
  z-index: 3;
  opacity: 1;
  transition: opacity 2s;
  background-size: cover;

  &-hide {
    position: relative;
    top: -2.2rem;
    width: 4.4rem;
    height: 4.4rem;
    background-color: white;
    border-radius: 50%;
    z-index: 3;
    opacity: 0;
    transition: opacity 2s;
    background-size: cover;
  }

  &1 {
    float: left;
    left: -2.2rem;
  }

  &2 {
    float: right;
    right: -2.2rem;
  }
}

.history-content {
  width: 200%;
  position: relative;
  top: 100%;
  left: -50%;

  &1 {
    font-size: xx-small;
    white-space: pre-line;
  }

  &2 {
    font-size: xx-small;
    white-space: pre-line;
  }
}
</style>
