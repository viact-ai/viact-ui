export default function Fab(theme: any): {
    MuiFab: {
        defaultProps: {
            color: string;
        };
        styleOverrides: {
            root: {
                boxShadow: any;
                '&:hover': {
                    boxShadow: string;
                    backgroundColor: any;
                };
            };
            primary: {
                boxShadow: any;
                '&:hover': {
                    backgroundColor: any;
                };
            };
            secondary: {
                boxShadow: any;
                '&:hover': {
                    backgroundColor: any;
                };
            };
            extended: {
                '& svg': {
                    marginRight: any;
                };
            };
        };
    };
};
