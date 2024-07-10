import React from 'react'
import { Dialog, DialogProps, Slide } from '@mui/material'
import { styled } from '@mui/system'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const DialogPaperMobile = styled('div')(({ theme }) => ({
  borderRadius: '16px 16px 0 0',
  margin: 0,
  position: 'fixed',
  bottom: 0,
  maxWidth: '100% !important',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      width: '0px',
    },
  },
}))

const DialogPaperDesktop = styled('div')(({ theme }) => ({
  borderRadius: 5,
  padding: theme.spacing(2),
  margin: theme.spacing(1),
}))

const OverlayMobile = styled('div')({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
})

const OverlayDesktop = styled('div')({
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
})

interface ResponsiveModalProps extends DialogProps {
  children: React.ReactNode
}

const ResponsiveModal = (props: ResponsiveModalProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      PaperComponent={isMobile ? DialogPaperMobile : DialogPaperDesktop}
      BackdropProps={{
        component: isMobile ? OverlayMobile : OverlayDesktop,
      }}
      {...props}>
      {props.children}
    </Dialog>
  )
}

export default ResponsiveModal
