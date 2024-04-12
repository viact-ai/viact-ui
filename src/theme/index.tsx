import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import palette from './palette';
import typography, { pxToRem } from './typography';
import ComponentsOverrides from './overrideComponentStyles';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import { ThemeOptions } from '@mui/system';

// const themeConfig: Theme = createTheme({
//   ...palette.light,
//   typography,
// })

// themeConfig.components = ComponentsOverrides(themeConfig)

// export default themeConfig

// eslint-disable-next-line react/prop-types
export default function ThemeProvider({ children }) {
  const themeOptions: any = {
    palette: palette.light,
    typography,
    spacing: factor => `${0.25 * factor}rem`,
  };

  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(themeOptions) as {};

  return (
    <StyledEngineProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
