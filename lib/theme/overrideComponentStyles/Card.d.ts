export default function Card(theme: any): {
    MuiCard: {
        styleOverrides: {
            root: {
                position: string;
                boxShadow: any;
                borderRadius: number;
                zIndex: number;
            };
        };
    };
    MuiCardHeader: {
        defaultProps: {
            titleTypographyProps: {
                variant: string;
            };
            subheaderTypographyProps: {
                variant: string;
                marginTop: any;
            };
        };
        styleOverrides: {
            root: {
                padding: any;
            };
        };
    };
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: any;
            };
        };
    };
};
