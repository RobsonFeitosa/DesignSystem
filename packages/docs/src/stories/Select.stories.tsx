import type { StoryObj, Meta } from '@storybook/react'

import { Box, Select, SelectProps, Text } from '@lemonadetechnologies-ui/react'

export default {
  title: 'React/Form/Select',
  component: Select,
  args: {},
  tags: ['autodocs'],
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {
  args: {},
}