<template>
  <JHButton type="middle" class="btn">
    <slot />
    <NuxtImg src="ui/rightArrow.svg" class="right-arrow" alt="" />
  </JHButton>
</template>

<style scoped lang="scss">
.btn {
  margin: 20px auto;
}

.right-arrow {
  width: 20px;
  margin-left: 10px;
}
</style>
