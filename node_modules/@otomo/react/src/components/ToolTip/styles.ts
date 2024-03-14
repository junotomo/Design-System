import * as Tooltip from '@radix-ui/react-tooltip';
import { styled } from '../../styles';

export const ToolTipContainer = styled(Tooltip.Root, {
})

export const ToolTipTrigger = styled(Tooltip.Trigger, {
    background: '$gray600',
    padding: '1rem 1.5rem',
    border: 'none',
    color: '$white',
    fontSize: '$md',
    margin: '0 auto'
})

export const ToolTipContent = styled(Tooltip.Content, {
    background: '$gray900',
    color: '$gray100',
    fontSize: '$sm',
    padding: '$3 $4',
})