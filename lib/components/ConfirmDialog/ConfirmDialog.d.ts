import * as React from 'react';
export interface ConfirmDialogProps {
    open: boolean;
    title: string | JSX.Element;
    content: string | JSX.Element;
    cancelButtonText?: string;
    confirmButtonText?: string;
    className?: string;
    onClose: () => void;
    onConfirm: () => void;
}
declare const ConfirmDialog: ({ open, title, content, cancelButtonText, confirmButtonText, className, onClose, onConfirm, }: ConfirmDialogProps) => React.JSX.Element;
export default ConfirmDialog;
