<script setup lang="ts">
const props = defineProps<{ type: 'mini' | 'small' | 'middle' }>()
</script>

<template>
  <button type="button" class="jh-button" :class="props.type">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use '~/assets/css/mixins' as *;

.jh-button {
  @include button-base;

  &.small {
    padding-inline: 24px;
    height: 30px;
    border-radius: var(--radius-xl);
    font-size: 20px;
    box-shadow: var(--shadow-md);
    white-space: nowrap;
  }

  &.middle {
    padding: 10px;
    padding-inline: 20px;
    border-radius: var(--radius-2xl);
    font-size: large;
  }

  &.mini {
    border-radius: var(--radius-2xl);
    font-size: small;
  }
}
</style>
