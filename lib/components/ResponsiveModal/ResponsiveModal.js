import React__default from 'react';
import { Dialog } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const DialogPaperMobile = styled('div')(() => ({
    borderRadius: '16px 16px 0 0',
    margin: 0,
    position: 'fixed',
    bottom: 0,
    maxWidth: '100% !important',
    width: '100%',
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
        width: '0px',
    },
}));
const DialogPaperDesktop = styled('div')(() => ({
    borderRadius: 5,
    padding: '8px',
    margin: '4px',
}));
const OverlayMobile = styled('div')({
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
});
const OverlayDesktop = styled('div')({
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
});
const ResponsiveModal = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (React__default.createElement(Dialog, { open: props.open, onClose: props.onClose, PaperComponent: isMobile ? DialogPaperMobile : DialogPaperDesktop, BackdropProps: {
            component: isMobile ? OverlayMobile : OverlayDesktop,
        }, ...props }, props.children));
};

export { ResponsiveModal as default };
//# sourceMappingURL=ResponsiveModal.js.map
