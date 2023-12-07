import { ComponentProps } from 'react'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from './styles'

export interface SliderProps extends ComponentProps<typeof SliderRoot> {
  defaultValue: number[]
  max: number
  step: number
}

export function Slider(props: SliderProps) {
  return (
    <SliderRoot {...props}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb aria-label="Volume" />
    </SliderRoot>
  )
}

Slider.displayName = 'Slider'
