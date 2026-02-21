<script setup lang="ts">
const props = defineProps<{ type: 'title' | 'big' | 'small' | 'nano' }>()
</script>

<template>
  <div :class="[props.type, usePageStore().pageSize]">
    <div class="h">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/css/mixins' as *;

.title {
  @include primary-styled;
  width: fit-content;
  padding: 10px;
  padding-inline: 80px;
  align-items: center;
  font-family: 'AliSans-EN';
  margin: 0 7.5% 3%;
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-lg);

  .h {
    display: block;
    font-size: x-large;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  &.middle,
  &.mini {
    margin: auto;
  }
}

.big {
  @include primary-styled;
  width: 15rem;
  height: 5rem;
  border-radius: var(--radius-pill);
  font-size: 30px;
  line-height: 5rem;
  margin: 0 auto 3vw auto;
  box-shadow: var(--shadow-lg);
}

.small {
  @include primary-styled;
  @include flex-center;
  min-width: 10vw;
  width: fit-content;
  height: 5vh;
  padding: 10px;
  margin: 15px auto;
  border-radius: var(--radius-xl);
  font-size: 20px;
  line-height: 30px;
}

.nano {
  @include primary-styled;
  width: fit-content;
  border-radius: var(--radius-sm);
  align-items: center;
  padding: 5px;
  padding-inline: 20px;

  .h {
    display: block;
    font-size: 15px;
  }

  &.mini,
  &.middle {
    margin: auto;
  }
}
</style>
