import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React__default from 'react';
import palette from './palette.js';
import typography from './typography.js';
import ComponentsOverrides from './overrideComponentStyles/index.js';
import { CssBaseline } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider as ThemeProvider$1 } from '@mui/material/styles';

// const themeConfig: Theme = createTheme({
//   ...palette.light,
//   typography,
// })
// themeConfig.components = ComponentsOverrides(themeConfig)
// export default themeConfig
// eslint-disable-next-line react/prop-types
function ThemeProvider({ children }) {
    const themeOptions = {
        palette: palette.light,
        typography,
        spacing: factor => `${0.25 * factor}rem`,
    };
    const theme = createTheme(themeOptions);
    theme.components = ComponentsOverrides(themeOptions);
    return (React__default.createElement(StyledEngineProvider, null,
        React__default.createElement(ThemeProvider$1, { theme: theme },
            React__default.createElement(CssBaseline, null),
            children)));
}

export { ThemeProvider as default };
//# sourceMappingURL=index.js.map
