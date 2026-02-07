<script lang="ts" setup>
import { indexStoryContent } from '~~/constants/index'

definePageMeta({ layout: false, pageNo: 0 })
</script>

<template>
  <div>
    <Cover />
    <Introduce />
    <History v-if="usePageStore().pageSize === 'normal'" />
    <template v-else>
      <Timeline />
      <JHCard title="我们的故事" type="large">
        <div class="story-content">{{ indexStoryContent[0] }}</div>
        <div class="story-content">{{ indexStoryContent[1] }}</div>
        <NuxtImg
          src="common/story.webp"
          style="width: 60%; height: 60%; border-radius: var(--radius-lg)"
        />
        <NextPage @click="navigateTo('/story')"> 我们的故事 </NextPage>
      </JHCard>
    </template>
    <Contact />
    <PageFooter />
  </div>
</template>

<style scoped lang="scss">
.story-content {
  font-size: 24px;
  line-height: 1.8;
}
</style>
