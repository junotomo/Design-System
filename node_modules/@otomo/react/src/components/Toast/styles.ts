import * as Toast from "@radix-ui/react-toast";
import { styled } from "../../styles";

export const ToastContainer = styled(Toast.Root, {
    padding: '$5 $3',
    display: 'flex',
    flexDirection: 'column',
    background: '$gray800',
    border: 1,
    borderRadius: 6,
    width: '320px',
    gap: '$1',

    div: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    }
})

export const ToastTitle = styled(Toast.Title, {
    fontSize: '$xl',
    fontWeight: '$bold',
    color: '$white'
})

export const ToastDescription = styled(Toast.Description, {
    fontSize: '$sm',
    color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
    background: 'transparent',
    border: 'none',
    color: '$gray200',

    '&:hover': {
        cursor: 'pointer',
      color: '$gray100',
    },
})

export const ToastViewPort = styled(Toast.Viewport, {
    position: 'fixed',
    bottom: 0,
    right: 0,
    padding: '$6',
    margin: 0,
    listStyle: 'none',
    zIndex: 999999999,
  })