import type { JSX } from 'solid-js'

export const Blockquote = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <blockquote class="bg-blue-50 p-4">
        <span class="text-4xl text-blue-600 mb-2">“</span>
        {children}
      </blockquote>
    </>
  )
}
