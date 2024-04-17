export default function Avatar(theme: any): {
    MuiAvatar: {
        styleOverrides: {
            colorDefault: {
                color: any;
                backgroundColor: any;
            };
        };
    };
    MuiAvatarGroup: {
        styleOverrides: {
            avatar: {
                fontSize: number;
                fontWeight: any;
                '&:first-of-type': {
                    fontSize: number;
                    color: any;
                    backgroundColor: any;
                };
            };
        };
    };
};
