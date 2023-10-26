import { Props } from 'react-input-mask'
import { ErrorContainer, TextInputContainer } from '../TextInput/styles'
import { IconProps, WarningCircle } from 'phosphor-react'
import { IconBaseProps } from 'react-icons'
import { InputMask } from './styles'
import { ElementRef, forwardRef } from 'react'

export interface TextInputMaskProps extends Props {
  mask: string
  error?: string
  startIcon?: React.ComponentType<IconProps | IconBaseProps>
}

export const TextInputMask = forwardRef<
  ElementRef<typeof InputMask>,
  TextInputMaskProps
>(({ startIcon: StartIcon, error, ...props }: TextInputMaskProps, ref) => {
  return (
    <TextInputContainer error={!!error}>
      {StartIcon && <StartIcon />}

      <InputMask ref={ref} {...props} />

      {error && (
        <ErrorContainer title={error}>
          <WarningCircle color="#f91818" size={20} />
        </ErrorContainer>
      )}
    </TextInputContainer>
  )
})

TextInputMask.displayName = 'TextInputMask'
