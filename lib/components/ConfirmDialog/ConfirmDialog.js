import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import * as React from 'react';

const ConfirmDialog = ({ open, title, content, cancelButtonText, confirmButtonText, className, onClose, onConfirm, }) => {
    return (React.createElement(Dialog, { className: className, open: open, onClose: onClose, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description" },
        React.createElement(DialogTitle, { sx: { color: '#333333', fontSize: '1rem', fontWeight: 500 } }, title),
        React.createElement(DialogContent, null,
            React.createElement(DialogContentText, { sx: { color: '#4f4f4f', fontWeight: 400, fontSize: '0.875rem' } }, content)),
        React.createElement(DialogActions, null,
            React.createElement(Button, { className: "cancel-btn", onClick: onClose, variant: "outlined", color: "primary" }, cancelButtonText || 'Cancel'),
            React.createElement(Button, { className: "confirm-btn", onClick: onConfirm, autoFocus: true, variant: "contained", color: "primary", disableElevation: true }, confirmButtonText || 'Save'))));
};

export { ConfirmDialog as default };
//# sourceMappingURL=ConfirmDialog.js.map
