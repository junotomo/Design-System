import { Box, ToolTip, ToolTipProps } from '@otomo/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Popup/Tooltip',
    component: ToolTip,
    args: {
        triggerText: 'test btn',
        message: 'hellop there!!',
        delayDuration: 0
    },
    decorators: [
      (Story) => {
        return (
          <Box
            as="label"
            css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
          >
            {Story()}
          </Box>
        )
      },
    ],
  } as Meta<ToolTipProps>
  
  export const Primary: StoryObj<ToolTipProps> = {
    args: {  },
  }
  
