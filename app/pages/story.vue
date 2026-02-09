<script lang="ts" setup>
import {
  yixingImages,
  yurenImages,
  persons,
  yixingContent,
  yurenContent,
  socialLifeContent,
} from '~~/constants/story'

definePageMeta({ pageNo: 1 })
useSeoMeta({ title: '我们的故事' })
const pageStore = usePageStore()
</script>

<template>
  <div>
    <JHLabel
      v-if="pageStore.pageSize == 'mini' || pageStore.pageSize == 'middle'"
      type="title"
    >
      我们的故事
    </JHLabel>
    <JHCard type="large" title="我们的使命">
      <MissionContent />
    </JHCard>
    <JHCard type="large" title="精弘毅行">
      <CarouselPictures :imgs="yixingImages" />
      <div class="yixing-content" :class="pageStore.pageSize">
        {{ yixingContent[0] }}
      </div>
      <div class="yixing-content" :class="pageStore.pageSize">
        {{ yixingContent[1] }}
      </div>
    </JHCard>
    <JHCard type="large" title="网络育人">
      <CarouselPictures :imgs="yurenImages" />
      <div class="yixing-content" :class="pageStore.pageSize">
        {{ yurenContent }}
      </div>
    </JHCard>
    <JHCard type="large" title="生活社交">
      <div class="shenghuo" :class="pageStore.pageSize">
        <NuxtImg id="img1" src="groupPhoto/shenghuo0.webp" />
        <div class="content">
          {{ socialLifeContent[0] }}
        </div>
        <NuxtImg id="img2" src="groupPhoto/shenghuo1.webp" />
        <div class="content">
          {{ socialLifeContent[1] }}
        </div>
        <NuxtImg id="img3" src="groupPhoto/shenghuo2.webp" />
        <div class="shenghuo-imgs">
          <NuxtImg id="img4" src="groupPhoto/shenghuo3.webp" />
          <NuxtImg id="img5" src="groupPhoto/shenghuo4.webp" />
        </div>
        <div class="content">
          {{ socialLifeContent[2] }}
        </div>
      </div>
    </JHCard>

    <div class="jiyu">
      <JHLabel type="title">前辈寄语</JHLabel>
      <CarouselCards :card="persons" :type="pageStore.pageSize" />
    </div>

    <NextPage @click="navigateTo('/product')"> 我们的产品 </NextPage>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/css/pages/story.scss';
</style>
