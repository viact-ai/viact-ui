import React__default, { useState, useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Box, Typography, ClickAwayListener, FormControl, InputAdornment, OutlinedInput, Input } from '@mui/material';

const EditableField = ({ defaultValue, errorMessage, inputRef, isRequired, maxLength, textDecoration, textDecorationThickness, variant = 'standard', onChange, onSave, ...rest }) => {
    const [value, setValue] = useState(defaultValue);
    const [isValid, setIsValid] = useState(true);
    const [isModify, setIsModify] = useState(false);
    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);
    const handleChange = (event) => {
        const isError = !event.target.value && isRequired;
        if (onChange) {
            onChange(value);
        }
        setIsValid(!isError);
        setValue(event.target.value);
    };
    const handleSave = () => {
        if (onSave) {
            onSave(value.trim());
            setIsModify(!isValid);
        }
    };
    if (!isModify) {
        return (React__default.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 2 },
            React__default.createElement(Typography, { variant: "body1", color: "text.secondary", sx: {
                    textDecoration: textDecoration,
                    textDecorationThickness: textDecorationThickness,
                } }, value),
            React__default.createElement(BorderColorIcon, { onClick: () => setIsModify(true), htmlColor: "#4F4F4F", sx: { cursor: 'pointer', width: '20px', height: '20px' } })));
    }
    const renderInputControl = () => {
        const Component = variant === 'outlined' ? OutlinedInput : Input;
        return (React__default.createElement(Component, { value: value, onChange: handleChange, "aria-describedby": "editable-label", error: !isValid, placeholder: "Editable label", inputRef: inputRef, inputProps: {
                maxLength: maxLength || 128,
                style: { fontSize: '1rem', fontWeight: 400 },
            }, ...rest, endAdornment: React__default.createElement(InputAdornment, { position: "end" },
                React__default.createElement(CheckIcon, { htmlColor: "#2F80ED", onClick: handleSave })) }));
    };
    return (React__default.createElement(Box, { position: "relative" },
        React__default.createElement(ClickAwayListener, { mouseEvent: "onMouseDown", onClickAway: handleSave },
            React__default.createElement(FormControl, { error: !isValid, variant: "outlined", size: "small" }, renderInputControl())),
        !isValid && (React__default.createElement(Typography, { component: "span", sx: {
                position: 'absolute',
                left: 0,
                bottom: -20,
            }, color: "text.error" }, errorMessage))));
};

export { EditableField as default };
//# sourceMappingURL=EditableField.js.map
