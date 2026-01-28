<template>
  <NuxtImg src="ui/fork.webp" class="fork-button" @click="navigateTo('/department')" />
</template>

<style scoped>
.fork-button {
  width: 80px;
  height: 80px;
  margin-top: 50px;
  cursor: pointer;
}
</style>
