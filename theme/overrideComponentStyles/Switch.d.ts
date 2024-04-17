export default function Switch(theme: any): {
    MuiSwitch: {
        styleOverrides: {
            thumb: {
                boxShadow: any;
            };
            track: {
                opacity: number;
                backgroundColor: any;
            };
            switchBase: {
                left: number;
                right: string;
                '&:not(:.Mui-checked)': {
                    color: any;
                };
                '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
                    color: any;
                };
                '&.Mui-disabled+.MuiSwitch-track': {
                    opacity: number;
                    backgroundColor: string;
                };
            };
        };
    };
};
