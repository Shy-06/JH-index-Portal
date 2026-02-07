<script setup lang="ts">
const prop = defineProps<{
  type: 'mini' | 'small' | 'middle' | 'middle-disabled' | 'small-disabled'
}>()
</script>

<template>
  <button
    :class="{
      'button-mini': prop.type == 'mini',
      'button-small': prop.type == 'small',
      'button-middle': prop.type == 'middle',
      'button-middle-disabled': prop.type == 'middle-disabled',
      'button-small-disabled': prop.type == 'small-disabled',
    }"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
[class^='button-'] {
  width: fit-content;
  margin: auto;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-small {
  padding-inline: 24px;
  height: 30px;
  border-radius: 20px;
  background-color: #d20001;
  color: white;
  font-size: 20px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  white-space: nowrap;

  &-disabled {
    padding-inline: 24px;
    height: 30px;
    border-radius: 20px;
    background-color: #999999;
    color: white;
    font-size: 20px;
    cursor: not-allowed;
    white-space: nowrap;
  }
}

.button-middle {
  padding: 10px;
  padding-inline: 20px;
  background-color: #d20001;
  border-radius: 30px;
  font-size: large;
  color: white;
  cursor: pointer;

  &-disabled {
    padding: 10px;
    padding-inline: 20px;
    background-color: #999999;
    border-radius: 30px;
    font-size: large;
    color: white;
    cursor: not-allowed;
  }
}

.button-mini {
  border-radius: 30px;
  font-size: small;
  background-color: #d20001;
  color: white;
}
</style>
