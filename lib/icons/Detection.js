import * as React from 'react';

function Detection({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.7, d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }),
        React.createElement("circle", { cx: 12, cy: 12, r: 4.25, stroke: "currentColor", strokeWidth: 1.5 })));
}

export { Detection as default };
//# sourceMappingURL=Detection.js.map
