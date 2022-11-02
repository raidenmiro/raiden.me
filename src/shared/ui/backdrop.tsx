import { theme } from '@features/theme/ui/model'
import { useStore } from '@nanostores/solid'
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur'
import {
  createPallette,
  createSphere,
  renderSpheres,
  toColor,
} from '@shared/lib/sphere-animations'
import { Application } from 'pixi.js'
import { createSignal, onCleanup, onMount } from 'solid-js'

interface Props {
  dynamic: boolean
  filter: {
    blur: number
    quality: number
    clamp: boolean
  }
  elements?: 'static' | 'random'
  'client:load': true
}

export const Backdrop = (props: Props) => {
  const currentTheme = useStore(theme.store)
  const [ref, setRef] = createSignal<HTMLCanvasElement | null>(null)

  onMount(() => {
    const root = ref()

    if (!isExistNode(root)) return

    const app = new Application({
      view: root,
      resizeTo: window,
      backgroundColor: toColor(
        currentTheme() === 'light' ? '#ffffff' : '#000000'
      ),
      resolution: window.devicePixelRatio || 1,
    })

    app.stage.filters = [
      new KawaseBlurFilter(
        props.filter.blur,
        props.filter.quality,
        props.filter.clamp
      ),
    ]

    const pallette = createPallette()
    const elements = Array.from({ length: 10 }, () => {
      return createSphere({
        color: pallette.random(),
        stay: props.elements === 'static',
      })
    })

    const paint = renderSpheres({
      container: app,
      elements,
    })

    paint.run({ dynamic: props.dynamic })

    onCleanup(() => app.destroy())
  })

  return <canvas ref={(element) => setRef(element)}></canvas>
}

const isExistNode = <T extends Element>(node: T | null): node is T => {
  return Boolean(node) && typeof window !== 'undefined'
}
