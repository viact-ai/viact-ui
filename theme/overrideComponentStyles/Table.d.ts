export default function Table(theme: any): {
    MuiTableRow: {
        styleOverrides: {
            root: {
                '&.Mui-selected': {
                    backgroundColor: any;
                    '&:hover': {
                        backgroundColor: any;
                    };
                };
            };
        };
    };
    MuiTableCell: {
        styleOverrides: {
            root: {
                borderBottom: string;
            };
            head: {
                color: any;
                backgroundColor: any;
                '&:first-of-type': {
                    paddingLeft: any;
                    borderTopLeftRadius: any;
                    borderBottomLeftRadius: any;
                    boxShadow: string;
                };
                '&:last-of-type': {
                    paddingRight: any;
                    borderTopRightRadius: any;
                    borderBottomRightRadius: any;
                    boxShadow: string;
                };
            };
            stickyHeader: {
                backgroundColor: any;
                backgroundImage: string;
            };
            body: {
                '&:first-of-type': {
                    paddingLeft: any;
                };
                '&:last-of-type': {
                    paddingRight: any;
                };
            };
        };
    };
    MuiTablePagination: {
        styleOverrides: {
            root: {
                borderTop: string;
            };
            toolbar: {
                height: number;
            };
            select: {
                '&:focus': {
                    borderRadius: any;
                };
            };
            selectIcon: {
                width: number;
                height: number;
                marginTop: number;
            };
        };
    };
};
