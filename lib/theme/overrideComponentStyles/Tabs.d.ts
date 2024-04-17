export default function Tabs(theme: any): {
    MuiTabs: {
        styleOverrides: {
            scrollButtons: {
                width: number;
                borderRadius: string;
            };
        };
    };
    MuiTab: {
        styleOverrides: {
            root: {
                padding: number;
                fontWeight: any;
                borderTopLeftRadius: any;
                borderTopRightRadius: any;
                '&.Mui-selected': {
                    color: any;
                };
                '&:not(:last-of-type)': {
                    marginRight: any;
                };
                '@media (min-width: 600px)': {
                    minWidth: number;
                };
            };
            labelIcon: {
                minHeight: number;
                flexDirection: string;
                '& > *:first-of-type': {
                    marginBottom: number;
                    marginRight: any;
                };
            };
            wrapped: {
                flexDirection: string;
                whiteSpace: string;
            };
            textColorInherit: {
                opacity: number;
                color: any;
            };
        };
    };
    MuiTabPanel: {
        styleOverrides: {
            root: {
                padding: number;
            };
        };
    };
};
