import Box from '@mui/material/Box'
import { BoxProps } from '@mui/system'
import { styled } from '@mui/material/styles'

export const ContentLayout = styled(Box)<BoxProps>(() => ({
  margin: '0 20px',
}))

export const ContentHeader = styled(Box)<BoxProps>(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  borderBottom: `1px solid #E0E0E0`,
  boxSizing: 'border-box',
  // padding: '16px 0',
  color: 'text.primary',
  height: '64px',
}))

export const ContentBody = styled(Box)<BoxProps>(() => ({
  width: '100%',
  margin: 0,
  padding: '16px 0',
}))
