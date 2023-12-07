import type { StoryObj, Meta } from '@storybook/react'

import {
  Box,
  Select,
  SelectProps,
  Text,
} from '@lemonade-technologies-hub-ui/react'

export default {
  title: 'React/Form/Select',
  component: Select,
  args: {
    placeholder: 'Selecione um item',
  },
  tags: ['autodocs'],
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {
  args: {},
}
