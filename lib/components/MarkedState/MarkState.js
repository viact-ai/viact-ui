import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { pxToRem } from '../../utils/getFontValue.js';
import Minus from '../../icons/Minus.js';
import Tick from '../../icons/Tick.js';
import Close from '../../icons/Close.js';

const stateObject = {
    approve: {
        icon: React.createElement(Tick, { width: 16, height: 16, className: "approve-icon" }),
        bgColor: '#27AE60',
    },
    acknowledged: {
        icon: React.createElement(Tick, { width: 16, height: 16, className: "approve-icon" }),
        bgColor: '#27AE60',
    },
    reject: {
        icon: React.createElement(Close, { width: 16, height: 16 }),
        bgColor: '#EB5757',
    },
    invalid: {
        icon: React.createElement(Close, { width: 16, height: 16 }),
        bgColor: '#EB5757',
    },
    unmark: {
        icon: React.createElement(Minus, { width: 16, height: 16 }),
        bgColor: '#828282',
    },
    dismiss: {
        icon: React.createElement(Minus, { width: 16, height: 16 }),
        bgColor: '#828282',
    },
};
const MarkedState = ({ backgroundColor = 'rgba(0, 0, 0, 0.7)', flexDirection = 'row', state, hideLabel, }) => {
    const shadowStates = ['approve', 'acknowledged', 'reject', 'invalid'];
    return (React.createElement(React.Fragment, null, state !== 'unview' && state !== 'pending' && (React.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0.25rem", sx: {
            padding: '0.5rem 1rem',
            flexDirection: flexDirection,
            backgroundColor: backgroundColor,
        } },
        stateObject[state] && (React.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "center", sx: {
                width: pxToRem(24),
                height: pxToRem(24),
                backgroundColor: stateObject[state].bgColor,
                borderRadius: '50%',
                '& svg': {
                    '& path': {
                        fill: '#fff',
                    },
                },
                '& .approve-icon': {
                    '& path': {
                        fill: 'transparent',
                        stroke: '#fff',
                    },
                },
                boxShadow: flexDirection === 'column' && shadowStates.includes(state)
                    ? '0px 4px 4px 0px #00000040'
                    : 'none',
            } }, stateObject[state].icon)),
        !hideLabel && (React.createElement(Typography, { variant: "body2", color: "#fff", textTransform: "capitalize", marginLeft: flexDirection !== 'column' ? 1 : 0 }, state === 'acknowledged' ? 'Acknowledge' : state))))));
};

export { MarkedState as default };
//# sourceMappingURL=MarkState.js.map
