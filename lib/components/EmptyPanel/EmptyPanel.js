import { Box, CircularProgress, Typography } from '@mui/material';
import React__default from 'react';

const EmptyPanel = ({ isLoading = false, iconEmpty = '', titleEmpty = '', contentEmpty = '', children = '', lengthData = 0, height, }) => {
    return (React__default.createElement(React__default.Fragment, null, isLoading ? (React__default.createElement(Box, { className: "empty-panel__box-panel", sx: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            flexDirection: 'column',
            gap: '1rem',
        } },
        React__default.createElement(CircularProgress, null))) : !lengthData ? (React__default.createElement(Box, { className: "empty-panel__box-panel", sx: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: height || '50vh',
            flexDirection: 'column',
        } },
        iconEmpty && (React__default.createElement(Box, { className: "empty-panel__box-panel__icon", sx: {
                marginBottom: '20px',
            } },
            React__default.createElement("img", { src: iconEmpty, alt: "empty-icon" }))),
        titleEmpty && (React__default.createElement(Box, { className: "empty-panel__box-panel__title" },
            React__default.createElement(Typography, { sx: {
                    fontWeight: '500',
                    fontSize: '20px',
                    paddingBottom: '8px',
                } }, titleEmpty))),
        contentEmpty && (React__default.createElement(Box, { className: "empty-panel__box-panel__content", sx: {
                fontSize: '16px',
                color: '#828282',
            } }, contentEmpty)))) : (children)));
};

export { EmptyPanel as default };
//# sourceMappingURL=EmptyPanel.js.map
