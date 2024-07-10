import * as React from 'react';
export interface YearMonthPickerProps {
    value?: Date;
    inputRender?: React.ReactNode;
    fullWidth?: boolean;
}
export default function YearMonthPicker({ value, inputRender, fullWidth, }: YearMonthPickerProps): React.JSX.Element;
