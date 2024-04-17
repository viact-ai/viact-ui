import { GREY } from '../variables.js';

function Select(theme) {
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
    };
}

export { Select as default };
//# sourceMappingURL=Select.js.map
