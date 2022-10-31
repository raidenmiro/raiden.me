import { KawaseBlurFilter } from '@pixi/filter-kawase-blur'
import {
  createSphere,
  getBound,
  renderSpheres,
} from '@shared/lib/sphere-animations'
import { Application } from 'pixi.js'
import { createSignal, onCleanup, onMount } from 'solid-js'

export const Backdrop = () => {
  const [ref, setRef] = createSignal<HTMLCanvasElement | null>(null)

  onMount(() => {
    const root = ref()

    if (!isExistNode(root)) return

    const app = new Application({
      view: root,
      resizeTo: window,
      backgroundAlpha: 0,
      resolution: window.devicePixelRatio || 1,
    })

    app.stage.filters = [new KawaseBlurFilter(30, 10, true)]

    const elements = Array.from({ length: 10 }, () => {
      return createSphere({
        color: 0x000000333,
      })
    })

    const paint = renderSpheres({
      container: app,
      bounds: getBound(),
      elements,
    })

    paint.run()

    onCleanup(() => app.destroy())
  })

  return <canvas ref={(element) => setRef(element)}></canvas>
}

const isExistNode = <T extends Element>(node: T | null): node is T => {
  return Boolean(node) && typeof window !== 'undefined'
}
