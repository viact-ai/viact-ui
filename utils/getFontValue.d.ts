export declare function remToPx(value: string): number;
export declare function pxToRem(value: number): string;
export declare function responsiveFontSizes({ sm, md, lg }: any): {
    '@media (min-width:600px)': {
        fontSize: string;
    };
    '@media (min-width:900px)': {
        fontSize: string;
    };
    '@media (min-width:1200px)': {
        fontSize: string;
    };
};
