import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'
import { BoxProps } from '@mui/system'

export interface ComponentWithLoadingProps extends BoxProps {
  children: React.ReactNode | JSX.Element
  color?: string
  isLoading: boolean
  labelColor?: string
  loadingComponent?: React.ReactNode | JSX.Element
  showLoadingLabel?: boolean
  size?: number | string
}

const ComponentWithLoading = ({
  children,
  color,
  isLoading,
  labelColor,
  loadingComponent,
  showLoadingLabel,
  size,
  ...rest
}: ComponentWithLoadingProps): JSX.Element => {
  if (isLoading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        color={color || '#828282'}
        {...rest}>
        {loadingComponent ? (
          <>{loadingComponent}</>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            rowGap="0.5rem"
            alignItems="center"
            justifyContent="center">
            <CircularProgress color="inherit" size={size} />
            {showLoadingLabel && (
              <Typography color={labelColor || 'inherit'}>
                Loading...
              </Typography>
            )}
          </Box>
        )}
      </Box>
    )
  }

  return <>{children}</>
}

export default ComponentWithLoading
