import { Button, Toasting, ToastingProps } from '@otomo/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'


export default {
    title: 'Popup/ Toasting',
    component: Toasting,
    args: {
        title: 'test btn',
        content: 'hellop there!!',
        duration: 3000,
    },
    decorators: [
        (_, { allArgs }) => {
            const [open, setOpen] = useState(false)
      
            const ToggleToast = (newState: boolean) => {
              setOpen(newState)
              console.log(open)
            }
        return (
         <>
            <Button children="Open Toast" variant="primary" size="sm" onClick={() => ToggleToast(true)}>

            </Button>
            <Toasting {...allArgs} open={open} onOpenChange={ToggleToast} />
            </>
        )
      },
    ],
  } as Meta<ToastingProps>
  
  export const Default: StoryObj<ToastingProps> = {
    args: {  },
  }
  
