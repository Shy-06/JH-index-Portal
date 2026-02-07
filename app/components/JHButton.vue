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
  border-radius: 20px;
  font-size: 20px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

.middle {
  padding: 10px;
  padding-inline: 20px;
  border-radius: 30px;
  font-size: large;
}

.mini {
  border-radius: 30px;
  font-size: small;
}
</style>
