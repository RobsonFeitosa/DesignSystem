import type { StoryObj, Meta } from '@storybook/react'

import {
  TextInputMask,
  TextInputMaskProps,
} from '@lemonade-technologies-hub-ui/react'

export default {
  title: 'React/Form/Text Input Mask',
  component: TextInputMask,
  args: {},
  tags: ['autodocs'],
} as Meta<TextInputMaskProps>

export const MaskCep: StoryObj<TextInputMaskProps> = {
  args: {
    mask: '99999-999',
    placeholder: 'Mascara cep',
  },
}
