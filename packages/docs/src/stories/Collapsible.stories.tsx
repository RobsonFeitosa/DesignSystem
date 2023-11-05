import type { StoryObj, Meta } from '@storybook/react'

import {
  Box,
  Collapsible,
  CollapsibleProps,
} from '@lemonade-technologies-hub-ui/react'
import { useState } from 'react'

export default {
  title: 'React/Data display/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story({
            args: {
              initOpen: open,
              label: 'Titulo',
              setOpen: () => setOpen(!open),
              children: (
                <div>
                  <div>conteudo</div>
                </div>
              ),
            },
          })}
        </Box>
      )
    },
  ],
  argTypes: {
    onChange: {
      action: 'change',
    },
  },
} as Meta<CollapsibleProps>

export const Primary: StoryObj<CollapsibleProps> = {}
