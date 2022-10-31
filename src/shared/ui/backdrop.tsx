import { KawaseBlurFilter } from '@pixi/filter-kawase-blur'
import {
  createPallette,
  createSphere,
  getBound,
  renderSpheres,
  toColor,
} from '@shared/lib/sphere-animations'
import { storage } from '@shared/lib/storage'
import { Application } from 'pixi.js'
import { createSignal, onCleanup, onMount } from 'solid-js'

export const Backdrop = () => {
  const [ref, setRef] = createSignal<HTMLCanvasElement | null>(null)
  const theme = () => storage.get('current-theme')

  onMount(() => {
    const root = ref()

    if (!isExistNode(root)) return

    const app = new Application({
      view: root,
      resizeTo: window,
      backgroundColor: toColor(theme() === 'light' ? '#ffffff' : '#000000'),
      resolution: window.devicePixelRatio || 1,
    })

    app.stage.filters = [new KawaseBlurFilter(30, 10, true)]

    const pallette = createPallette()
    const elements = Array.from({ length: 10 }, () => {
      return createSphere({
        color: pallette.random(),
      })
    })

    const paint = renderSpheres({
      container: app,
      bounds: getBound(),
      elements,
    })

    paint.run({ dynamic: true })

    onCleanup(() => app.destroy())
  })

  return <canvas ref={(element) => setRef(element)}></canvas>
}

const isExistNode = <T extends Element>(node: T | null): node is T => {
  return Boolean(node) && typeof window !== 'undefined'
}
