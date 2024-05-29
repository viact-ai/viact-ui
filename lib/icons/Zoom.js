import * as React from 'react';

function Zoom({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 3v6m0-6c-.379 0-.685.35-1.295 1.048L9 6m3-3c.38 0 .684.35 1.295 1.048L15 6M3 12h6m-6 0c0 .379.35.685 1.048 1.295L6 15m-3-3c0-.38.35-.684 1.048-1.295L6 9m15 3h-6m6 0c0-.379-.35-.685-1.048-1.295L18 9m3 3c0 .38-.35.684-1.048 1.295L18 15m-6 6v-6.5m0 6.5c.379 0 .685-.35 1.295-1.048L15 18m-3 3c-.38 0-.684-.35-1.295-1.048L9 18" })));
}

export { Zoom as default };
//# sourceMappingURL=Zoom.js.map
