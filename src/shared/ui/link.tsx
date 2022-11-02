import clsx from 'clsx'
import { splitProps } from 'solid-js'
import type { JSX } from 'solid-js/jsx-runtime'

export interface Props extends JSX.HTMLAttributes<HTMLAnchorElement> {
  effect?: 'underline' | 'default'
  gradient?: 'primary'
  label: string
  className?: string
}

export const Link = (_props: Props) => {
  const [props, attributes] = splitProps(_props, [
    'effect',
    'label',
    'className',
    'gradient',
  ])

  const gradientClasses = {
    primary:
      'after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:hover:w-full',
  }

  const effectClasses = {
    'relative after:content-[""] after:absolute after:inset-x-0 after:bottom-0 after:m-auto after:h-1 after:w-0':
      props.effect === 'underline',
  }

  return (
    <a
      {...attributes}
      class={clsx(
        props.className,
        effectClasses,
        gradientClasses[props.gradient ?? 'primary']
      )}>
      {props.label}
    </a>
  )
}
