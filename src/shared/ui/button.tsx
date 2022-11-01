export const Button = (props: {
  label: string
  variant: 'primary' | 'secondary'
}) => {
  return (
    <button
      classList={{
        'py-2 px-6 border-0 mr-3': true,
        'inline-flex focus:outline-none rounded text-lg': true,
        'text-white bg-indigo-500 hover:bg-indigo-600':
          props.variant === 'primary',
        'text-gray-700 bg-gray-100 hover:bg-gray-200':
          props.variant === 'secondary',
      }}>
      {props.label}
    </button>
  )
}
