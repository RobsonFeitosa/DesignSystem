import type { StoryObj, Meta } from '@storybook/react'

import {
  Box,
  SelectAdvanced,
  SelectAdvancedProps,
  Text,
} from '@lemonade-technologies-hub-ui/react'

export const optionsMock = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'watermelon', label: 'Watermelon' },
  { value: 'mango', label: 'Mango' },
  { value: 'grape', label: 'Grape' },
  { value: 'papaya', label: 'Papaya' },
  { value: 'cucumber', label: 'Cucumber' },
  { value: 'tomato', label: 'Tomato' },
  { value: 'potato', label: 'Potato' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'brunette', label: 'Brunette' },
  { value: 'bean', label: 'Bean' },
  { value: 'rice', label: 'Rice' },
  { value: 'salad', label: 'Salad' },
  { value: 'okra', label: 'Okra' },
  { value: 'basil', label: 'Basil' },
  { value: 'jackfruit', label: 'Jackfruit' },
]

export default {
  title: 'React/Form/SelectAdvanced',
  component: SelectAdvanced,
  args: {
    options: optionsMock,
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="div"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Options</Text>
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    onChange: {
      action: 'change',
    },
  },
} as Meta<SelectAdvancedProps>

export const Single: StoryObj<SelectAdvancedProps> = {
  args: {
    placeholder: 'Selecione',
  },
}

export const Small: StoryObj<SelectAdvancedProps> = {
  args: {
    placeholder: 'Selecione',
    size: 'sm',
  },
}

export const SingleError: StoryObj<SelectAdvancedProps> = {
  args: {
    error: 'errorru',
  },
}

export const RemoveIsClearable: StoryObj<SelectAdvancedProps> = {
  args: {
    isClearable: false,
  },
}

export const Multiple: StoryObj<SelectAdvancedProps> = {
  args: {
    isMulti: true,
    defaultValue: optionsMock[0],
    closeMenuOnSelect: false,
  },
}

export const MultipleError: StoryObj<SelectAdvancedProps> = {
  args: {
    isMulti: true,
    closeMenuOnSelect: false,
    error: 'errorru',
  },
}
