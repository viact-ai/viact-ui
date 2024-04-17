export default function Chip(theme: any): {
    MuiChip: {
        styleOverrides: {
            colorDefault: {
                '& .MuiChip-avatarMedium, .MuiChip-avatarSmall': {
                    color: any;
                };
            };
            outlined: {
                borderColor: any;
                '&.MuiChip-colorPrimary': {
                    borderColor: any;
                };
                '&.MuiChip-colorSecondary': {
                    borderColor: any;
                };
            };
            avatarColorInfo: {
                color: any;
                backgroundColor: any;
            };
            avatarColorSuccess: {
                color: any;
                backgroundColor: any;
            };
            avatarColorWarning: {
                color: any;
                backgroundColor: any;
            };
            avatarColorError: {
                color: any;
                backgroundColor: any;
            };
        };
    };
};
