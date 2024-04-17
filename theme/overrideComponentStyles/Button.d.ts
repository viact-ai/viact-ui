export default function Button(theme: any): {
    MuiButton: {
        styleOverrides: {
            root: {
                boxShadow: string;
                borderRadius: string;
                padding: string;
                height: string;
                display: string;
                alignItems: string;
                justifyContent: string;
                gap: number;
            };
            sizeMedium: {
                padding: string;
                height: number;
                fontSize: string;
                fontWeight: number;
            };
            disabled: {
                backgroundColor: string;
                color: string;
            };
        };
        variants: ({
            props: {
                variant: string;
                color: string;
            };
            style: {
                backgroundColor: string;
                color: string;
                '&:hover': {
                    backgroundColor: string;
                    boxShadow: string;
                    border?: undefined;
                };
                border?: undefined;
            };
        } | {
            props: {
                variant: string;
                color: string;
            };
            style: {
                backgroundColor: string;
                color: string;
                border: string;
                '&:hover': {
                    backgroundColor: string;
                    boxShadow: string;
                    border: string;
                };
            };
        })[];
    };
};
