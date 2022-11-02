import clsx from 'clsx'

export interface BadgeProps {
  label: string
  className?: string
  variant?: 'primary' | 'secondary'
}

export const Badge = (props: BadgeProps) => {
  const variant = {
    primary: 'bg-purple-600 hover:bg-purple-700',
    secondary: 'bg-blue-500 hover:bg-blue-600',
  }

  return (
    <span
      class={clsx(
        props.className,
        variant[props.variant ?? 'primary'],
        'inline-flex text-center text-gray-100 py-1 px-3 rounded-full transition duration-150 ease-in-out'
      )}>
      {props.label}
    </span>
  )
}
