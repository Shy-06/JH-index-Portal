/**
 * Composable for managing body scroll lock with reference counting
 * Ensures multiple components can lock/unlock scroll without conflicts
 */

let lockCount = 0

export function useScrollLock() {
  const lock = () => {
    lockCount++
    if (lockCount === 1) {
      document.body.style.overflow = 'hidden'
    }
  }

  const unlock = () => {
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
