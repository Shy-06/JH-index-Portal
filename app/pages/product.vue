<script lang="ts" setup>
definePageMeta({ pageNo: 2 });
useSeoMeta({ title: "我们的产品-精弘网络" });
import { productsContent, productIcons } from "~~/constants/product";

const pageStore = usePageStore();
const isWechat = ref<boolean>(false);
const isWejh = ref<boolean>(false);
const isVisual = ref<boolean>(false);
const isEmail = ref<boolean>(false);

function toDepartment() {
  navigateTo("/department");
}
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/product.scss";
</style>

<template>
  <JHLabel type="title" v-if="pageStore.pageSize == 'mini' || pageStore.pageSize == 'middle'">我们的产品</JHLabel>
  <div class="shadow" v-if="isWejh || isWechat || isVisual || isEmail"></div>
  <!-- MARK: 宽屏 -->
  <div v-if="pageStore.pageSize == 'normal'" class="base normal">
    <JHCard type="large" :is-title="true" :title="productsContent.wechat.title">
      <div class="wechat">
        <div class="introduction">
          {{ productsContent.wechat.description }}
        </div>
        <div>
          <NuxtImg :src="productsContent.wechat.account1.qrCode" />
          <h3>{{ productsContent.wechat.account1.name }}</h3>
        </div>
        <div>
          <NuxtImg :src="productsContent.wechat.account2.qrCode" />
          <h3>{{ productsContent.wechat.account2.name }}</h3>
        </div>
      </div>
    </JHCard>
    <JHCard type="large" :is-title="true" :title="productsContent.wejh.title">
      <div class="wejh">
        <div class="introduction">
          {{ productsContent.wejh.description }}
        </div>
        <div>
          <NuxtImg :src="productsContent.wejh.miniProgramCode" />
          <h3>微精弘小程序</h3>
        </div>
      </div>
    </JHCard>
    <JHCard type="large" :is-title="true" :title="productsContent.visual.title">
      <div class="visual">
        <div class="introduction">
          {{ productsContent.visual.description }}
        </div>
        <center>{{ productsContent.visual.follow[0] }}</center>
        <center>{{ productsContent.visual.follow[1] }}</center>
        <center>{{ productsContent.visual.follow[2] }}</center>
        <NuxtImg :src="productsContent.visual.icon" style="max-width: 100%; height: auto;" />
      </div>
    </JHCard>
    <JHCard type="large" :is-title="true" :title="productsContent.email.title">
      <div class="email">
        <div class="introduction">
          {{ productsContent.email.description }}
        </div>
        <NuxtImg id="email-img" :src="productsContent.email.icon" />
        <h3>邮箱系统网址：<a :href="productsContent.email.url">{{ productsContent.email.url }}</a></h3>
      </div>
    </JHCard>
  </div>

  <!-- MARK: 窄屏 -->
  <div v-else>
    <JHCard noLabel type="large" :is-title="false" title="no">
      <div class="base" :class="pageStore.pageSize">
        <div class="product-item">
          <NuxtImg :src="productIcons.wejh" />
          <JHButton type="middle" @click="isWejh = true">微信小程序</JHButton>
        </div>
        <div class="product-separator"></div>
        <div class="product-item">
          <NuxtImg :src="productIcons.wechat" />
          <JHButton type="middle" @click="isWechat = true">微信服务号</JHButton>
        </div>
        <div class="product-separator"></div>
        <div class="product-item">
          <NuxtImg :src="productIcons.visual" />
          <JHButton type="middle" @click="isVisual = true">视觉影像</JHButton>
        </div>
        <div class="product-separator"></div>
        <div class="product-item">
          <NuxtImg :src="productIcons.email" />
          <JHButton type="middle" @click="isEmail = true">学生邮箱</JHButton>
        </div>
      </div>
    </JHCard>
    <!-- MARK: 窄屏详情页 -->
    <div class="detail" v-if="isWejh">
      <div class="title">
        {{ productsContent.wejh.title }}
        <NuxtImg class="icon" :src="productsContent.wejh.icon" />
      </div>
      <div class="content">
        {{ productsContent.wejh.description }}
      </div>
      <NuxtImg src="ui/return.svg" @click="isWejh = false" class="return-button" />
    </div>
    <div class="detail" v-if="isWechat">
      <div class="title">
        {{ productsContent.wechat.title }}
        <NuxtImg class="icon" :src="productIcons.wechat" />
      </div>
      <div class="content">
        {{ productsContent.wechat.description }}
      </div>
      <NuxtImg src="ui/return.svg" @click="isWechat = false" class="return-button" />
    </div>
    <div class="detail" v-if="isVisual">
      <div class="title">
        {{ productsContent.visual.title }}
        <NuxtImg class="icon" :src="productIcons.visual" />
      </div>
      <div class="content" style="font-size: 18px;">
        {{ productsContent.visual.description }}
        <template v-for="(line, index) in productsContent.visual.follow" :key="index">
          <div style="text-align: center;">{{ line }}</div>
        </template>
      </div>
      <NuxtImg src="ui/return.svg" @click="isVisual = false" class="return-button" />
    </div>
    <div class="detail" v-if="isEmail">
      <div class="title">
        {{ productsContent.email.title }}
        <NuxtImg class="icon" :src="productIcons.email" />
      </div>
      <div class="content">
        {{ productsContent.email.description }}
      </div>
      <NuxtImg src="ui/return.svg" @click="isEmail = false" class="return-button" />
    </div>
  </div>

  <JHButton type="middle" @click="toDepartment">
    我们的部门
    <NuxtImg src="ui/rightArrow.svg" style="width: 20px; margin-left: 20px" />
  </JHButton>
</template>
