import React from 'react';
import { DialogProps } from '@mui/material';
interface ResponsiveModalProps extends DialogProps {
    children: React.ReactNode;
}
declare const ResponsiveModal: (props: ResponsiveModalProps) => React.JSX.Element;
export default ResponsiveModal;
