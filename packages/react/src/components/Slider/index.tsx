import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from './styles'

export interface SliderProps {
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
