<script lang="ts" setup>
const route = useRoute()
const pageStore = usePageStore()
const hide = ref(false)
const isAtTop = ref(true)
const mobileColumnMenuDisplay = ref(false)
const previousScrollPosition = ref(0)

// MARK: 滚动相关参数
const pageTopBufferSize = 300
const scrollReactThreshold = 25

watch(
  () => route.meta.pageNo,
  () => {
    updateScrollState()
  },
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  updateScrollState()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})

// MARK: 页面滚动处理
function updateScrollState() {
  const currentScrollPosition = Math.max(
    0,
    window.scrollY || window.pageYOffset,
  )
  isAtTop.value = currentScrollPosition < pageTopBufferSize
}

function handleScroll() {
  const currentScrollPosition = Math.max(
    0,
    window.scrollY || window.pageYOffset,
  )
  updateScrollState()
  const scrollDiff = Math.abs(
    currentScrollPosition - previousScrollPosition.value,
  )
  if (scrollDiff > scrollReactThreshold) {
    hide.value = currentScrollPosition > previousScrollPosition.value
  }
  previousScrollPosition.value = currentScrollPosition
}

function listBtnClicked() {
  mobileColumnMenuDisplay.value = !mobileColumnMenuDisplay.value
  if (mobileColumnMenuDisplay.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// MARK: 栏目配置项
const menuColumns = [
  { name: '首页', link: '/' },
  { name: '我们的故事', link: '/story' },
  { name: '我们的产品', link: '/product' },
  { name: '我们的部门', link: '/department' },
  { name: '我们的活动', link: '/activity' },
  { name: '加入我们', link: '/join' },
]
</script>

<template>
  <div
    :class="[
      'base',
      pageStore.pageSize,
      (!mobileColumnMenuDisplay || pageStore.pageSize === 'normal') &&
      isAtTop &&
      route.meta.pageNo === 0
        ? 'atCover'
        : 'notAtCover',
      !mobileColumnMenuDisplay && !isAtTop && hide ? 'hide' : '',
    ]"
    @touchmove.prevent
  >
    <router-link to="/" class="logo" :class="pageStore.pageSize">
      <NuxtImg
        src="common/logo.webp"
        alt="Logo"
        style="width: 100%; object-fit: contain"
      />
    </router-link>

    <template v-if="pageStore.pageSize === 'normal'">
      <div
        v-for="(l, index) in menuColumns"
        :key="l.link"
        class="link"
        :class="index === route.meta.pageNo ? 'select' : 'notSelect'"
      >
        <router-link :to="l.link">{{ l.name }}</router-link>
      </div>
    </template>
    <template v-else>
      <div
        class="listButton"
        :class="
          mobileColumnMenuDisplay
            ? 'mobileColumnMenuDisplay'
            : 'mobileColumnMenuHidden'
        "
        @click="listBtnClicked"
      />
      <Teleport to="#__nuxt">
        <Transition name="slide">
          <div
            v-show="mobileColumnMenuDisplay"
            class="list"
            :class="pageStore.pageSize"
          >
            <div
              v-for="(l, index) in menuColumns"
              :key="l.link"
              class="listItem"
              :class="index === route.meta.pageNo ? 'select' : 'notSelect'"
              @click="listBtnClicked"
            >
              <router-link :to="l.link">
                <div style="width: 100%">
                  {{ l.name }}
                </div>
              </router-link>
            </div>
          </div>
        </Transition>
      </Teleport>
    </template>
  </div>
</template>

<style lang="scss" scoped>
// MARK: 动画
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    opacity 0.4s ease;
  will-change: transform, opacity;
}

.slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

// MARK: 全局样式
* {
  font-family: 'song', sans-serif;
}

a {
  text-decoration: none;
  color: white;
  font-size: large;
}

// MARK: 背景状态
.atCover {
  background: transparent;
  transition: background linear 0.2s;
}

.notAtCover {
  background-color: var(--primary-color);
  transition: background linear 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

// MARK: 导航栏基础样式
.base {
  z-index: 4;
  display: grid;
  width: 100%;
  color: white;
  position: fixed;
  align-items: center;
  transition:
    top linear 0.4s,
    background linear 0.2s;
  top: 0;

  &.normal {
    height: 90px;
    grid-template-columns: 30% repeat(v-bind('menuColumns.length'), 1fr);
  }

  &.middle {
    height: 90px;
    grid-template-columns: 1fr 60px;
  }

  &.mini {
    height: 50px;
    grid-template-columns: 1fr 60px;
  }

  // 隐藏状态
  &.hide {
    top: -100px;
    transition:
      top linear 0.4s,
      background linear 0.2s;
  }
}

// MARK: Logo样式
.logo {
  &.normal {
    width: 200px;
    transform: scale(0.8);
  }

  &.middle {
    width: 200px;
    transform: scale(0.8);
  }

  &.mini {
    width: 120px;
    transform: scale(0.8);
  }
}

// MARK: 导航链接
.link {
  &.select {
    background-color: white;
    border-radius: 20px;
    padding: 5px;
    transition: background-color 0.5s;

    a {
      color: var(--primary-color);
    }

    &::after {
      display: block;
      content: '';
      width: 100%;
      position: relative;
      top: 20px;
      border-bottom: 3px solid white;
    }
  }

  &.notSelect a {
    color: white;
  }
}

// MARK: 列表按钮
.listButton {
  width: 40px;
  height: 40px;

  &.mobileColumnMenuDisplay {
    background: url('#{$cubeBaseURL}ui/close.svg') no-repeat center;
  }

  &.mobileColumnMenuHidden {
    background: url('#{$cubeBaseURL}ui/list.svg') no-repeat center;
  }
}

// MARK: 下拉列表
.list {
  width: 100%;
  height: 100vh;
  z-index: 3;
  position: fixed;
  background-color: var(--card-bg);
  align-items: center;
  justify-items: center;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  &.mini {
    top: 50px;
    height: calc(100vh - 50px);
  }

  &.middle {
    top: 90px;
    height: calc(100vh - 90px);
  }

  .listItem {
    width: 40%;
    margin: auto;
    margin-top: 20px;
    padding: 5px;
    border: 2px solid;
    border-radius: 15px;
    border-color: var(--primary-color);

    &.select {
      background-color: var(--primary-color);
      color: white;
    }

    &.notSelect {
      background-color: var(--card-bg);

      a {
        color: var(--primary-color);
      }
    }
  }
}
</style>
