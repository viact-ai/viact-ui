export default function Pagination(theme: any): {
    MuiPaginationItem: {
        styleOverrides: {
            root: {
                '&.Mui-selected': {
                    fontWeight: any;
                };
            };
            textPrimary: {
                '&.Mui-selected': {
                    color: any;
                    backgroundColor: string;
                    '&:hover, &.Mui-focusVisible': {
                        backgroundColor: string;
                    };
                };
            };
            outlined: {
                border: string;
            };
            outlinedPrimary: {
                '&.Mui-selected': {
                    backgroundColor: string;
                    border: string;
                };
            };
        };
    };
};
