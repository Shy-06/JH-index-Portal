<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { usePageStore } from '~/stores/pages';

const router = useRouter();
const isAtTop = ref(true);
const pageStore = usePageStore();
const btnOn = ref(false);
const listShow = ref(false);
const oldScrollPosition = ref(0);
const hide = ref(false);
const { pageNow } = storeToRefs(pageStore);

watch(pageNow, () => {
  handleScroll();
});

function handleScroll() {
  const nowScrollPosition = window.pageYOffset;
  isAtTop.value = nowScrollPosition < 300 && pageStore.pageNow === 0;

  if (nowScrollPosition > oldScrollPosition.value) {
    hide.value = true;
  } else {
    hide.value = false;
  }
  oldScrollPosition.value = nowScrollPosition;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  oldScrollPosition.value = 0;
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const links = [
  { name: '首页', link: '/' },
  { name: '我们的故事', link: '/story' },
  { name: '我们的产品', link: '/product' },
  { name: '我们的部门', link: '/department' },
  { name: '我们的活动', link: '/activity' },
  { name: '加入我们', link: '/join' }
];

function listBtnClicked() {
  btnOn.value = !btnOn.value;
  listShow.value = !listShow.value;
}

function logoClicked() {
  router.push('/');
}
</script>
<template>
  <div :class="[
    isAtTop && pageStore.pageNow === 0 && !btnOn ? 'atTop' : 'notAtTop',
    pageStore.pageType,
    hide ? 'hide' : ''
  ]" class="base">
    <NuxtImg class="logo" :class="pageStore.pageType" src="common/logo.webp"
      alt="Logo" @click="logoClicked" />
    <div v-for="(l, index) in links" :key="l.link" v-show="pageStore.pageType === 'normal'" class="link"
      :class="index === pageStore.pageNow ? 'select' : 'notSelect'">
      <router-link :to="l.link">{{ l.name }}</router-link>
    </div>
    <div v-show="pageStore.pageType === 'mini' || pageStore.pageType === 'middle'" class="listButton"
      :class="btnOn ? 'btnOn' : 'btnOff'" @click="listBtnClicked" />

    <div v-show="listShow" class="list" :class="pageStore.pageType">
      <div v-for="(l, index) in links" :key="l.link" class="listItem"
        :class="index === pageStore.pageNow ? 'select' : 'notSelect'" @click="listBtnClicked">
        <router-link :to="l.link">
          {{ l.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'song';
  src: url('#{$cubeBaseURL}fonts/ZoomlaYasong.ttf');
}

@keyframes showList {
  from {
    top: -100%;
    z-index: -1;
  }

  to {
    top: 100%;
  }
}

* {
  font-family: 'song', sans-serif;
}

a {
  text-decoration: none;
  color: white;
  font-size: large;
}

.atTop {
  background: transparent;
  transition: background linear 0.2s;
}

.notAtTop {
  background-color: #d20001;
  transition: background linear 0.2s;
}

.base {
  z-index: 10;
  display: grid;
  width: 100%;
  color: white;
  position: fixed;
  align-items: center;
  transition: top linear 0.4s, background linear 0.2s;
  top: 0;
}

.base.normal {
  height: 90px;
  grid-template-columns: 30% repeat(6, 1fr);
}

.base.middle {
  height: 90px;
  grid-template-columns: 1fr 60px;
}

.base.mini {
  height: 50px;
  grid-template-columns: 1fr 60px;
}

.base.hide {
  top: -100px;
  transition: top linear 0.4s, background linear 0.2s;
}

.logo.normal {
  width: 200px;
  transform: scale(0.8);
}

.logo.middle {
  width: 200px;
  transform: scale(0.8);
}

.logo.mini {
  width: 120px;
  transform: scale(0.8);
}

.link.select {
  background-color: white;
  border-radius: 20px;
  padding: 5px;
  transition: background-color 0.5s;
}

.link.select a {
  color: #d20001;
}

.link.select::after {
  display: block;
  content: "";
  width: 100%;
  position: relative;
  top: 20px;
  border-bottom: 3px solid white;
}

.link.notSelect a {
  color: white;
}

.listButton {
  width: 40px;
  height: 40px;
}

.listButton.btnOn {
  background: url('https://img.lonesome.cn/jhwl/home/photo/svg/close.svg') no-repeat center;
}

.listButton.btnOff {
  background: url('https://img.lonesome.cn/jhwl/home/photo/svg/list.svg') no-repeat center;
}

.list {
  width: 100%;
  height: 100vh;
  z-index: 5;
  position: absolute;
  top: 50px;
  background-color: white;
  align-items: center;
  justify-items: center;
  animation: showList 0.1s ease;
}

.list.middle {
  top: 90px;
}

.list .listItem {
  width: 40%;
  margin: auto;
  margin-top: 20px;
  padding: 5px;
  border: 2px solid;
  border-radius: 15px;
  border-color: #d20001;
}

.list .listItem.select {
  background-color: #d20001;
  color: white;
}

.list .listItem.notSelect {
  background-color: white;
}

.list .listItem.notSelect a {
  color: #d20001;
}
</style>
