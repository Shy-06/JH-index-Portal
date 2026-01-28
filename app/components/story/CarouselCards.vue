<script setup lang="ts">
export interface Card {
  img: string;
  introduction: string;
  content: string;
}
interface Props {
  card: Card[];
  type: string;
}
const props = defineProps<Props>();
const carouselClass = reactive(["left", "center", "right"]);
let touchStartPosition = 0;
let touchEndPosition = 0;
function after() {
  let first = carouselClass.shift() as string;
  carouselClass.push(first);
}
function before() {
  let last = carouselClass.pop() as string;
  carouselClass.unshift(last);
}
function touchStart(e: TouchEvent) {
  if (e.touches[0]) {
    touchStartPosition = e.touches[0].clientX;
    touchEndPosition = e.touches[0].clientX;
  }
}
function touchMove(e: TouchEvent) {
  if (e.touches[0]) {
    touchEndPosition = e.touches[0].clientX;
  }
}
function touchEnd(e: TouchEvent) {
  if (
    touchEndPosition - touchStartPosition > 0 &&
    Math.abs(touchEndPosition - touchStartPosition) > 50
  ) {
    after();
  } else if (
    touchEndPosition - touchStartPosition < 0 &&
    Math.abs(touchEndPosition - touchStartPosition) > 50
  ) {
    before();
  }
}
onMounted(() => {
  for (let i = 0; i < props.card.length - 3; i++) {
    carouselClass.push("after");
  }
});
</script>

<style scoped lang="scss">
* {
  border-radius: 15px;
}

.carousel {
  position: relative;
  width: 85%;
  margin: auto;

  &.normal {
    height: 1000px;

    .content {
      font-size: 18px;
    }
  }

  &.middle {
    height: 800px;

    .content {
      font-size: 15px;
    }
  }

  &.mini {
    height: 900px;

    .content {
      font-size: 12px;
    }
  }

  .whole {
    position: relative;
    width: 80%;
    height: 100%;
    overflow: visible;
    margin: auto;
    margin-top: -80px;
  }

  .img {
    width: 100%;
    height: 40%;
    max-height: 300px;
    border-radius: 0;
    background-size: cover;
    margin: auto;
    background-repeat: no-repeat;
    background-position: center;
  }
}

ul {
  position: relative;
  margin: auto;
  top: 8rem;
  width: 31%;
  height: 100%;
  overflow: visible;
  margin: auto;
  list-style: none;

  &.mini,
  &.middle {
    width: 80%;
    height: 100%;
    overflow: visible;
    margin: auto;
    list-style: none;
  }

  li {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}

.left {
  left: -110%;
  z-index: 0;
  transition: all 0.5s ease;

  &.mini,
  &.middle {
    z-index: 1;
    left: 0;
    top: 0;
    bottom: 10%;
    transition: none;
  }

  &-btn {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 60%;
    right: 95%;
    margin: auto;
    background: center/cover no-repeat url("#{$cubeBaseURL}ui/rightArrow_red.svg");
    transform: rotate(180deg);
    cursor: pointer;
  }
}

.center {
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 10%;
  transition: all 0.5s ease;

  &.mini,
  &.middle {
    display: none;
    transition: none;
  }
}

.right {
  left: 110%;
  z-index: 0;
  transition: all 0.5s ease;

  &.mini,
  &.middle {
    display: none;
    transition: none;
  }

  &-btn {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 60%;
    left: 95%;
    margin: auto;
    background: center/cover no-repeat url("#{$cubeBaseURL}ui/rightArrow_red.svg");
    cursor: pointer;
  }
}

.after {
  left: 0;
  top: 0;
  visibility: hidden;
  transform: scale(0);
  z-index: -1;
}

.card {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 5px 10px #999999;

  .introduction {
    width: 90%;
    text-align: left;
    white-space: pre-line;
    border-radius: 0;
    margin: 20px;
    font-size: 20px;
    overflow: auto;
    color: #d20001;

    &::first-line {
      font-size: 30px;
      font-weight: bolder;
      color: black;
    }
  }

  .content {
    text-align: left;
    white-space: pre-wrap;
    border-radius: 0;
    margin: 20px;
    text-indent: 2em;
    word-wrap: break-word;
    word-break: break-all;
  }
}
</style>

<template>
  <div class="carousel" :class="type" @touchstart="touchStart($event)" @touchmove="touchMove($event)"
    @touchend="touchEnd($event)">
    <div class="whole">
      <ul type :class="type">
        <li class="card" :class="[carouselClass[index], type]" v-for="(item, index) in props.card">
          <div class="img"
            v-bind:style="{ backgroundImage: 'url(' + useRuntimeConfig().public.cubeBaseURL + item.img + ')' }"></div>
          <div class="introduction">{{ item.introduction }}</div>
          <div class="content">
            <div>{{ item.content }}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="left-btn" :class="type" @click="after"></div>
    <div class="right-btn" :class="type" @click="before"></div>
  </div>
</template>
