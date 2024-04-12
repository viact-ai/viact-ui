import React from 'react';
import { InputBaseProps } from '@mui/material';
interface EditableFieldProps extends Omit<InputBaseProps, 'onChange'> {
    defaultValue: string;
    errorMessage?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    isRequired?: boolean;
    maxLength?: number;
    textDecoration?: string;
    textDecorationThickness?: number;
    variant?: 'outlined' | 'standard';
    onChange?: (value: string) => void;
    onSave?: (value: string) => void;
}
declare const EditableField: ({ defaultValue, errorMessage, inputRef, isRequired, maxLength, textDecoration, textDecorationThickness, variant, onChange, onSave, ...rest }: EditableFieldProps) => JSX.Element;
export default EditableField;
