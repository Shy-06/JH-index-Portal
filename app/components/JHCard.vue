<script setup lang="ts">
const prop = defineProps<{
  title?: string
  type: string
}>()
</script>

<template>
  <div class="container" :class="prop.type">
    <div v-if="prop.title" class="title" :class="prop.type">
      {{ prop.title }}
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: white;
  box-shadow: 0 5px 10px #999999;
  border-radius: 10px;

  &.large {
    width: 80%;
    height: fit-content + 10px;
    margin: 20px auto;
    padding: 20px;
  }

  &.small {
    width: 100%;
    margin: 10px auto;
    padding-block: 20px;
  }
}

.title {
  background-color: #d20001;
  border-radius: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 20px;

  &.large {
    width: fit-content;
    padding: 10px;
    padding-inline: 80px;
    height: 50px;
    top: 10px;
    left: -6vw;
    font-size: x-large;
    font-weight: bolder;
  }

  &.small {
    width: fit-content;
    height: fit-content;
    padding: 10px;
    top: 2vh;
    left: -2%;
    font-size: large;
    font-weight: bolder;
  }
}
</style>
