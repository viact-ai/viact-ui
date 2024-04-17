import React from 'react';
import { BoxProps } from '@mui/system';
export interface ComponentWithLoadingProps extends BoxProps {
    children: React.ReactNode | JSX.Element;
    color?: string;
    isLoading: boolean;
    labelColor?: string;
    loadingComponent?: React.ReactNode | JSX.Element;
    showLoadingLabel?: boolean;
    size?: number | string;
}
declare const ComponentWithLoading: ({ children, color, isLoading, labelColor, loadingComponent, showLoadingLabel, size, ...rest }: ComponentWithLoadingProps) => JSX.Element;
export default ComponentWithLoading;
