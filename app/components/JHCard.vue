<script setup lang="ts">
const props = defineProps<{
  title?: string
  type: 'large' | 'small'
}>()
</script>

<template>
  <div class="jh-card" :class="props.type">
    <h2 v-if="props.title" class="title" :class="props.type">
      {{ props.title }}
    </h2>
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
    width: fit-content;
    padding: 10px;
    padding-inline: 80px;
    height: 50px;
    left: -6vw;
  }
}
</style>
