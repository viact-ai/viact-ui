export default function Checkbox(theme: any): {
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
};
