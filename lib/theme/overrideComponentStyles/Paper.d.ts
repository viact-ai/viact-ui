export default function Paper(theme: any): {
    MuiPaper: {
        defaultProps: {
            elevation: number;
        };
        variants: {
            props: {
                variant: string;
            };
            style: {
                borderColor: any;
            };
        }[];
        styleOverrides: {
            root: {
                backgroundImage: string;
            };
        };
    };
};
