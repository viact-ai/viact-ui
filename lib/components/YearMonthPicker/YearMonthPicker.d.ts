import * as React from 'react';
export interface YearMonthPickerProps {
    value?: Date;
    inputRender?: React.ReactNode;
    fullWidth?: boolean;
    onChange?: (value: Date) => void;
}
export default function YearMonthPicker({ value, inputRender, fullWidth, onChange, }: YearMonthPickerProps): React.JSX.Element;
