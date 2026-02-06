<script setup lang="ts">
import { recruitmentInfo, posterImage } from '~~/constants/recruitment'

definePageMeta({ pageNo: 5 })
useSeoMeta({ title: '加入我们' })
const pageStore = usePageStore()

function toRecruit() {
  window.open(recruitmentInfo.registrationUrl)
}
</script>

<template>
  <JHCard title="加入我们" type="large">
    <div class="base" :class="pageStore.pageSize">
      <NuxtImg class="poster" :src="posterImage" />
      <div class="detail-base" :class="pageStore.pageSize">
        <div class="introduce" :class="pageStore.pageSize">
          <JHButton
            type="middle"
            style="position: relative; margin-bottom: 20px"
            @click="toRecruit"
            >点我报名
          </JHButton>
          <JHLabel type="nano">线下摆摊</JHLabel>
          <div class="content">
            <div>朝晖: {{ recruitmentInfo.offline.chaohuiDate }}</div>
            <div>地址：{{ recruitmentInfo.offline.chaohuiLocation }}</div>
            <div style="margin-top: 20px">
              屏峰: {{ recruitmentInfo.offline.pingfengDate }}
            </div>
            <div>地址：{{ recruitmentInfo.offline.pingfengLocation }}</div>
          </div>

          <JHLabel type="nano">招新宣讲</JHLabel>
          <div class="content">
            <div>朝晖: {{ recruitmentInfo.presentation.chaohuiDate }}</div>
            <div>地址: {{ recruitmentInfo.presentation.chaohuiLocation }}</div>
          </div>
          <JHLabel type="nano">招新群号</JHLabel>
          <div class="content">
            <div
              v-for="group in recruitmentInfo.recruitmentGroups"
              :key="group.number"
              class="row"
            >
              <span>{{ group.name }}</span
              ><span>{{ group.number }}</span>
            </div>
          </div>
        </div>
        <div class="qr">
          <JHLabel type="nano">最新动态</JHLabel>
          <div class="qr-base">
            <div class="qr-code">
              <NuxtImg
                provider="wechatOpen"
                :src="useRuntimeConfig().public.contact.wechat.jhwl"
              />
              精弘网络
            </div>
            <div class="qr-code">
              <NuxtImg
                provider="wechatOpen"
                :src="useRuntimeConfig().public.contact.wechat.jxhzx"
              />
              精小弘在线
            </div>
          </div>
        </div>
      </div>
    </div>
  </JHCard>
</template>

<style scoped lang="scss">
@use '~/assets/css/pages/join.scss';
</style>
