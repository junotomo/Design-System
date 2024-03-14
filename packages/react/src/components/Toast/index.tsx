import * as Toast from '@radix-ui/react-toast';
import { ToastClose, ToastContainer, ToastDescription, ToastTitle, ToastViewPort } from './styles';
import { X } from 'phosphor-react';
import { ComponentProps, useEffect, useState } from 'react';

export interface ToastingProps extends ComponentProps<typeof Toast.Root> {
  title: string
  content: string,
  duration:number
}
export function Toasting({open, duration, onOpenChange, title, content, ...props}:ToastingProps) {

    return (
        <Toast.Provider>
          <ToastContainer
            open={open}
            onOpenChange={onOpenChange}
            defaultOpen={true}
            duration={duration}
            {...props}
          >
            <div>
              <ToastTitle>
                  {title}
              </ToastTitle>
              <ToastClose asChild>
                <X size={20}/>
              </ToastClose>
            </div>

  
            <ToastDescription>
              {content}
            </ToastDescription>

             
          </ToastContainer>
    
        <ToastViewPort/>
      </Toast.Provider>
    )
}

Toasting.displayName = 'Toast'