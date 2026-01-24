<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { historyEvents } from '~/constants/index';

const angle = (Math.atan(0.5) * 180) / Math.PI + "deg";
const angle2 = (-Math.atan(0.5) * 180) / Math.PI + "deg";
const scale = 1 / Math.cos(Math.atan(0.5));
const styleVal = (function (index: number): CSSProperties {
  return <CSSProperties>{
    '--angle': index % 2 === 0 ? angle : angle2,
    '--scale': scale,
    '--border': index % 2 === 0 ? 'dashed' : 'solid',
    '--line_seen': index === historyEvents.length - 1 ? 'none' : 'block',
  }
});
const top111 = ref(0);
function handleScrollX() {
  top111.value = historyLine.value.getBoundingClientRect().top;
}
const historyLine = ref(<Element>{});
onMounted(() => {
  window.addEventListener("scroll", handleScrollX, true);
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScrollX, true);
})
</script>
<style scoped>
.history-line {
  padding: 4rem 0 1rem;
  width: 10rem;
  margin: auto;
}

.history-line-mask {
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

.history-item {
  position: relative;
  width: 10rem;
  height: 5rem;
}

.history-item::before {
  content: "";
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
}

.history-img-hide {
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

.history-img1 {
  float: left;
  left: -2.2rem;
}

.history-img2 {
  float: right;
  right: -2.2rem;
}

.history-content {
  width: 200%;
  position: relative;
  top: 100%;
  left: -50%;
}

.history-content1 {
  font-size: xx-small;
  white-space: pre-line;
}

.history-content2 {
  font-size: xx-small;
  white-space: pre-line;
}
</style>
<template>
  <JHCard title="精弘成长史" type="large" :is-title="true">
    <div class="history" ref="history">
      <div class="history-line" ref="historyLine">
        <div class="history-item" v-for="(item, index) in historyEvents" :style="styleVal(index)">
          <div class="img"
            :class="[index % 2 === 0 ? 'history-img1' : 'history-img2', top111 < 487 - (index - 2) * 80 - 60 ? 'history-img' : 'history-img-hide']"
            :style="{ 'background-image': 'url(' + useRuntimeConfig().public.cubeBaseURL + item.img + ')' }">
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