export const removeClasses = (node: HTMLElement) => {
  const classes = node.classList
  return classes.forEach((className) => node.classList.remove(className))
}
