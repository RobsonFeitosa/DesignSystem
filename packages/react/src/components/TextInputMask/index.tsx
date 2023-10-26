import { Props } from 'react-input-mask'
import { ErrorContainer, TextInputContainer } from '../TextInput/styles'
import { IconProps, WarningCircle } from 'phosphor-react'
import { IconBaseProps } from 'react-icons'
import { InputMask } from './styles'

export interface TextInputMaskProps extends Props {
  mask: string
  error?: string
  startIcon?: React.ComponentType<IconProps | IconBaseProps>
}

export const TextInputMask = ({
  startIcon: StartIcon,
  error,
  ...props
}: TextInputMaskProps) => {
  return (
    <TextInputContainer error={!!error}>
      {StartIcon && <StartIcon />}

      <InputMask {...props} />

      {error && (
        <ErrorContainer title={error}>
          <WarningCircle color="#f91818" size={20} />
        </ErrorContainer>
      )}
    </TextInputContainer>
  )
}

TextInputMask.displayName = 'TextInputMask'
