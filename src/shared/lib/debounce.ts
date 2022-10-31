type Fn = (...args: unknown[]) => unknown // eslint-disable-next-line @typescript-eslint/no-explicit-any
type Timeout = any
type Optional<T> = T | null

export function debounce(fn: Fn, wait: number) {
  let timeout: Optional<Timeout> = null
  let debounceFn: Optional<Fn> = null

  const unsubscribe = () => {
    clearTimeout(timeout)

    timeout = null
    debounceFn = null
  }

  const flush = () => {
    const runFn = debounceFn
    unsubscribe()

    runFn?.()
  }

  return () => {
    timeout = setTimeout(() => {
      timeout = null
      debounceFn = fn

      const call = debounceFn
      debounceFn = null

      call()
    }, wait)

    return {
      flush,
      unsubscribe,
    }
  }
}
