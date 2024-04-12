export default function Menu(theme: any): {
    MuiMenuItem: {
        styleOverrides: {
            root: {
                fontSize: number;
                fontWeight: number;
                '&.Mui-selected': {
                    backgroundColor: any;
                    '&:hover': {
                        backgroundColor: any;
                    };
                };
            };
        };
    };
};
