export default function ComponentsOverrides(theme: any): ({
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
} & {
    MuiCheckbox: {
        styleOverrides: {
            root: {
                padding: any;
                '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
                    color: any;
                };
                '& .MuiSvgIcon-fontSizeMedium': {
                    width: number;
                    height: number;
                };
                '& .MuiSvgIcon-fontSizeSmall': {
                    width: number;
                    height: number;
                };
                svg: {
                    fontSize: number;
                    '&[font-size=small]': {
                        fontSize: number;
                    };
                };
            };
        };
    };
}) | {
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
