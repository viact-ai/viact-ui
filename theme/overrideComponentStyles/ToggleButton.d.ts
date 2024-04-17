export default function ToggleButton(theme: any): {
    MuiToggleButton: {
        variants: ({
            props: {
                color: any;
            };
            style: {
                '&:hover': {
                    borderColor: string;
                    backgroundColor: string;
                };
                '&.Mui-selected': {
                    borderColor: string;
                };
            };
        } | {
            props: {
                color: string;
            };
            style: {
                '&.Mui-selected': {
                    backgroundColor: any;
                };
            };
        })[];
    };
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                borderRadius: any;
                backgroundColor: any;
                border: string;
                '& .MuiToggleButton-root': {
                    margin: number;
                    borderColor: string;
                    borderRadius: string;
                };
            };
        };
    };
};
