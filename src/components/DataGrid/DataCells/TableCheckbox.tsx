import React from 'react'
import { Checkbox, CheckboxProps, styled } from '@mui/material'

export const TableCheckbox = styled(Checkbox)<CheckboxProps>(() => ({
  color: 'gray',
  '&.Mui-checked': {
    color: '#2F80ED',
  },
}))
