<script setup lang="ts">
interface Platform {
  name: string
  icon: string
  description: string
  id: string
}

const platforms: Platform[] = [
  {
    id: 'wechat-official',
    name: '精弘网络服务号',
    icon: '📱',
    description: '浙江工业大学精弘网络微信服务号',
  },
  {
    id: 'wechat-jxh',
    name: '精小弘服务号',
    icon: '💬',
    description: '精小弘在线微信服务号',
  },
  {
    id: 'wechat-miniprogram',
    name: '小程序',
    icon: '📲',
    description: '微精弘微信小程序',
  },
  {
    id: 'email',
    name: '邮件系统',
    icon: '📧',
    description: 'https://mail.zjut.edu.cn/',
  },
  {
    id: 'bilibili',
    name: 'B站账号',
    icon: '📺',
    description: '浙工大精弘网络b站账号',
  },
  {
    id: 'live',
    name: '精弘直播',
    icon: '🎬',
    description: '精弘直播平台',
  },
]

const campuses = ['朝晖', '屏峰', '莫干山']

const pageStore = usePageStore()
</script>

<template>
  <div class="mission-content" :class="pageStore.pageSize">
    <div class="campus-section">
      <h3>三校区共同建制</h3>
      <div class="campus-list">
        <div v-for="campus in campuses" :key="campus" class="campus-item">
          <div class="campus-icon">🏫</div>
          <div class="campus-name">{{ campus }}</div>
        </div>
      </div>
    </div>

    <div class="platform-section">
      <h3>运营和维护平台</h3>
      <div class="platform-grid" :class="pageStore.pageSize">
        <div
          v-for="platform in platforms"
          :key="platform.id"
          class="platform-card"
          :class="pageStore.pageSize"
        >
          <div class="platform-icon">{{ platform.icon }}</div>
          <div class="platform-info">
            <div class="platform-name">{{ platform.name }}</div>
            <div class="platform-description">{{ platform.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mission-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;

  &.mini {
    gap: 30px;
    padding: 10px 0;
  }
}

.campus-section {
  text-align: center;

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-title);
    margin-bottom: 20px;
    border-bottom: 3px solid var(--secondary-color);
    padding-bottom: 10px;
    display: inline-block;
    min-width: 300px;
  }
}

.campus-list {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.campus-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  min-width: 120px;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-xl);
    }
  }

  .campus-icon {
    font-size: 36px;
  }

  .campus-name {
    font-size: 20px;
    font-weight: 500;
    color: var(--text-title);
  }
}

.platform-section {
  text-align: center;

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-title);
    margin-bottom: 30px;
    border-bottom: 3px solid var(--secondary-color);
    padding-bottom: 10px;
    display: inline-block;
    min-width: 300px;
  }
}

.platform-grid {
  display: grid;
  gap: 20px;
  margin-top: 20px;

  &.normal {
    grid-template-columns: repeat(3, 1fr);
  }

  &.middle {
    grid-template-columns: repeat(2, 1fr);
  }

  &.mini {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

.platform-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  text-align: left;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
    }
  }

  &.mini {
    padding: 15px;
    gap: 12px;
  }

  .platform-icon {
    font-size: 32px;
    flex-shrink: 0;
  }

  .platform-info {
    flex: 1;
    min-width: 0;
  }

  .platform-name {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 5px;
  }

  .platform-description {
    font-size: 14px;
    color: var(--text-content);
    word-break: break-word;
    line-height: 1.4;
  }

  &.mini .platform-icon {
    font-size: 28px;
  }

  &.mini .platform-name {
    font-size: 14px;
  }

  &.mini .platform-description {
    font-size: 12px;
  }
}
</style>
