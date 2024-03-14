import { ToolTipContainer, ToolTipContent, ToolTipTrigger } from "./styles";
import * as Tooltip from '@radix-ui/react-tooltip';

export interface ToolTipProps {
    triggerText: string
    message: string
    delayDuration: number
}


export function ToolTip({triggerText, message, delayDuration}:ToolTipProps) {
    return(
        <Tooltip.Provider delayDuration={delayDuration}>
        <ToolTipContainer>
          <ToolTipTrigger asChild>
            <button>
                {triggerText}
            </button>
          </ToolTipTrigger>
          <Tooltip.Portal>
            <ToolTipContent>
            {message}
              <Tooltip.Arrow />
            </ToolTipContent>
          </Tooltip.Portal>
        </ToolTipContainer>
      </Tooltip.Provider>
    )
}

ToolTip.displayName = 'ToolTip'