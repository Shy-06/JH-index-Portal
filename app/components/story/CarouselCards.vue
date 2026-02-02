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

function toPrevious() {
  let first = carouselClass.shift() as string;
  carouselClass.push(first);
}
function toNext() {
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
function touchEnd() {
  if (Math.abs(touchEndPosition - touchStartPosition) > 50) {
    if (touchEndPosition > touchStartPosition) toPrevious();
    else toNext();
  }
}
onMounted(() => {
  for (let i = 0; i < props.card.length - 3; i++) {
    carouselClass.push("after");
  }
});
</script>

<template>
  <div class="carousel" :class="type" @touchstart="touchStart($event)" @touchmove="touchMove($event)"
    @touchend="touchEnd()">
    <div class="left btn" :class="type" @click="toPrevious"></div>
    <ul :class="type">
      <li v-for="(item, index) in props.card" :class="[carouselClass[index], type]">
        <div class="img"
          v-bind:style="{ backgroundImage: 'url(' + useRuntimeConfig().public.cubeBaseURL + item.img + ')' }"></div>
        <div class="introduction">{{ item.introduction }}</div>
        <div class="content">
          <div>{{ item.content }}</div>
        </div>
      </li>
    </ul>
    <div class="right btn" :class="type" @click="toNext"></div>
  </div>
</template>

<style scoped lang="scss">
.carousel {
  position: relative;
  width: 90%;
  margin: 30px auto;

  &.middle {
    height: 800px;
  }

  &.normal,
  &.mini {
    height: 750px;
  }

  ul {
    padding-inline-start: 0;
    position: relative;
    height: 100%;
    overflow: visible;
    margin: auto;
    list-style: none;

    &.normal {
      width: 25%;
    }

    &.mini,
    &.middle {
      width: 75%;
    }

    li {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: white;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 0 5px 10px #999999;

      .img {
        width: 100%;
        height: 40%;
        max-height: 300px;
        background-size: cover;
        margin: auto;
        background-repeat: no-repeat;
        background-position: center;
      }

      .introduction {
        width: 90%;
        text-align: left;
        white-space: pre-line;
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
        margin: 20px;
        text-indent: 2em;
        word-wrap: break-word;
        word-break: break-all;

        .normal {
          font-size: 18px;
        }

        .middle {
          font-size: 15px;
        }

        .mini {
          font-size: 12px;
        }
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
    }

    .after {
      left: 0;
      top: 0;
      visibility: hidden;
      transform: scale(0);
      z-index: -1;
    }
  }

  .btn {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    margin: auto;
    background: center/cover no-repeat url("#{$cubeBaseURL}ui/rightArrow_red.svg");
    cursor: pointer;

    &.left {
      left: 0;
      transform: translateY(-50%) rotate(180deg);
    }

    &.right {
      right: 0;
      transform: translateY(-50%);
    }
  }
}
</style>
