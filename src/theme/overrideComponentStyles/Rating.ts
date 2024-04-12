const ICON_SMALL = { width: 20, height: 20 }
const ICON_LARGE = { width: 28, height: 28 }

export default function Rating(theme: any) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            opacity: 0.48,
          },
        },
        iconEmpty: { color: theme.palette.grey[500_48] },
        sizeSmall: { '& svg': { ...ICON_SMALL } },
        sizeLarge: { '& svg': { ...ICON_LARGE } },
      },
    },
  }
}
