import ReactInputMask from 'react-input-mask'
import { styled } from '../../styles'

export const TextInputContainer = styled('div', {})

export const InputMask = styled(ReactInputMask, {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray500',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray300',
  },
})
