<script setup lang="ts">
const pageStore = usePageStore()

const platforms = [
  { icon: '📱', name: '微信服务号' },
  { icon: '💬', name: '精小弘在线' },
  { icon: '📲', name: '小程序' },
  { icon: '📧', name: '邮件系统' },
  { icon: '📺', name: 'B站' },
  { icon: '🎬', name: '直播' },
]

const campuses = [
  { name: '朝晖', icon: '🏫' },
  { name: '屏峰', icon: '🏫' },
  { name: '莫干山', icon: '🏫' },
]
</script>

<template>
  <!-- For normal (desktop) view: single panel showing all info -->
  <div v-if="pageStore.pageSize == 'normal'" class="mission-visual">
    <div class="visual-header">
      <div class="header-title">三校区共同建制</div>
    </div>
    <div class="campus-display">
      <div v-for="campus in campuses" :key="campus.name" class="campus-badge">
        <span class="campus-icon">{{ campus.icon }}</span>
        <span class="campus-text">{{ campus.name }}</span>
      </div>
    </div>
    <div class="divider"></div>
    <div class="visual-header">
      <div class="header-title">运营维护平台</div>
    </div>
    <div class="platform-display">
      <div
        v-for="(platform, idx) in platforms"
        :key="idx"
        class="platform-badge"
      >
        <span class="platform-icon">{{ platform.icon }}</span>
        <span class="platform-text">{{ platform.name }}</span>
      </div>
    </div>
  </div>

  <!-- For middle/mini view: 4 compact cards -->
  <div v-else class="mission-cards" :class="pageStore.pageSize">
    <div class="mission-card">
      <div class="card-title">三校区</div>
      <div class="card-icons">
        <span v-for="campus in campuses" :key="campus.name">{{
          campus.icon
        }}</span>
      </div>
    </div>
    <div class="mission-card">
      <div class="card-title">微信平台</div>
      <div class="card-icons">
        <span>📱</span>
        <span>💬</span>
        <span>📲</span>
      </div>
    </div>
    <div class="mission-card">
      <div class="card-title">网络服务</div>
      <div class="card-icons">
        <span>📧</span>
      </div>
    </div>
    <div class="mission-card">
      <div class="card-title">媒体平台</div>
      <div class="card-icons">
        <span>📺</span>
        <span>🎬</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Desktop view - single large visual panel
.mission-visual {
  width: 100%;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: 30px 25px;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.visual-header {
  text-align: center;

  .header-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-color);
    padding-bottom: 8px;
    border-bottom: 2px solid var(--secondary-color);
    display: inline-block;
  }
}

.campus-display {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 15px 0;
}

.campus-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);

  .campus-icon {
    font-size: 32px;
  }

  .campus-text {
    font-size: 15px;
    font-weight: 500;
    color: var(--text-title);
  }
}

.divider {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--secondary-color),
    transparent
  );
  margin: 10px 0;
}

.platform-display {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 10px 0;
}

.platform-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 10px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);

  .platform-icon {
    font-size: 28px;
  }

  .platform-text {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-title);
    text-align: center;
  }
}

// Mobile/Tablet view - 4 compact cards matching original layout
.mission-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;

  &.middle {
    gap: 15px;
  }

  &.mini {
    gap: 8px;
  }
}

.mission-card {
  background: var(--card-bg);
  border-radius: var(--radius-md);
  padding: 15px 10px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;

  .card-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--primary-color);
    line-height: 1.2;
  }

  .card-icons {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;

    span {
      font-size: 20px;
    }
  }

  .mission-cards.mini & {
    padding: 12px 8px;
    gap: 8px;

    .card-title {
      font-size: 11px;
    }

    .card-icons span {
      font-size: 18px;
    }
  }
}
</style>
