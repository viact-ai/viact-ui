function pxToRem(value) {
    return `${value / 16}rem`;
}
const FONT_PRIMARY = 'Roboto';
const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
        fontWeight: 500,
        lineHeight: '2.75rem',
        fontSize: pxToRem(36),
    },
    h2: {
        fontWeight: 500,
        lineHeight: '2.25rem',
        fontSize: pxToRem(30),
    },
    h3: {
        fontWeight: 500,
        lineHeight: '1.5rem',
        fontSize: pxToRem(24),
    },
    h4: {
        fontWeight: 500,
        lineHeight: '1.5rem',
        fontSize: pxToRem(20),
    },
    h5: {
        fontWeight: 500,
        lineHeight: '1.75rem',
        fontSize: pxToRem(18),
    },
    h6: {
        fontWeight: 500,
        lineHeight: '1.5rem',
        fontSize: pxToRem(16),
    },
    subtitle1: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        color: '#000',
    },
    subtitle2: {
        fontWeight: 500,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
    },
    body1: {
        fontWeight: 400,
        lineHeight: '1.25rem',
        fontSize: pxToRem(16),
    },
    body2: {
        fontWeight: 400,
        lineHeight: '1.25rem',
        fontSize: pxToRem(14),
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        fontWeight: 500,
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: 'uppercase',
    },
    button: {
        fontWeight: 400,
        lineHeight: 24 / 14,
        fontSize: pxToRem(16),
        textTransform: 'capitalize',
    },
    article: {
        fontWeight: 700,
    },
    variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'span',
        subtitle2: 'span',
        body1: 'span',
        body2: 'span',
    },
};

export { typography as default, pxToRem };
//# sourceMappingURL=typography.js.map
