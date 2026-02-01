<script lang="ts" setup>
interface Props {
  imgs: string[];
}
const props = defineProps<Props>();
const carouselClass = reactive(["left", "center", "right"]);
const touchStartPosition = ref(0);
const touchEndPosition = ref(0);
const timer = ref<ReturnType<typeof setInterval> | undefined>(undefined);

function _resetTimer() {
  if (timer.value !== undefined) {
    clearInterval(timer.value);
  }
  timer.value = window.setInterval(() => {
    toNext();
  }, 3000);
}

function toPrevious() {
  _resetTimer();
  let first = carouselClass.shift() as string;
  carouselClass.push(first);
}
function toNext() {
  _resetTimer();
  let last = carouselClass.pop() as string;
  carouselClass.unshift(last);
}

function changePicture(e: MouseEvent) {
  const targetClassList = ((e.target as HTMLElement).parentNode as HTMLElement).classList;
  if (targetClassList.contains("left")) {
    toPrevious();
  } else if (targetClassList.contains("right")) {
    toNext();
  } else {
    return false;
  }
}

function touchStart(e: TouchEvent) {
  if (e.touches[0]) {
    touchStartPosition.value = e.touches[0].clientX;
    touchEndPosition.value = e.touches[0].clientX;
  }
}
function touchMove(e: TouchEvent) {
  if (e.touches[0]) {
    touchEndPosition.value = e.touches[0].clientX;
  }
}
function touchEnd() {
  if (Math.abs(touchEndPosition.value - touchStartPosition.value) > 50) {
    if (touchEndPosition.value > touchStartPosition.value) toPrevious();
    else toNext();
  }
}
onMounted(() => {
  for (let i = 0; i < props.imgs.length - 3; i++) {
    carouselClass.push("after");
  }

  timer.value = window.setInterval(() => {
    toNext();
  }, 3000);
});

onUnmounted(() => {
  if (timer.value !== undefined) {
    clearInterval(timer.value);
  }
});
</script>

<style scoped lang="scss">
* {
  border-radius: 15px;
}

.carousel {
  margin: 1.5rem auto;
  width: 100%;
  border-radius: 0;
  overflow: hidden;

  &::after {
    display: block;
    content: "";
    width: 90%;
    margin: 0 auto;
    border-bottom: 0.2rem solid #efefef;
    padding-bottom: 2rem;
  }

  .whole {
    width: 60%;
    height: 30vw;
    max-height: 600px;
    margin: 0 auto;

    .roll-img {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
    }
  }

  img {
    width: 100%;
    height: 100%;
    margin: auto;
    object-fit: cover;
  }
}

ul {
  margin: 0;
  list-style: none;

  li {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}

.left {
  left: -55vw;
  transform: scale(0.8);
  z-index: -1;
  background: rgb(0, 0, 0);
  transition: all 0.5s ease;
}

.center {
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 10%;
  transition: all 0.5s ease;
}

.right {
  left: 55vw;
  transform: scale(0.8);
  z-index: -1;
  background: rgb(0, 0, 0);
  transition: all 0.5s ease;
}

.after {
  left: 0;
  top: 0;
  visibility: hidden;
  transform: scale(0);
  z-index: -3;
}

.left div,
.right div {
  z-index: 5;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.3s ease;
}
</style>

<template>
  <div class="carousel" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd()">
    <div class="whole">
      <div class="roll-img">
        <ul type>
          <li @click="changePicture($event)" v-for="(item, index) in props.imgs" :class="carouselClass[index]">
            <NuxtImg :src="item" />
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
