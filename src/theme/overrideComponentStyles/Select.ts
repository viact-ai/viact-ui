import { BLACK, GREY } from '../variables'

export default function Select(theme: any) {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          '&.MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: GREY[300],
            },
            '&:hover fieldset': {
              borderColor: GREY[300],
            },
            '&.Mui-focused fieldset': {
              borderColor: GREY[300],
            },
            '&.Mui-selected': {
              background: 'red',
            },
          },
          '&.MuiMenuItem-root .Mui-selected': {
            background: 'black',
          },
        },
      },
    },
  }
}
