import * as React from 'react';
import { DialogProps } from '@mui/material';
interface ButtonActions {
    name: string;
    props: any;
    type?: string;
    handler: any;
}
interface ModalProps extends DialogProps {
    actions?: Array<ButtonActions>;
    children: React.ReactNode;
    disabledOutsiteClick?: boolean;
    title?: string;
    titleRender?: React.ReactNode;
    showCloseIcon?: boolean;
    hideHeader?: boolean;
    onClose: () => void;
    titleAlign?: string;
    isDividers?: boolean;
}
declare const Modal: ({ isDividers, titleAlign, actions, children, disabledOutsiteClick, title, showCloseIcon, hideHeader, titleRender, onClose, ...restProps }: ModalProps) => JSX.Element;
export default Modal;
