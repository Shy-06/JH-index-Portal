<script lang="ts" setup>
import { productsContent, productIcons } from '~~/constants/product'

definePageMeta({ pageNo: 2 })
useSeoMeta({ title: '我们的产品' })

const pageStore = usePageStore()
const isWechat = ref<boolean>(false)
const isWejh = ref<boolean>(false)
const isVisual = ref<boolean>(false)
const isEmail = ref<boolean>(false)
</script>

<template>
  <div>
    <JHLabel
      v-if="pageStore.pageSize == 'mini' || pageStore.pageSize == 'middle'"
      type="title"
    >
      我们的产品
    </JHLabel>
    <div v-if="isWejh || isWechat || isVisual || isEmail" class="shadow" />
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
          <div class="product-item">
            <NuxtImg :src="productIcons.wejh" />
            <JHButton type="middle" @click="isWejh = true">微信小程序</JHButton>
          </div>
          <div class="product-item">
            <NuxtImg :src="productIcons.wechat" />
            <JHButton type="middle" @click="isWechat = true"
              >微信服务号</JHButton
            >
          </div>
          <div class="product-item">
            <NuxtImg :src="productIcons.visual" />
            <JHButton type="middle" @click="isVisual = true">视觉影像</JHButton>
          </div>
          <div class="product-item">
            <NuxtImg :src="productIcons.email" />
            <JHButton type="middle" @click="isEmail = true">学生邮箱</JHButton>
          </div>
        </div>
      </JHCard>
      <!-- MARK: 窄屏详情页 -->
      <div v-if="isWejh" class="detail">
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
          @click="isWejh = false"
        />
      </div>
      <div v-if="isWechat" class="detail">
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
          @click="isWechat = false"
        />
      </div>
      <div v-if="isVisual" class="detail">
        <div class="title">
          {{ productsContent.visual.title }}
          <NuxtImg class="icon" :src="productIcons.visual" />
        </div>
        <div class="content" style="font-size: 18px">
          {{ productsContent.visual.description }}
        </div>
        <NuxtImg
          src="ui/return.svg"
          class="return-button"
          @click="isVisual = false"
        />
      </div>
      <div v-if="isEmail" class="detail">
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
          @click="isEmail = false"
        />
      </div>
    </div>

    <NextPage @click="navigateTo('/department')"> 我们的部门 </NextPage>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/css/pages/product.scss';
</style>
