import React__default from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const ComponentWithLoading = ({ children, color, isLoading, labelColor, loadingComponent, showLoadingLabel, size, ...rest }) => {
    if (isLoading) {
        return (React__default.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", color: color || '#828282', ...rest }, loadingComponent ? (React__default.createElement(React__default.Fragment, null, loadingComponent)) : (React__default.createElement(Box, { display: "flex", flexDirection: "column", rowGap: "0.5rem", alignItems: "center", justifyContent: "center" },
            React__default.createElement(CircularProgress, { color: "inherit", size: size }),
            showLoadingLabel && (React__default.createElement(Typography, { color: labelColor || 'inherit' }, "Loading..."))))));
    }
    return React__default.createElement(React__default.Fragment, null, children);
};

export { ComponentWithLoading as default };
//# sourceMappingURL=ComponentWithLoading.js.map
