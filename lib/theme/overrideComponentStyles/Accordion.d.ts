export default function Accordion(theme: any): {
    MuiAccordion: {
        styleOverrides: {
            root: {
                '&.Mui-expanded': {
                    boxShadow: any;
                    borderRadius: any;
                };
                '&.Mui-disabled': {
                    backgroundColor: string;
                };
            };
        };
    };
    MuiAccordionSummary: {
        styleOverrides: {
            root: {
                paddingLeft: any;
                paddingRight: any;
                '&.Mui-disabled': {
                    opacity: number;
                    color: any;
                    '& .MuiTypography-root': {
                        color: string;
                    };
                };
            };
            expandIconWrapper: {
                color: string;
            };
        };
    };
};
