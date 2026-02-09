<script lang="ts" setup>
import { productsContent, productIcons } from '~~/constants/product'

definePageMeta({ pageNo: 2 })
useSeoMeta({ title: '我们的产品' })

const pageStore = usePageStore()
const { lock: lockScroll, unlock: unlockScroll } = useScrollLock()
type DetailPart = 'wejh' | 'wechat' | 'visual' | 'email'
const currentDetail = ref<DetailPart | null>(null)

function setDetail(part: DetailPart | null) {
  if (part) {
    currentDetail.value = part
    lockScroll()
    return
  }
  if (currentDetail.value !== null) unlockScroll()
  currentDetail.value = null
}

watch(
  () => pageStore.pageSize,
  (newSize) => {
    if (newSize === 'normal') {
      setDetail(null)
    }
  },
)

onUnmounted(() => {
  if (currentDetail.value !== null) setDetail(null)
})
</script>

<template>
  <div>
    <JHLabel
      v-if="pageStore.pageSize == 'mini' || pageStore.pageSize == 'middle'"
      type="title"
    >
      我们的产品
    </JHLabel>
    <!-- MARK: 宽屏 -->
    <div v-if="pageStore.pageSize == 'normal'" class="base normal">
      <JHCard type="large" :title="productsContent.wechat.title">
        <div class="wechat">
          <div class="introduction">
            {{ productsContent.wechat.description }}
          </div>
          <div>
            <NuxtImg
              provider="wechatOpen"
              :src="useRuntimeConfig().public.contact.wechat.jhwl"
            />
            <h3>浙江工业大学精弘网络</h3>
          </div>
          <div>
            <NuxtImg
              provider="wechatOpen"
              :src="useRuntimeConfig().public.contact.wechat.jxhzx"
            />
            <h3>精小弘在线</h3>
          </div>
        </div>
      </JHCard>
      <JHCard type="large" :title="productsContent.wejh.title">
        <div class="introduction">{{ productsContent.wejh.description }}</div>
        <NuxtImg id="wejh-code" :src="productsContent.wejh.miniProgramCode" />
        <h3>微精弘小程序</h3>
      </JHCard>
      <JHCard type="large" :title="productsContent.visual.title">
        <div class="visual">
          <div class="introduction">
            {{ productsContent.visual.description }}
          </div>
          <a href="https://space.bilibili.com/485566103">
            <NuxtImg
              provider="cliQR"
              src="https://space.bilibili.com/485566103"
              style="max-width: 100%; height: auto"
            />
            <h3>哔哩哔哩</h3>
          </a>
          <div>
            <NuxtImg
              :src="productsContent.visual.shipinhao"
              style="max-width: 100%; height: auto"
            />
            <h3>微信视频号</h3>
          </div>
        </div>
      </JHCard>
      <JHCard type="large" :title="productsContent.email.title">
        <div class="introduction">{{ productsContent.email.description }}</div>
        <h3>
          邮箱系统网址：<a :href="productsContent.email.url">
            {{ productsContent.email.url }}
          </a>
        </h3>
        <NuxtImg id="email-img" :src="productsContent.email.icon" />
      </JHCard>
    </div>

    <!-- MARK: 窄屏 -->
    <div v-else>
      <JHCard type="large">
        <div class="base" :class="pageStore.pageSize">
          <div class="product-item" @click="setDetail('wejh')">
            <NuxtImg :src="productIcons.wejh" />
            <JHButton type="middle"> 微信小程序 </JHButton>
          </div>
          <div class="product-item" @click="setDetail('wechat')">
            <NuxtImg :src="productIcons.wechat" />
            <JHButton type="middle"> 微信服务号 </JHButton>
          </div>
          <div class="product-item" @click="setDetail('visual')">
            <NuxtImg :src="productIcons.visual" />
            <JHButton type="middle"> 视觉影像 </JHButton>
          </div>
          <div class="product-item" @click="setDetail('email')">
            <NuxtImg :src="productIcons.email" />
            <JHButton type="middle"> 学生邮箱 </JHButton>
          </div>
        </div>
      </JHCard>

      <!-- MARK: 窄屏详情 -->
      <Transition name="fade">
        <div
          v-if="currentDetail !== null"
          class="shadow"
          @click="setDetail(null)"
        />
      </Transition>
      <Transition name="sheet" mode="out-in">
        <div v-if="currentDetail === 'wejh'" key="wejh" class="detail">
          <div class="title">
            {{ productsContent.wejh.title }}
            <NuxtImg class="icon" :src="productsContent.wejh.icon" />
          </div>
          <div class="content">
            {{ productsContent.wejh.description }}
          </div>
          <NuxtImg
            src="ui/return.svg"
            class="return-button"
            @click="setDetail(null)"
          />
        </div>
        <div v-else-if="currentDetail === 'wechat'" key="wechat" class="detail">
          <div class="title">
            {{ productsContent.wechat.title }}
            <NuxtImg class="icon" :src="productIcons.wechat" />
          </div>
          <div class="content">
            {{ productsContent.wechat.description }}
          </div>
          <NuxtImg
            src="ui/return.svg"
            class="return-button"
            @click="setDetail(null)"
          />
        </div>
        <div v-else-if="currentDetail === 'visual'" key="visual" class="detail">
          <div class="title">
            {{ productsContent.visual.title }}
            <NuxtImg class="icon" :src="productIcons.visual" />
          </div>
          <div class="content">
            {{ productsContent.visual.description }}
          </div>
          <NuxtImg
            src="ui/return.svg"
            class="return-button"
            @click="setDetail(null)"
          />
        </div>
        <div v-else-if="currentDetail === 'email'" key="email" class="detail">
          <div class="title">
            {{ productsContent.email.title }}
            <NuxtImg class="icon" :src="productIcons.email" />
          </div>
          <div class="content">
            {{ productsContent.email.description }}
          </div>
          <NuxtImg
            src="ui/return.svg"
            class="return-button"
            @click="setDetail(null)"
          />
        </div>
      </Transition>
    </div>

    <NextPage @click="navigateTo('/department')"> 我们的部门 </NextPage>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/css/pages/product.scss';
</style>
