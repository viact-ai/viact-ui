import * as React from 'react';
import { SelectChangeEvent } from '@mui/material';
export interface SelectBoxProps {
    value: string | number;
    placeholder?: string;
    options?: [{
        label: string;
        value: string;
    }];
    onChange: (event: SelectChangeEvent) => void;
}
declare const SelectBox: ({ value, options, placeholder, onChange, }: SelectBoxProps) => React.JSX.Element;
export default SelectBox;
