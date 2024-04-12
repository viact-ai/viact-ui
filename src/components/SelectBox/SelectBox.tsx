import * as React from 'react'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { isEmpty, isArray } from 'lodash'

export interface SelectBoxProps {
  value: string | number
  placeholder?: string
  options?: [{ label: string; value: string }]
  onChange: (event: SelectChangeEvent) => void
}

const SelectBox = ({
  value,
  options,
  placeholder,
  onChange,
}: SelectBoxProps) => {
  return (
    <Select
      displayEmpty
      fullWidth
      value={value}
      onChange={onChange}
      sx={{
        '& fieldset': {
          borderColor: 'rgba(0, 0, 0, 0.23) !important',
        },
      }}
    >
      {placeholder && (
        <MenuItem
          value=""
          sx={{
            fontWeight: 500,
            color: '#333333',
            borderBottom: '1px solid #ccc',
            padding: '1rem 0.5rem',
          }}
        >
          {placeholder}
        </MenuItem>
      )}
      {!isEmpty(options) &&
        isArray(options) &&
        options.map((item) => (
          <MenuItem
            sx={{
              display: 'block',
              borderBottom: '1px solid #ccc',
              padding: '1rem 0.5rem',
              '&:last-child': {
                borderBottom: 'none',
              },
            }}
            key={item.value}
            value={item.value}
          >
            <span>{item.label}</span>
          </MenuItem>
        ))}
    </Select>
  )
}

export default SelectBox
