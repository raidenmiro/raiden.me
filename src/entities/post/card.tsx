import { Badge } from '@shared/ui/badge'
import dayjs from 'dayjs'
import { For } from 'solid-js'

interface Props {
  previewUrl: string
  tags: Array<{ id: number; label: string }>
  author: string
  authorUrl: string
  title: string
  description: string
  createdAt: Date
}

export const Card = (props: Props) => {
  return (
    <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
      <a class="relative block group" href="#0">
        <div
          class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
          aria-hidden="true"></div>
        <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
          <img
            class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
            src="https://preview.cruip.com/open-pro/images/blog-post-01.jpg"
            width="540"
            height="303"
            alt="Blog post"
          />
        </figure>
      </a>
      <div>
        <header>
          <div class="mb-3">
            <ul class="flex flex-wrap text-xs font-medium -m-1">
              <For each={props.tags}>
                {(tag) => (
                  <li class="mr-1 last:mr-0">
                    <Badge label={tag.label} />
                  </li>
                )}
              </For>
            </ul>
          </div>
          <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
            <a
              class="hover:text-gray-100 transition duration-150 ease-in-out"
              href="#0">
              {props.title}
            </a>
          </h3>
        </header>
        <p class="text-lg text-gray-400 flex-grow">{props.description}</p>
        <footer class="flex items-center mt-4">
          <a href="#0">
            <img
              class="rounded-full flex-shrink-0 mr-4"
              src={props.authorUrl}
              width="40"
              height="40"
              alt="Author 04"
            />
          </a>
          <div>
            <a
              class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
              href="#0">
              {props.author}
            </a>
            <span class="text-gray-700"> - </span>
            <span class="text-gray-500">
              {dayjs(props.createdAt).format('DD/MM/YYYY')}
            </span>
          </div>
        </footer>
      </div>
    </article>
  )
}
