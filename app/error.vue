<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleClearError = () => {
  try {
    clearError({ redirect: '/' })
  } catch (error) {
    console.error('[Error Page] Failed to clear error:', error)
    window.location.href = '/'
  }
}
</script>

<template>
  <div>
    <PageTop />
    <JHCard title="页面出错了" type="large">
      <h1 class="error-code">{{ error.status || 500 }}</h1>
      <p class="error-message">
        {{ error.message || '发生了一个错误' }}
      </p>

      <DevOnly>
        <details v-if="error.stack" class="error-stack">
          <summary>查看错误堆栈</summary>
          <pre>{{ error.stack }}</pre>
        </details>
      </DevOnly>

      <div class="actions">
        <JHButton type="middle" @click="handleClearError">返回首页</JHButton>
        <JHButton type="middle" @click="useRouter().back()">
          返回上一页
        </JHButton>
      </div>
    </JHCard>
    <PageFooter />
  </div>
</template>

<style scoped lang="scss">
.error-code {
  font-size: 5rem;
  color: var(--primary-color);
  margin: 1rem 0;
}

.error-message {
  font-size: 1.25rem;
  color: var(--text-content);
  margin: 1rem 0 2rem;
}

.error-stack {
  margin: 2rem 0;
  text-align: left;

  summary {
    cursor: pointer;
    color: var(--accent-color);
    padding: 0.5rem;

    &:hover {
      color: var(--primary-color);
    }
  }

  pre {
    background: var(--card-bg-secondary);
    padding: 1rem;
    border-radius: var(--radius-md);
    overflow-x: auto;
    font-size: 0.875rem;
    color: var(--muted);
    margin-top: 0.5rem;
  }
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}
</style>
