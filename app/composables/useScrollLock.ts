import { onScopeDispose } from 'vue'

const noop = () => {}
const falseFn = () => false
const SSR_FALLBACK = Object.freeze({
  lock: noop,
  unlock: noop,
  isLocked: falseFn,
}) as {
  lock: () => void
  unlock: () => void
  isLocked: () => boolean
}

/** 全局滚动锁计数器，支持多处叠加锁定 */
let lockCount = 0

/**
 * 页面滚动锁工具：
 * - lock(): 禁止滚动（叠加计数）
 * - unlock(): 解除滚动（计数归零时恢复）
 * - isLocked(): 是否存在任意锁
 */
export function useScrollLock() {
  if (!import.meta.client) {
    return SSR_FALLBACK
  }

  let hasLock = false

  const lock = () => {
    if (hasLock) return
    hasLock = true
    lockCount++
    if (lockCount === 1) document.body.style.overflow = 'hidden'
  }

  const unlock = () => {
    if (!hasLock) return
    hasLock = false
    lockCount = Math.max(0, lockCount - 1)
    if (lockCount === 0) document.body.style.overflow = ''
  }

  const isLocked = () => lockCount > 0

  onScopeDispose(() => {
    if (hasLock) unlock()
  })

  return {
    lock,
    unlock,
    isLocked,
  }
}
