<template>
  <div class="contact-base" :class="pageStore.pageSize">
    <JHCard type="small">
      <div class="loading" :class="pageStore.pageSize">
        <div
          style="
            color: var(--primary-color);
            margin: 0;
            font-size: 2em;
            font-weight: bold;
          "
        >
          {{ useRuntimeConfig().public.lastUpdateYear }}
        </div>
        <div class="loading-bar-border">
          <div class="loading-bar" :style="{ left: loadingWidth + '%' }" />
        </div>
        <div style="color: var(--primary-color); font-size: 24px">
          Loading...
        </div>
      </div>
    </JHCard>

    <NuxtImg
      class="jh"
      :class="pageStore.pageSize"
      src="common/logo_red.webp"
      border="5"
      alt="精弘网络"
    />

    <JHCard type="small">
      <div class="contact-us" :class="pageStore.pageSize">
        <NuxtImg
          class="platform"
          src="ui/wechat.svg"
          alt="微信公众号"
          @mouseover="onMouseOver"
        />
        <NuxtImg
          v-show="isHovering"
          provider="wechatOpen"
          :src="useRuntimeConfig().public.contact.wechat.jxhzx"
          class="qrcode"
          alt="精小弘在线 微信二维码"
          @mouseout="onMouseOut"
        />
        <div style="width: 99%">
          <h2 v-if="pageStore.pageSize == 'middle'">联系我们 | 关注我们</h2>
          <template v-else>
            <h2>联系我们</h2>
            <h2>关注我们</h2>
          </template>
          <a href="mailto:jhwl@zjut.edu.cn">jhwl@zjut.edu.cn</a>
        </div>
        <NuxtImg
          class="platform"
          src="ui/LogoGitHub.svg"
          style="cursor: pointer"
          alt="GitHub"
          @click="toGithub"
        />
      </div>
    </JHCard>

    <JHCard type="small" class="join">
      <h2 class="join-content">精弘诚聘</h2>
      <JHButton
        :type="pageStore.pageSize == 'mini' ? 'mini' : 'middle'"
        @click="() => navigateTo('/join')"
        >加入我们
      </JHButton>
    </JHCard>
  </div>
</template>

<script setup lang="ts">
const pageStore = usePageStore()
const loadingWidth = ref(0)
const isHovering = ref(false)
function onMouseOver() {
  isHovering.value = true
}
function onMouseOut() {
  isHovering.value = false
}
function toGithub() {
  window.location.href = useRuntimeConfig().public.contact.github
}

let loadingBarTimer: number
onMounted(() => {
  loadingBarTimer = window.setInterval(() => {
    if (loadingWidth.value >= 0) {
      loadingWidth.value = -100
    } else {
      loadingWidth.value += 0.2
    }
  }, 10)
})
onUnmounted(() => {
  clearInterval(loadingBarTimer)
})
</script>

<style scoped lang="scss">
.contact-base {
  &.normal {
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: 25% 10% 35% 30%;
    grid-column-gap: 20px;
  }

  &.middle,
  &.mini {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 10px;
    align-items: center;
  }

  .jh {
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50%;
    border-color: white;
    box-shadow: var(--shadow-md);
  }
}

.contact-us {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  align-items: center;

  h2 {
    margin: 0;
  }

  img {
    margin: auto;

    &.qrcode {
      width: auto;
      height: 20%;
      position: absolute;
      z-index: 1;
    }
  }

  &.normal .platform {
    width: 80px;
    height: 80px;
  }

  &.middle .platform,
  &.mini .platform {
    width: 30px;
    height: 30px;
  }
}

.jh {
  &.mini {
    width: 80px;
    height: 80px;
  }
}

.join {
  align-items: center;

  &-content {
    margin: auto;
  }
}

.contact-base.mini .join-content {
  max-width: 2em;
}

.loading {
  height: 180px;
  display: flex;
  flex-direction: column;

  &.mini {
    height: 100px;
  }

  .loading-bar-border {
    width: 80%;
    height: 30px;
    border-radius: var(--radius-pill);
    overflow: hidden;
    border: 5px solid var(--primary-color);
    margin: 0 auto;
  }

  .loading-bar {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
  }

  img {
    border-radius: 0;
    width: 30%;
    margin: auto;
  }
}
</style>
