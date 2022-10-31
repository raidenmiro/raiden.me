import hsl from 'hsl-to-hex'
import { Application, Graphics } from 'pixi.js'
import { createNoise2D } from 'simplex-noise'

import { getWindowSize } from './dom'
import { generate } from './generate'

export type Sphere = ReturnType<typeof createSphere>

export const createSphere = (config: { color: number }) => {
  const state = {
    fill: config.color,
    radius: 300,
    xOff: 0,
    yOff: 0,
    scale: 1,
    inc: 0.002,
    x: 0,
    y: 0,
    graphics: new Graphics(),
  }

  state.graphics.alpha = 0.825

  return state
}

export type Pallette = ReturnType<typeof createPallette>

export const createPallette = () => {
  return {
    random: () => {},
    toHex: (color: { hue: number; saturation: number; luminosity: number }) => {
      return hsl(color.hue, color.saturation, color.luminosity)
    },
  }
}

export type Bound = ReturnType<typeof getBound>

export const getBound = () => {
  const { w, h } = getWindowSize()

  const maxDist = w < 1000 ? w / 3 : w / 5

  const originX = w / 1.25
  const originY = w < 1000 ? h : h / 1.375

  return {
    x: {
      min: originX - maxDist,
      max: originX + maxDist,
    },
    y: {
      min: originY - maxDist,
      max: originY + maxDist,
    },
  }
}

export const renderSpheres = (config: {
  container: Application
  elements: Sphere[]
  bounds: Bound
}) => {
  const { elements, container, bounds } = config

  const render = (sphere: Sphere) => {
    sphere.graphics.x = sphere.x
    sphere.graphics.y = sphere.y
    sphere.graphics.scale.set(sphere.scale)

    sphere.graphics.clear()

    sphere.graphics.beginFill(sphere.fill)
    sphere.graphics.drawCircle(0, 0, sphere.radius)
    sphere.graphics.endFill()
  }

  const noise2D = createNoise2D()

  const update = (sphere: Sphere) => {
    const xNoise = noise2D(sphere.xOff, sphere.xOff)
    const yNoise = noise2D(sphere.yOff, sphere.yOff)
    const scaleNoise = noise2D(sphere.xOff, sphere.yOff)

    sphere.x = generate.map(xNoise, -1, 1, bounds.x.min, bounds.x.max)
    sphere.y = generate.map(yNoise, -1, 1, bounds.y.min, bounds.y.max)

    sphere.scale = generate.map(scaleNoise, -1, 1, 0.5, 1)

    sphere.xOff += sphere.inc
    sphere.yOff += sphere.inc
  }

  for (const element of elements) {
    container.stage.addChild(element.graphics)
  }

  return {
    run({ dynamic = false }: { dynamic?: boolean }) {
      const step = () => {
        elements.forEach((sphere) => {
          if (dynamic) {
            update(sphere)
          }
          render(sphere)
        })
      }

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        requestIdleCallback(() => {
          container.ticker.add(() => step())
        })
      } else {
        requestIdleCallback(() => {
          step()
        })
      }
    },
  }
}

export const toColor = (color: string) => {
  return Number(color.replace('#', '0x000000333'))
}
