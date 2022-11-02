import { useStore } from '@nanostores/solid'

import { theme } from './model'

export const SwitchTheme = () => {
  const currentTheme = useStore(theme.store)

  return (
    <>
      <label for="themeSwitcher" class="sr-only" />
      <input
        type="checkbox"
        id="themeSwitcher"
        checked={currentTheme() === 'light'}
        onChange={theme.toggle}
      />
      <span></span>
    </>
  )
}
