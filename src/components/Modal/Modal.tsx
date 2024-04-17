import * as React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Typography,
} from '@mui/material'
import Close from '../../icons/Close'

interface ButtonActions {
  name: string
  props: any
  type?: string
  handler: any
}
export interface ModalProps extends DialogProps {
  actions?: Array<ButtonActions>
  children: React.ReactNode
  disabledOutsiteClick?: boolean
  title?: string
  titleRender?: React.ReactNode
  showCloseIcon?: boolean
  hideHeader?: boolean
  onClose: () => void
  titleAlign?: string
  isDividers?: boolean
}

const Modal = ({
  isDividers = true,
  titleAlign = 'left',
  actions,
  children,
  disabledOutsiteClick = true,
  title,
  showCloseIcon = true,
  hideHeader = false,
  titleRender,
  onClose,
  ...restProps
}: ModalProps): JSX.Element => {
  const handleClose = (event: any, reason: string) => {
    if (disabledOutsiteClick && reason === 'backdropClick') {
      return
    }

    if (onClose) {
      onClose()
    }
  }

  return (
    <Dialog
      aria-labelledby="customized-dialog"
      fullWidth
      maxWidth="md"
      scroll="paper"
      {...restProps}
      sx={{
        '& .model-close-icon': {
          cursor: 'pointer',
          position: 'absolute',
          top: 20,
          right: 20,
          '& path': {
            fill: '#333',
          },
        },
      }}
      onClose={handleClose}>
      {!hideHeader && (
        <DialogTitle
          sx={{
            fontSize: 18,
            fontWeight: 500,
            textAlign: titleAlign,
          }}>
          {titleRender ? (
            titleRender
          ) : (
            <Typography variant="h6">{title}</Typography>
          )}
        </DialogTitle>
      )}
      {showCloseIcon && (
        <Close
          className="model-close-icon"
          width="20"
          height="20"
          onClick={onClose}
          color="#828282"
        />
      )}
      <DialogContent dividers={isDividers}>{children}</DialogContent>
      {actions && actions.length > 0 && (
        <DialogActions>
          {actions.map(action => (
            <Button
              key={`action_${action.name}`}
              type={action.type || 'button'}
              {...action.props}
              onClick={action.handler}>
              {action.name}
            </Button>
          ))}
        </DialogActions>
      )}
    </Dialog>
  )
}

export default Modal
