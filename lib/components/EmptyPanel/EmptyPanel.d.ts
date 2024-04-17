import React from 'react';
export interface EmptyPanelProps {
    isLoading?: boolean;
    iconEmpty?: string;
    titleEmpty: string;
    contentEmpty?: any;
    children?: React.ReactNode;
    lengthData: number;
    height?: string;
}
declare const EmptyPanel: ({ isLoading, iconEmpty, titleEmpty, contentEmpty, children, lengthData, height, }: EmptyPanelProps) => React.JSX.Element;
export default EmptyPanel;
