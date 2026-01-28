<script lang="ts" setup>
const pageStore = usePageStore();
const loaded = ref<boolean>(false);
onMounted(() => {
  loaded.value = true;
});
</script>

<template>
  <div class="start" :class="[pageStore.pageSize, loaded ? 'loaded' : 'unloaded']">
    <div class="title1" :class="pageStore.pageSize">
      <CoverTyper />
    </div>
    <NuxtImg class="downArrow" src="ui/downArrow.svg" />
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "song";
  src: url("#{$cubeBaseURL}fonts/ZoomlaYasong.ttf");
}

.start {
  background-position: 0 0;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.normal {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("#{$cubeBaseURL}groupPhoto/2024.webp") no-repeat center;
    background-size: cover;
    height: 100vh;
  }

  &.middle {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("#{$cubeBaseURL}common/startPc.webp") no-repeat center;
    background-size: cover;
    height: 100vh;
  }

  &.mini {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("#{$cubeBaseURL}common/startMobile.webp") no-repeat center;
    background-size: cover;
    height: 100vh;
  }
}

.title1 {
  color: white;
  font-family: "song";
  margin: auto;
  display: block;

  &.normal,
  &.middle {
    font-size: 6vw;
    letter-spacing: 1vw;
    padding: 10px;
  }

  &.mini {
    font-size: x-large;
    letter-spacing: 10px;
  }
}

.downArrow {
  /* margin: auto; */
  position: absolute;
  bottom: 50px;
  width: 50px;
  height: 50px;
}
</style>
