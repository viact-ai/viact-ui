// @flow
import * as React from 'react'
import { Box, Typography } from '@mui/material'
// import ViTagPng from '../../assets/images/vi-tag.png'
// import ViMacPng from '../../assets/images/vi-mac-icon.png'
// import ViMovPng from '../../assets/images/vi-mov-icon.png'
import styled from '@emotion/styled'
import { ViMov, ViTag } from '../../icons'
type Props = {
  id?: string
  type?: 'vi-tag' | 'vi-mov' | 'vi-mac'
}

const BoxContent = styled(Box)`
  display: flex;
  align-items: center;

  .vi-device__box {
    border: 1px solid #e0e0e0;
    padding: 5px;
    display: flex;
    border-radius: 5px;
    margin-right: 0.5rem;
  }
`

const objectImg = {
  'vi-tag': <ViTag width={25} height={25} />,
  'vi-mac': <></>,
  'vi-mov': <ViMov width={25} height={25} />,
}

function DeviceId({ id, type = 'vi-tag' }: Props) {
  return id ? (
    <BoxContent>
      <Box className="vi-device__box">{objectImg[type]}</Box>
      <Typography>{id}</Typography>
    </BoxContent>
  ) : (
    <div />
  )
}

export default DeviceId
