export default function Menu(theme: any) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary,
            '&:hover': {
              backgroundColor: theme.palette.primary,
            },
          },
        },
      },
    },
  }
}
