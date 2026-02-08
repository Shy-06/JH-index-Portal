/** 全局滚动锁计数器，支持多处叠加锁定 */
let lockCount = 0

/**
 * 页面滚动锁工具：
 * - lock(): 禁止滚动（叠加计数）
 * - unlock(): 解除滚动（计数归零时恢复）
 * - isLocked(): 是否存在任意锁
 */
export function useScrollLock() {
  let hasLock = false

  const lock = () => {
    if (typeof document === 'undefined') return // SSR/非浏览器环境直接跳过
    if (hasLock) return
    hasLock = true
    lockCount++
    if (lockCount) document.body.style.overflow = 'hidden' // 任意锁生效即禁滚
  }

  const unlock = () => {
    if (typeof document === 'undefined') return // SSR/非浏览器环境直接跳过
    if (!hasLock) return
    hasLock = false
    if (lockCount > 0) lockCount--
    if (lockCount === 0) document.body.style.overflow = '' // 归零后恢复滚动
  }

  const isLocked = () => lockCount > 0

  return {
    lock,
    unlock,
    isLocked,
  }
}
