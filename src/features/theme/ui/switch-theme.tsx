import { createSignal } from 'solid-js'

export type Theme = 'dark' | 'light'

const getSavedTheme = () => {
  if (typeof window.localStorage !== 'undefined') {
    return localStorage.getItem('current-theme') as Theme
  }

  return null
}

export const SwitchTheme = () => {
  const [currentTheme, choiceTheme] = createSignal<Theme | null>(
    getSavedTheme() ?? 'dark'
  )

  const domActions = (node: Element, classes = ['light, dark']) => {
    const passClassToNode = (className: string) => node.classList.add(className)
    classes.forEach((className) => node.classList.remove(className))

    return {
      dark: (theme: Theme) => passClassToNode(theme),
      light: (theme: Theme) => passClassToNode(theme),
    }
  }

  const injectTheme = (theme: Theme) => {
    const element = document.querySelector('html')

    if (element) {
      const actions = domActions(element)
      const variant = actions[theme]

      variant(theme)
    }
  }

  const syncWithStorage = (theme: Theme) => {
    if (typeof window.localStorage !== 'undefined') {
      window.localStorage.setItem('current-theme', theme)
    }
  }

  const saveTheme = (theme: Theme) => {
    injectTheme(theme)
    syncWithStorage(theme)

    choiceTheme(theme)
  }

  return (
    <>
      <label for="themeSwitcher" class="sr-only" />
      <input
        type="checkbox"
        id="themeSwitcher"
        checked={currentTheme() === 'light'}
        onChange={(evt) => {
          if (evt.currentTarget.checked) saveTheme('light')
          else saveTheme('dark')
        }}
      />
      <span></span>
    </>
  )
}
