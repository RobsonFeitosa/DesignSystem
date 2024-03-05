import type { StoryObj, Meta } from '@storybook/react'

import { Select, SelectProps } from '@lemonade-technologies-hub-ui/react'
import { optionsMock } from './SelectAdvanced.stories'

export default {
  title: 'React/Form/Select',
  component: Select,
  args: {
    placeholder: 'Todas as categorias',
    options: optionsMock,
  },
  tags: ['autodocs'],
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {
  args: {},
}

export const Clean: StoryObj<SelectProps> = {
  args: {
    isClean: true,
    placeholder: 'Todas as categorias',
    title: 'Todas as categorias',
  },
}
