export const removeClasses = (node: HTMLElement) => {
  const classes = node.classList
  return classes.forEach((className) => node.classList.remove(className))
}

export function getWindowSize() {
  const { innerWidth, innerHeight } = window

  return {
    w: innerWidth,
    h: innerHeight,
  }
}

export const subscribeOnResize = (fn: (evt: UIEvent) => void) => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', (evt) => fn(evt))
  }
}
