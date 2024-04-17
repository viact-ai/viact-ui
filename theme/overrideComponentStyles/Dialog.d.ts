export default function Dialog(theme: any): {
    MuiDialog: {
        styleOverrides: {
            paper: {
                boxShadow: any;
                '&.MuiPaper-rounded': {
                    borderRadius: number;
                };
                '&.MuiDialog-paperFullScreen': {
                    borderRadius: number;
                };
                '&.MuiDialog-paper .MuiDialogActions-root': {
                    padding: any;
                };
                '@media (max-width: 600px)': {
                    margin: any;
                };
                '@media (max-width: 663.95px)': {
                    '&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody': {
                        maxWidth: string;
                    };
                };
            };
            paperFullWidth: {
                width: string;
            };
        };
    };
    MuiDialogTitle: {
        styleOverrides: {
            root: {
                padding: any;
            };
        };
    };
    MuiDialogContent: {
        styleOverrides: {
            root: {
                borderTop: number;
                borderBottom: number;
                padding: any;
            };
        };
    };
    MuiDialogActions: {
        styleOverrides: {
            root: {
                '& > :not(:first-of-type)': {
                    marginLeft: any;
                };
            };
        };
    };
};
