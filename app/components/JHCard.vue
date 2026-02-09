<script setup lang="ts">
const props = defineProps<{
  title?: string
  type: 'large' | 'small'
}>()
</script>

<template>
  <div class="jh-card" :class="props.type">
    <div v-if="props.title" class="title" :class="props.type">
      {{ props.title }}
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/css/mixins' as *;

.jh-card {
  @include card-base;

  &.large {
    width: 80%;
    margin: 20px auto;
    padding: 20px;
  }

  &.small {
    width: 100%;
    margin: 10px auto;
    padding-block: 20px;
  }

  .title {
    @include title-styled;
    margin-bottom: 20px;

    &.large {
      width: fit-content;
      padding: 10px;
      padding-inline: 80px;
      height: 50px;
      top: 10px;
      left: -6vw;
      font-size: x-large;
    }

    &.small {
      width: fit-content;
      height: fit-content;
      padding: 10px;
      top: 2vh;
      left: -2%;
      font-size: large;
    }
  }
}
</style>
