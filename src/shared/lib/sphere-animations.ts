// https://georgefrancis.dev/writing/create-a-generative-landing-page-and-webgl-powered-background
import hsl from 'hsl-to-hex'
import { Application, Graphics } from 'pixi.js'
import { createNoise2D } from 'simplex-noise'

import { getWindowSize } from './dom'
import { generate } from './generate'

export type Sphere = ReturnType<typeof createSphere>

export const createSphere = (config: { color: number; stay?: boolean }) => {
  const { h } = getWindowSize()
  const { color, stay = false } = config

  const bound = getBound()
  const state = {
    fill: color,
    radius: generate.random(h / 6, h / 3),
    xOff: stay ? 0 : generate.random(0, 1000),
    yOff: stay ? 0 : generate.random(0, 1000),
    scale: 1,
    inc: 0.002,
    graphics: new Graphics(),
    x: stay ? 0 : generate.random(bound.x.min, bound.x.max),
    y: stay ? 0 : generate.random(bound.y.min, bound.y.max),
    bound,
  }

  state.graphics.alpha = 0.825

  return state
}

export type Pallette = ReturnType<typeof createPallette>

export const createPallette = () => {
  const state = {
    hue: Math.abs(generate.random(220, 360)),
    saturation: 95,
    lightness: 50,
  }

  const complimentaryHue1 = state.hue + 30
  const complimentaryHue2 = state.hue + 60

  const baseColor = hsl(state.hue, state.saturation, state.lightness)

  const complimentaryColor1 = hsl(
    complimentaryHue1,
    state.saturation,
    state.lightness
  )
  const complimentaryColor2 = hsl(
    complimentaryHue2,
    state.saturation,
    state.lightness
  )

  const colorChoices = [baseColor, complimentaryColor1, complimentaryColor2]

  return {
    random: () => {
      const length = colorChoices.length

      return toColor(colorChoices[Math.floor(Math.random() * length)])
    },
  }
}

export type Bound = ReturnType<typeof getBound>
export type Position = 'left' | 'right' | 'bottom' | 'top' | 'center'

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
}) => {
  const { elements, container } = config

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

    sphere.x = generate.map(
      xNoise,
      -1,
      1,
      sphere.bound.x.min,
      sphere.bound.x.max
    )
    sphere.y = generate.map(
      yNoise,
      -1,
      1,
      sphere.bound.y.min,
      sphere.bound.y.max
    )

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
        container.ticker.add(() => step())
      } else {
        step()
      }
    },
  }
}

export const toColor = (color: string) => {
  return Number(color.replace('#', '0x000000333'))
}
