<script setup lang="ts">
const prop = defineProps<{ type: string }>()
</script>

<template>
  <div :class="[prop.type, usePageStore().pageSize]">
    <div class="h">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  width: fit-content;
  padding: 10px;
  padding-inline: 80px;
  align-items: center;
  font-family: 'SC-VF';
  margin: 0 7.5% 3%;
  background-color: var(--primary-color);
  color: white;
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
  width: 15rem;
  height: 5rem;
  border-radius: var(--radius-pill);
  font-size: 30px;
  color: white;
  line-height: 5rem;
  background-color: var(--primary-color);
  margin: 0 auto 3vw auto;
  box-shadow: var(--shadow-lg);
}

.small {
  min-width: 10vw;
  width: fit-content;
  height: 5vh;
  padding: 10px;
  margin: 15px auto;
  border-radius: var(--radius-xl);
  background-color: var(--primary-color);
  color: white;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nano {
  background-color: var(--primary-color);
  width: fit-content;
  border-radius: var(--radius-sm);
  align-items: center;
  justify-content: center;
  color: white;
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
