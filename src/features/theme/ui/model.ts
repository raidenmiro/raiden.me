import { persistentAtom } from '@nanostores/persistent'
import { config } from '@shared/config/constance'
import { action } from 'nanostores'

export type Theme = 'dark' | 'light'

const store = persistentAtom<Theme>(config.theme, 'dark', {
  encode: JSON.stringify,
  decode: (value) => {
    const theme = JSON.parse(value)

    if (theme == null) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return isDark ? 'dark' : 'light'
    }

    return theme
  },
})

const choice = (theme: Theme) => store.set(theme)
const toggle = action(store, 'toggle', (store) => {
  store.set(store.get() === 'dark' ? 'light' : 'dark')
})

export const theme = { store, choice, toggle }
