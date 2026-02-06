<script setup lang="ts">
import { departmentContent, affairsImages } from '~~/constants/department'

definePageMeta({ pageNo: 3 })
useSeoMeta({ title: '干事培训中心 | 我们的部门' })
</script>

<template>
  <div>
    <JHLabel type="big">干事培训中心</JHLabel>
    <JHCard type="large" :title="departmentContent.affairs.title">
      <CarouselPictures :imgs="affairsImages" />
      <JHLabel type="small">部门介绍</JHLabel>
      <div
        v-for="(para, index) in departmentContent.affairs.introduction"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>

      <JHLabel type="small">招新宣言</JHLabel>
      <div
        v-for="(para, index) in departmentContent.affairs.recruitment"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>
    </JHCard>
    <CloseButton />
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/css/pages/department-detail.scss';
</style>
