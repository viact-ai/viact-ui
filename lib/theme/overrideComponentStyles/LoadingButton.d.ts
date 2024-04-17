export default function LoadingButton(): {
    MuiLoadingButton: {
        styleOverrides: {
            root: {
                '&.MuiButton-text': {
                    '& .MuiLoadingButton-startIconPendingStart': {
                        marginLeft: number;
                    };
                    '& .MuiLoadingButton-endIconPendingEnd': {
                        marginRight: number;
                    };
                };
            };
        };
    };
};
