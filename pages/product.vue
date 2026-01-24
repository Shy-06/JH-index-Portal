<script lang="ts" setup>
import { usePageStore } from "~/stores/pages";
import JHLabel from "~/components/JHLabel.vue";
import JHCard from "~/components/JHCard.vue";
import Footer from "~/components/Footer.vue";
import JHButton from "~/components/JHButton.vue";
import { ref } from "vue";
import PageTop from "~/components/PageTop.vue";
import { productsContent, productIcons } from "~/constants/product";

const router = useRouter();
const pageStore = usePageStore();
const isWechat = ref<boolean>(false);
const isWejh = ref<boolean>(false);
const isVisual = ref<boolean>(false);
const isEmail = ref<boolean>(false);

function toDepartment() {
  router.push("/department");
}
</script>

<style scoped lang="scss">
@use "~/assets/css/pages/product.scss";
</style>

<template>
  <PageTop />
  <JHLabel type="title" v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'">我们的产品</JHLabel>
  <div class="shadow" v-if="isWejh || isWechat || isVisual || isEmail"></div>
  <div class="base" :class="pageStore.pageType" v-if="pageStore.pageType == 'normal'">
    <JHCard type="large" :is-title="true" :title="productsContent.wechat.title">
      <div class="wechat">
        <div class="introduction">
          {{ productsContent.wechat.description }}
        </div>
        <div v-for="account in productsContent.wechat.accounts" :key="account.name">
          <NuxtImg :src="account.qrCode" />
          <h3>{{ account.name }}</h3>
        </div>
      </div>
    </JHCard>
    <JHCard type="large" :is-title="true" :title="productsContent.wejh.title">
      <div class="wejh">
        <div class="introduction">
          {{ productsContent.wejh.description }}
        </div>
        <div>
          <NuxtImg :src="productsContent.wejh.icon" />
          <h3>微精弘小程序</h3>
        </div>
      </div>
    </JHCard>
    <JHCard type="large" :is-title="true" :title="productsContent.visual.title">
      <div class="visual">
        <div class="introduction">
          {{ productsContent.visual.description }}
          <template v-for="line in productsContent.visual.follow" :key="line">
            <br />{{ line }}
          </template>
        </div>
        <NuxtImg :src="productsContent.visual.icon" />
      </div>
    </JHCard>
    <JHCard type="large" :is-title="true" :title="productsContent.email.title">
      <div class="email">
        <div class="introduction">
          {{ productsContent.email.description }}
        </div>
        <NuxtImg id="email-img" :src="productsContent.email.icon" />
        <h3>邮箱网址：{{ productsContent.email.url }}</h3>
      </div>
    </JHCard>
  </div>
  <div v-if="pageStore.pageType == 'middle' || pageStore.pageType == 'mini'">
    <JHCard type="large" :is-title="false" title="no">
      <div class="base" :class="pageStore.pageType">
        <div class="product-item">
          <NuxtImg :src="productIcons.wejh" />
          <JHButton type="middle" @click="isWejh = true">微信小程序</JHButton>
        </div>
        <div class="product-item">
          <NuxtImg :src="productIcons.wechat" />
          <JHButton type="middle" @click="isWechat = true">微信服务号</JHButton>
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
    <div class="detail" v-if="isWejh">
      <div class="title">
        {{ productsContent.wejh.title }}
        <NuxtImg class="icon" :src="productsContent.wejh.icon" />
      </div>

      <div class="content">
        {{ productsContent.wejh.description }}
      </div>
      <NuxtImg src="https://img.lonesome.cn/jhwl/home/photo/svg/return.svg" @click="isWejh = false" class="retbtn"/>
    </div>
    <div class="detail" v-if="isWechat">
      <div class="title">
        {{ productsContent.wechat.title }}
        <NuxtImg class="icon" :src="productIcons.wechat" />
      </div>

      <div class="content">
        {{ productsContent.wechat.description }}
      </div>
      <NuxtImg src="https://img.lonesome.cn/jhwl/home/photo/svg/return.svg" @click="isWechat = false" class="retbtn"/>
    </div>
    <div class="detail" v-if="isVisual">
      <div class="title">
        {{ productsContent.visual.title }}
        <NuxtImg class="icon" :src="productIcons.visual" />
      </div>
      <div class="content" style="font-size: 18px;">
        {{ productsContent.visual.description }}
        <template v-for="(line, index) in productsContent.visual.follow" :key="line">
          <template v-if="index === 0">{{ line }}<br /></template>
          <center v-else>{{ line }}</center>
        </template>
      </div>
      <NuxtImg src="https://img.lonesome.cn/jhwl/home/photo/svg/return.svg" @click="isVisual = false" class="retbtn"/>
    </div>
    <div class="detail" v-if="isEmail">
      <div class="title">
        {{ productsContent.email.title }}
        <NuxtImg class="icon" :src="productIcons.email" />
      </div>
      <div class="content">
        {{ productsContent.email.description }}
      </div>
      <NuxtImg src="https://img.lonesome.cn/jhwl/home/photo/svg/return.svg" @click="isEmail = false" class="retbtn"/>
    </div>
  </div>
  <div style="height: 100px"></div>
  <JHButton type="middle" @click="toDepartment">
    我们的部门
    <NuxtImg src="https://img.lonesome.cn/jhwl/home/photo/svg/rightArrow.svg" style="width: 20px; margin-left: 20px" />
  </JHButton>
  <Footer />
</template>
