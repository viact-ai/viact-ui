export default function Select(theme: any): {
    MuiSelect: {
        styleOverrides: {
            root: {
                '&.MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: string;
                    };
                    '&:hover fieldset': {
                        borderColor: string;
                    };
                    '&.Mui-focused fieldset': {
                        borderColor: string;
                    };
                    '&.Mui-selected': {
                        background: string;
                    };
                };
                '&.MuiMenuItem-root .Mui-selected': {
                    background: string;
                };
            };
        };
    };
};
