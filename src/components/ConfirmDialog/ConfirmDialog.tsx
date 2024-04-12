import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import * as React from 'react'

export interface ConfirmDialogProps {
  open: boolean
  title: string | JSX.Element
  content: string | JSX.Element
  cancelButtonText?: string
  confirmButtonText?: string
  className?: string
  onClose: () => void
  onConfirm: () => void
}
const ConfirmDialog = ({
  open,
  title,
  content,
  cancelButtonText,
  confirmButtonText,
  className,
  onClose,
  onConfirm,
}: ConfirmDialogProps) => {
  return (
    <Dialog
      className={className}
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle sx={{ color: '#333333', fontSize: '1rem', fontWeight: 500 }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{ color: '#4f4f4f', fontWeight: 400, fontSize: '0.875rem' }}>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          className="cancel-btn"
          onClick={onClose}
          variant="outlined"
          color="primary">
          {cancelButtonText || 'Cancel'}
        </Button>
        <Button
          className="confirm-btn"
          onClick={onConfirm}
          autoFocus
          variant="contained"
          color="primary"
          disableElevation>
          {confirmButtonText || 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
