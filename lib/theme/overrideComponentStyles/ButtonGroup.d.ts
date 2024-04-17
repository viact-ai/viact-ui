export default function ButtonGroup(theme: any): {
    MuiButtonGroup: {
        variants: ({
            props: {
                variant: string;
                color: string;
                disabled?: undefined;
            };
            style: {
                boxShadow: any;
                '& .MuiButtonGroup-grouped.Mui-disabled'?: undefined;
            };
        } | {
            props: {
                disabled: boolean;
                variant?: undefined;
                color?: undefined;
            };
            style: {
                boxShadow: string;
                '& .MuiButtonGroup-grouped.Mui-disabled': {
                    color: any;
                    borderColor: string;
                    '&.MuiButton-contained': {
                        backgroundColor: any;
                    };
                };
            };
        })[];
        styleOverrides: {
            root: {
                '&:hover': {
                    boxShadow: string;
                };
            };
        };
    };
};
