import { ComponentProps } from 'react'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from './styles'

export interface SliderProps extends ComponentProps<typeof SliderRoot> {
  defaultValue: number[]
  max: number
  step: number
  hasFullOut?: boolean
  labels?: string[]
}

export function Slider(props: SliderProps) {
  return (
    <SliderRoot {...props}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      {props.defaultValue.map((item: number, index) => (
        <SliderThumb
          key={item}
          aria-label={props.labels ? props.labels[index] : 'volume'}
        />
      ))}
    </SliderRoot>
  )
}

Slider.displayName = 'Slider'
