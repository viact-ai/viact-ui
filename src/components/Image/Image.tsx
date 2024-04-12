import React, { useState } from 'react'
import { Box, Skeleton, Typography } from '@mui/material'
import ImageUnavailable from '../../icons/ImageUnavailable'
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  isSmall?: boolean
}

const Image = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setError] = useState<boolean>(false)
  const { src, width, height, isSmall } = props

  if (isError) {
    return (
      <Box
        sx={{
          width: width || '100%',
          height: height || '100%',
          background: '#F2F2F2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: isSmall ? 0 : '1rem',
        }}>
        <ImageUnavailable
          width={isSmall ? 36 : 100}
          height={isSmall ? 36 : 100}
          color="#4F4F4F"
        />
        <Typography
          variant="h6"
          color="text.white"
          sx={{
            color: '#333',
            fontSize: isSmall ? '10px' : '20px',
          }}>
          Preview Unavailable
        </Typography>
      </Box>
    )
  }

  return (
    <>
      {isLoading && !isError ? (
        <>
          <img
            src={src}
            style={{ display: 'none' }}
            onLoad={() => setIsLoading(false)}
            onError={() => setError(true)}
          />
          <Skeleton
            sx={{
              width: width || '100%',
              height: height || '100%',
            }}
            animation="wave"
            variant="rectangular"
          />
        </>
      ) : (
        <img {...props} />
      )}
    </>
  )
}

Image.defaultProps = {
  isSmall: false,
}

export default Image
