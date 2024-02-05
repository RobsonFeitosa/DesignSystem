import type { StoryObj, Meta } from '@storybook/react'

import {
  Button,
  Dialog,
  DialogProps,
  DialogRoot,
  DialogTrigger,
  DialogClose,
  Text,
} from '@lemonade-technologies-hub-ui/react'

export default {
  title: 'React/Data display/Dialog',
  component: Dialog,
  args: {
    mode: 'ligth',
    title: 'Titulo',
    children: (
      <div>
        <Text>Description</Text>
        <DialogClose>Close</DialogClose>
      </div>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <DialogRoot>
            <DialogTrigger asChild>
              <Button>Modal</Button>
            </DialogTrigger>

            {Story()}
          </DialogRoot>
        </div>
      )
    },
  ],
} as Meta<DialogProps>

export const Primary: StoryObj<DialogProps> = {}

export const Dark: StoryObj<DialogProps> = {
  args: {
    mode: 'dark',
    title: 'Modal dark',
  },
}

export const Rounded: StoryObj<DialogProps> = {
  args: {
    borderRadius: 10,
  },
}
