<script setup lang="ts">
const prop = defineProps<{ type: 'mini' | 'small' | 'middle' }>()
</script>

<template>
  <button type="button" class="btn" :class="prop.type">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  width: fit-content;
  margin: auto;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--primary-color);
  cursor: pointer;
}

.small {
  padding-inline: 24px;
  height: 30px;
  border-radius: var(--radius-xl);
  font-size: 20px;
  box-shadow: var(--shadow-md);
  white-space: nowrap;
}

.middle {
  padding: 10px;
  padding-inline: 20px;
  border-radius: var(--radius-2xl);
  font-size: large;
}

.mini {
  border-radius: var(--radius-2xl);
  font-size: small;
}
</style>
