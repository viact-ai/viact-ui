export default function Rating(theme: any): {
    MuiRating: {
        styleOverrides: {
            root: {
                '&.Mui-disabled': {
                    opacity: number;
                };
            };
            iconEmpty: {
                color: any;
            };
            sizeSmall: {
                '& svg': {
                    width: number;
                    height: number;
                };
            };
            sizeLarge: {
                '& svg': {
                    width: number;
                    height: number;
                };
            };
        };
    };
};
