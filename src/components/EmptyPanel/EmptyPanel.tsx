import { CircularProgress, Box, Typography } from '@mui/material'
import React from 'react'

interface EmptyPanelProps {
  isLoading?: boolean
  iconEmpty?: string
  titleEmpty: string
  contentEmpty?: any
  children?: React.ReactNode
  lengthData: number
  height?: string
}

const EmptyPanel = ({
  isLoading = false,
  iconEmpty = '',
  titleEmpty = '',
  contentEmpty = '',
  children = '',
  lengthData = 0,
  height,
}: EmptyPanelProps) => {
  return (
    <>
      {isLoading ? (
        <Box
          className="empty-panel__box-panel"
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            flexDirection: 'column',
            gap: '1rem',
          }}>
          <CircularProgress />
        </Box>
      ) : !lengthData ? (
        <Box
          className="empty-panel__box-panel"
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: height || '50vh',
            flexDirection: 'column',
          }}>
          {iconEmpty && (
            <Box
              className="empty-panel__box-panel__icon"
              sx={{
                marginBottom: '20px',
              }}>
              <img src={iconEmpty} alt="empty-icon" />
            </Box>
          )}
          {titleEmpty && (
            <Box className="empty-panel__box-panel__title">
              <Typography
                sx={{
                  fontWeight: '500',
                  fontSize: '20px',
                  paddingBottom: '8px',
                }}>
                {titleEmpty}
              </Typography>
            </Box>
          )}

          {contentEmpty && (
            <Box
              className="empty-panel__box-panel__content"
              sx={{
                fontSize: '16px',
                color: '#828282',
              }}>
              {contentEmpty}
            </Box>
          )}
        </Box>
      ) : (
        children
      )}
    </>
  )
}

export default EmptyPanel
