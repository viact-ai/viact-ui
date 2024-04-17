// @flow
import * as React from 'react'
import { Chip, Box } from '@mui/material'

export interface Props {
  label: string
  colorDot?: string
  type?: 'error' | 'success'
}

function ChipStatus({ label, colorDot = '#BDBDBD', type = 'error' }: Props) {
  return (
    <Chip
      variant="outlined"
      color={type}
      label={label}
      sx={{
        border: 'none',
        background: type === 'error' ? '#eb57571a' : '#eef0f4fa',
        padding: '0.5rem 1rem',
        color: '#4f4f4f',
        span: {
          lineHeight: '10px',
        },
      }}
      icon={
        <Box
          sx={{
            width: 10,
            height: 10,
            backgroundColor: colorDot,
            borderRadius: '50%',
          }}
        />
      }
    />
  )
}

export default ChipStatus
