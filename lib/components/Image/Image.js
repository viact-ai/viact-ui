import React__default, { useState } from 'react';
import { Box, Typography, Skeleton } from '@mui/material';
import ImageUnavailable from '../../icons/ImageUnavailable.js';

const Image = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);
    const { src, width, height, isSmall } = props;
    if (isError) {
        return (React__default.createElement(Box, { sx: {
                width: width || '100%',
                height: height || '100%',
                background: '#F2F2F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: isSmall ? 0 : '1rem',
            } },
            React__default.createElement(ImageUnavailable, { width: isSmall ? 36 : 100, height: isSmall ? 36 : 100, color: "#4F4F4F" }),
            React__default.createElement(Typography, { variant: "h6", color: "text.white", sx: {
                    color: '#333',
                    fontSize: isSmall ? '10px' : '20px',
                } }, "Preview Unavailable")));
    }
    return (React__default.createElement(React__default.Fragment, null, isLoading && !isError ? (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("img", { src: src, style: { display: 'none' }, onLoad: () => setIsLoading(false), onError: () => setError(true) }),
        React__default.createElement(Skeleton, { sx: {
                width: width || '100%',
                height: height || '100%',
            }, animation: "wave", variant: "rectangular" }))) : (React__default.createElement("img", { ...props }))));
};
Image.defaultProps = {
    isSmall: false,
};

export { Image as default };
//# sourceMappingURL=Image.js.map
