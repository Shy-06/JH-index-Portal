<template>
  <NuxtImg
    src="ui/fork.webp"
    class="fork-button"
    alt="返回我们的部门页面"
    @click="navigateTo('/department')"
  />
</template>

<style scoped>
.fork-button {
  width: 80px;
  height: 80px;
  margin-top: 50px;
  cursor: pointer;
}
</style>
