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

  &.normal {
    height: 750px;
  }

  &.middle {
    height: 800px;
  }

  &.mini {
    height: 720px;
  }

  ul {
    padding-inline-start: 0;
    position: relative;
    height: 100%;
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
      background-color: #ffffff;
      overflow: hidden;
      border-radius: 20px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
      display: flex;
      flex-direction: column;

      @media (hover: hover) {
        transition: box-shadow 0.3s ease;

        &:hover {
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.1);

          .img {
            transform: scale(1.03);
          }
        }
      }

      .img {
        width: 100%;
        height: 30%;
        background: center/cover no-repeat;
        flex-shrink: 0;

        @media (hover: hover) {
          transition: transform 0.3s ease;
        }
      }

      .introduction {
        width: 90%;
        margin: 20px;
        font-size: 18px;
        color: #d20001;
        text-align: left;
        white-space: pre-line;
        flex-shrink: 0;

        &::first-line {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
        }
      }

      .content {
        margin: 0 20px 20px;
        font-size: 16px;
        text-align: left;
        text-indent: 2em;
        white-space: pre-wrap;
        overflow: auto;
        flex-grow: 1;

        &::-webkit-scrollbar {
          width: 6px;
        }

        &::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb {
          background: #d2000180;
          border-radius: 3px;

          &:hover {
            background: #d20001;
          }
        }
      }
    }

    .left,
    .right {
      z-index: 0;
      opacity: 0.7;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .left {
      left: -110%;

      &.mini,
      &.middle {
        left: 0;
        top: 0;
        bottom: 10%;
        z-index: 1;
        opacity: 1;
        transition: none;
      }
    }

    .center {
      left: 0;
      top: 0;
      bottom: 10%;
      z-index: 1;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

      &.mini,
      &.middle {
        display: none;
      }
    }

    .right {
      left: 110%;

      &.mini,
      &.middle {
        display: none;
      }
    }

    .after {
      left: 0;
      top: 0;
      z-index: -1;
      visibility: hidden;
      opacity: 0;
      transform: scale(0);
    }
  }

  .btn {
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    background: center/cover no-repeat url("#{$cubeBaseURL}ui/rightArrow_red.svg");
    cursor: pointer;

    @media (hover: hover) {
      transition: transform 0.2s ease, opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }

    &.left {
      left: 0;
      transform: translateY(-50%) rotate(180deg);

      @media (hover: hover) {
        &:hover {
          transform: translateY(-50%) rotate(180deg) scale(1.1);
        }
      }

      &:active {
        transform: translateY(-50%) rotate(180deg) scale(0.95);
      }
    }

    &.right {
      right: 0;
      transform: translateY(-50%);

      @media (hover: hover) {
        &:hover {
          transform: translateY(-50%) scale(1.1);
        }
      }

      &:active {
        transform: translateY(-50%) scale(0.95);
      }
    }
  }
}
</style>
