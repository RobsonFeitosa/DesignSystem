import * as Slider from '@radix-ui/react-slider'
import { styled } from '../../styles'

export const SliderRoot = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 200,
  height: 20,
})

export const SliderTrack = styled(Slider.Track, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: 3,
})

export const SliderRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: '$gray200',
  borderRadius: '9999px',
  height: '100%',
})

export const SliderThumb = styled(Slider.Thumb, {
  display: 'block',
  width: 18,
  height: 18,
  backgroundColor: '#ff9900',
  boxShadow: `0 2px 10px rgba(0, 0, 0, 0.2)`,
  borderRadius: 10,

  '&:hover': { backgroundColor: '#ff9900' },
  '&:focus': { outline: 'none', boxShadow: `0 0 0 4px  rgba(0, 0, 0, 0.2)` },
})
