/**
 * Composable for managing body scroll lock with reference counting
 * Ensures multiple components can lock/unlock scroll without conflicts
 * Each instance tracks its own lock state to prevent mismatched lock/unlock calls
 */

let lockCount = 0

export function useScrollLock() {
  let hasLock = false

  const lock = () => {
    if (typeof document === 'undefined') return
    if (hasLock) return // Already locked by this instance

    hasLock = true
    lockCount++
    if (lockCount === 1) {
      document.body.style.overflow = 'hidden'
    }
  }

  const unlock = () => {
    if (typeof document === 'undefined') return
    if (!hasLock) return // Not locked by this instance

    hasLock = false
    if (lockCount > 0) {
      lockCount--
    }
    if (lockCount === 0) {
      document.body.style.overflow = ''
    }
  }

  const isLocked = () => lockCount > 0

  return {
    lock,
    unlock,
    isLocked,
  }
}
