<script setup lang="ts">
import {
  departmentContent,
  visualImages,
  editorialImages,
} from '~~/constants/department'

definePageMeta({ pageNo: 3 })
useSeoMeta({ title: '新媒体中心 | 我们的部门' })
</script>

<template>
  <div>
    <JHLabel type="big">新媒体中心</JHLabel>
    <JHCard type="large" :title="departmentContent.visual.title">
      <CarouselPictures :imgs="visualImages" />
      <JHLabel type="small">部门介绍</JHLabel>
      <div
        v-for="(para, index) in departmentContent.visual.introduction"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>

      <JHLabel type="small">招新宣言</JHLabel>
      <div
        v-for="(para, index) in departmentContent.visual.recruitment"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>
    </JHCard>

    <JHCard type="large" :title="departmentContent.editorial.title">
      <CarouselPictures :imgs="editorialImages" />
      <JHLabel type="small">部门介绍</JHLabel>
      <div
        v-for="(para, index) in departmentContent.editorial.introduction"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>

      <JHLabel type="small">招新宣言</JHLabel>
      <div
        v-for="(para, index) in departmentContent.editorial.recruitment"
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

img {
  width: 80%;
}
</style>
