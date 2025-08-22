<script setup lang="ts">
import Footer from "../components/Footer.vue";
import { useRouter } from "vue-router";
import JHCard from "../components/JHCard.vue";
import { ENV } from "../utils/const";
import { usePageStore } from "../stores/pages";
import JHButton from "../components/JHButton.vue";
import JHLabel from "../components/JHLabel.vue";
import PageTop from "../components/PageTop.vue";
const pageStore = usePageStore();
const router = useRouter();
function toRecruit() {
  window.open("https://qa.phlin.cn/View?id=U2FsdGVkX18gIkyn6SaGQk4Eo3ZMSM/r6qI3ICpjTRo=");
  return false;
}
function toLong() {
  // if (ENV == "dev") {
  //   window.open("/join/long");
  // } else {
  //   return false;
  // }
  return false;
}
</script>
<template>
  <PageTop />
  <JHCard title="加入我们" type="large" :is-title="true">
    <div class="base" :class="pageStore.pageType">
      <img class="haibao" src="/25img/haibao.jpg" />
      <div class="detail-base" :class="pageStore.pageType">
        <div class="introduce" :class="pageStore.pageType">
          <JHButton type="middle" @click="toRecruit" style="position: relative;margin-bottom: 20px;">点我报名</JHButton>
          <JHLabel type="nano">线下摆摊</JHLabel>
          <div class="content">
            <div>朝晖: 2025年9月4日~9月5日</div>
            <div>地址：上塘河畔/综合楼下</div>
            <div style="margin-top: 20px">屏峰: 2025年9月4日</div>
            <div>地址：支干路</div>
          </div>

          <JHLabel type="nano">招新宣讲</JHLabel>
          <div class="content">
            <div>朝晖: 2025年9月4日晚六点半</div>
            <div>地址: 子良A354</div>
          </div>
          <JHLabel type="nano">招新群号</JHLabel>
          <div class="content">
            <div class="row"><span>招新大群</span><span>1051180494</span></div>
            <div class="row"><span>常务处</span><span>454924780</span></div>
            <div class="row"><span>小弘工作室</span><span>620939413</span></div>
            <div class="row"><span>产研-技术</span><span>1053493293</span></div>
            <div class="row"><span>产研-产品</span><span>553548291</span></div>
            <div class="row"><span>编辑工作室</span><span>1056431987</span></div>
            <div class="row"><span>视觉影像部</span><span>1056574464</span></div>
          </div>
    </div>
        <div class="qr">
          <JHLabel type="nano">最新动态</JHLabel>
          <div class="qr-base">
            <div class="qr-code">
              <img src="https://img.lonesome.cn/jhwl/home/photo/product/11.webp" />
              精弘网络
            </div>
            <div class="qr-code">
              <img src="https://qiuniu.phlin.cn/bucket/20250714225620675.webp" />
              精小弘在线
            </div>
          </div>
        </div>
      </div>
    </div>
  </JHCard>
  <Footer />
</template>

<style scoped lang="scss">
.base {
  display: grid;
}

.base.normal {
  grid-template-columns: 60% 40%;
  justify-content: center;
  grid-gap: 20px;
}

.base.middle {
  height: 2000px;
  grid-template-rows: 1100px 700px 100px;
}

.haibao {
  max-height: 750px;
  max-width: 80%;
  margin: auto;
}

.detail-base {
  display: flex;
  flex-direction: column;
  column-gap: 5px;
}

.introduce.normal {
  flex-direction: row;
  text-align: start;
  font-size: 18px;

  .content {
    position: relative;
    left: 50px;
    margin-bottom: 20px;
    .row {
      display: grid;
      grid-template-columns: 110px 100px;
      margin-bottom: 8px;
    }
  }
}

.introduce.middle,
.introduce.mini {
  text-align: center;
  font-size: 18px;
  margin-top: 40px;

  .content {
    margin-bottom: 20px;
      .row {
        display: grid;
        grid-template-columns: 100px 100px;
        margin: 0 10px 8px 30px;
    }
  }
}

.introduce.middle .small,
.introduce.mini .small {
  margin: auto;
}

.detail-base.middle,
.detail-base.mini {
  margin: auto;
}

.qr-base {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: auto;
  max-width: 300px;
  margin-top: 20px;
}

.qr-base img {
  width: 80px;
  height: 80px;
}

.qr-code {
  height: 100px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>
