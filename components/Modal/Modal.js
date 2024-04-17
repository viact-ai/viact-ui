import * as React from 'react';
import { Dialog, DialogTitle, Typography, DialogContent, DialogActions, Button } from '@mui/material';
import Close from '../../icons/Close.js';

const Modal = ({ isDividers = true, titleAlign = 'left', actions, children, disabledOutsiteClick = true, title, showCloseIcon = true, hideHeader = false, titleRender, onClose, ...restProps }) => {
    const handleClose = (event, reason) => {
        if (disabledOutsiteClick && reason === 'backdropClick') {
            return;
        }
        if (onClose) {
            onClose();
        }
    };
    return (React.createElement(Dialog, { "aria-labelledby": "customized-dialog", fullWidth: true, maxWidth: "md", scroll: "paper", ...restProps, sx: {
            '& .model-close-icon': {
                cursor: 'pointer',
                position: 'absolute',
                top: 20,
                right: 20,
                '& path': {
                    fill: '#333',
                },
            },
        }, onClose: handleClose },
        !hideHeader && (React.createElement(DialogTitle, { sx: {
                fontSize: 18,
                fontWeight: 500,
                textAlign: titleAlign,
            } }, titleRender ? (titleRender) : (React.createElement(Typography, { variant: "h6" }, title)))),
        showCloseIcon && (React.createElement(Close, { className: "model-close-icon", width: "20", height: "20", onClick: onClose, color: "#828282" })),
        React.createElement(DialogContent, { dividers: isDividers }, children),
        actions && actions.length > 0 && (React.createElement(DialogActions, null, actions.map(action => (React.createElement(Button, { key: `action_${action.name}`, type: action.type || 'button', ...action.props, onClick: action.handler }, action.name)))))));
};

export { Modal as default };
//# sourceMappingURL=Modal.js.map
