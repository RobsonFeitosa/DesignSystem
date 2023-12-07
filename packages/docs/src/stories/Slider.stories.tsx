import type { StoryObj, Meta } from '@storybook/react'

import { Slider, SliderProps } from '@lemonade-technologies-hub-ui/react'

export default {
  title: 'React/Form/Slider',
  component: Slider,
  args: {
    defaultValue: [50],
    max: 4500,
    step: 1,
    onValueChange: (data: any) => console.log(data),
    // onChange: (data: any) => console.log(data),
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <form>{Story()}</form>
        </div>
      )
    },
  ],
  argTypes: {
    onChange: {
      action: 'change',
    },
  },
} as Meta<SliderProps>

export const Primary: StoryObj<SliderProps> = {}
