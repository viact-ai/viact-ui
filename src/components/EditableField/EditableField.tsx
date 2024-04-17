import React, { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import {
  Box,
  ClickAwayListener,
  FormControl,
  Input,
  InputAdornment,
  InputBaseProps,
  OutlinedInput,
  Typography,
} from '@mui/material'

export interface EditableFieldProps extends Omit<InputBaseProps, 'onChange'> {
  defaultValue: string
  errorMessage?: string
  inputRef?: React.RefObject<HTMLInputElement>
  isRequired?: boolean
  maxLength?: number
  textDecoration?: string
  textDecorationThickness?: number
  variant?: 'outlined' | 'standard'
  onChange?: (value: string) => void
  onSave?: (value: string) => void
}

const EditableField = ({
  defaultValue,
  errorMessage,
  inputRef,
  isRequired,
  maxLength,
  textDecoration,
  textDecorationThickness,
  variant = 'standard',
  onChange,
  onSave,
  ...rest
}: EditableFieldProps): JSX.Element => {
  const [value, setValue] = useState<string>(defaultValue)
  const [isValid, setIsValid] = useState<boolean>(true)
  const [isModify, setIsModify] = useState<boolean>(false)

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isError = !event.target.value && isRequired

    if (onChange) {
      onChange(value)
    }
    setIsValid(!isError)
    setValue(event.target.value)
  }

  const handleSave = () => {
    if (onSave) {
      onSave(value.trim())
      setIsModify(!isValid)
    }
  }

  if (!isModify) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        gap={2}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textDecoration: textDecoration,
            textDecorationThickness: textDecorationThickness,
          }}>
          {value}
        </Typography>
        <BorderColorIcon
          onClick={() => setIsModify(true)}
          htmlColor="#4F4F4F"
          sx={{ cursor: 'pointer', width: '20px', height: '20px' }}
        />
      </Box>
    )
  }

  const renderInputControl = () => {
    const Component = variant === 'outlined' ? OutlinedInput : Input
    return (
      <Component
        value={value}
        onChange={handleChange}
        aria-describedby="editable-label"
        error={!isValid}
        placeholder="Editable label"
        inputRef={inputRef}
        inputProps={{
          maxLength: maxLength || 128,
          style: { fontSize: '1rem', fontWeight: 400 },
        }}
        {...rest}
        endAdornment={
          <InputAdornment position="end">
            <CheckIcon htmlColor="#2F80ED" onClick={handleSave} />
          </InputAdornment>
        }
      />
    )
  }

  return (
    <Box position="relative">
      <ClickAwayListener mouseEvent="onMouseDown" onClickAway={handleSave}>
        <FormControl error={!isValid} variant="outlined" size="small">
          {renderInputControl()}
        </FormControl>
      </ClickAwayListener>
      {!isValid && (
        <Typography
          component="span"
          sx={{
            position: 'absolute',
            left: 0,
            bottom: -20,
          }}
          color="text.error">
          {errorMessage}
        </Typography>
      )}
    </Box>
  )
}

export default EditableField
