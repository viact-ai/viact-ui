export default function Slider(theme: any): {
    MuiSlider: {
        defaultProps: {
            size: string;
        };
        styleOverrides: {
            root: {
                '&.Mui-disabled': {
                    color: any;
                };
            };
            markLabel: {
                fontSize: number;
                color: any;
            };
            valueLabel: {
                borderRadius: number;
                backgroundColor: any;
            };
        };
    };
};
