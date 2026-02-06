<template>
  <!--根据屏幕宽度调整顶部间距-->
  <div class="top" :class="usePageStore().pageSize"/>
</template>

<style scoped lang="scss">
.top {

  &.middle,
  &.normal {
    margin: 100px;
  }

  &.mini {
    margin: 60px;
  }
}
</style>