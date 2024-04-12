import { pxToRem } from '../../utils/getFontValue'

export default function Button(theme: any) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: '4px',
          padding: '0.5rem 1rem',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        },
        sizeMedium: {
          padding: '8px 16px',
          height: 36,
          fontSize: pxToRem(16),
          fontWeight: 400,
        },
        disabled: {
          backgroundColor: '#BDBDBD',
          color: '#F2F2F2',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: '#FF6A3D',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#FF512A',
              boxShadow: 'none',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: '#F3F8FF',
            color: '#2F80ED',
            '&:hover': {
              backgroundColor: '#E7F1FF',
              boxShadow: 'none',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'info' },
          style: {
            backgroundColor: '#2F80ED',
            color: '#FFF',
            '&:hover': {
              backgroundColor: '#2066E6',
              boxShadow: 'none',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            backgroundColor: '#FFFFFF',
            color: '#4f4f4f',
            border: '1px solid #828282',
            '&:hover': {
              backgroundColor: '#FFFFFF',
              boxShadow: 'none',
              border: '1px solid #828282',
            },
          },
        },
        {
          props: { variant: 'text', color: 'primary' },
          style: {
            backgroundColor: 'transparent',
            color: '#FF6A3D',
            '&:hover': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          },
        },
      ],
    },
  }
}
