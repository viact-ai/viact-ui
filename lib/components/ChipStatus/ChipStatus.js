import * as React from 'react';
import { Chip, Box } from '@mui/material';

// @flow
function ChipStatus({ label, colorDot = '#BDBDBD', type = 'error' }) {
    return (React.createElement(Chip, { variant: "outlined", color: type, label: label, sx: {
            border: 'none',
            background: type === 'error' ? '#eb57571a' : '#eef0f4fa',
            padding: '0.5rem 1rem',
            color: '#4f4f4f',
            span: {
                lineHeight: '10px',
            },
        }, icon: React.createElement(Box, { sx: {
                width: 10,
                height: 10,
                backgroundColor: colorDot,
                borderRadius: '50%',
            } }) }));
}

export { ChipStatus as default };
//# sourceMappingURL=ChipStatus.js.map
