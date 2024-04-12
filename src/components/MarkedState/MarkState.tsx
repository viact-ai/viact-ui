import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { pxToRem } from '../../utils/getFontValue'
import Minus from '../../icons/Minus'
import Tick from '../../icons/Tick'
import Close from '../../icons/Close'

export interface MarkedStateProps {
  backgroundColor?: string
  flexDirection?: 'row' | 'column'
  state:
    | 'approve'
    | 'reject'
    | 'unmark'
    | 'unview'
    | 'pending'
    | 'acknowledged'
    | 'dismiss'
    | 'invalid'
  hideLabel?: boolean
}

const stateObject = {
  approve: {
    icon: <Tick width={16} height={16} className="approve-icon" />,
    bgColor: '#27AE60',
  },
  acknowledged: {
    icon: <Tick width={16} height={16} className="approve-icon" />,
    bgColor: '#27AE60',
  },
  reject: {
    icon: <Close width={16} height={16} />,
    bgColor: '#EB5757',
  },
  invalid: {
    icon: <Close width={16} height={16} />,
    bgColor: '#EB5757',
  },
  unmark: {
    icon: <Minus width={16} height={16} />,
    bgColor: '#828282',
  },
  dismiss: {
    icon: <Minus width={16} height={16} />,
    bgColor: '#828282',
  },
}

const MarkedState = ({
  backgroundColor = 'rgba(0, 0, 0, 0.7)',
  flexDirection = 'row',
  state,
  hideLabel,
}: MarkedStateProps) => {
  const shadowStates = ['approve', 'acknowledged', 'reject', 'invalid']

  return (
    <>
      {state !== 'unview' && state !== 'pending' && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="0.25rem"
          sx={{
            padding: '0.5rem 1rem',
            flexDirection: flexDirection,
            backgroundColor: backgroundColor,
          }}>
          {stateObject[state] && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: pxToRem(24),
                height: pxToRem(24),
                backgroundColor: stateObject[state].bgColor,
                borderRadius: '50%',
                '& svg': {
                  '& path': {
                    fill: '#fff',
                  },
                },
                '& .approve-icon': {
                  '& path': {
                    fill: 'transparent',
                    stroke: '#fff',
                  },
                },
                boxShadow:
                  flexDirection === 'column' && shadowStates.includes(state)
                    ? '0px 4px 4px 0px #00000040'
                    : 'none',
              }}>
              {stateObject[state].icon}
            </Box>
          )}
          {!hideLabel && (
            <Typography
              variant="body2"
              color="#fff"
              textTransform="capitalize"
              marginLeft={flexDirection !== 'column' ? 1 : 0}>
              {state === 'acknowledged' ? 'Acknowledge' : state}
            </Typography>
          )}
        </Box>
      )}
    </>
  )
}

export default MarkedState
