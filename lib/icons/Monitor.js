import * as React from 'react';

function Monitor({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 16.5, height: 16.5, x: 3.75, y: 3.75, stroke: "currentColor", strokeWidth: 1.5, rx: 1.25 }),
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.5, d: "M11.75 4v16M20 11.75H4" })));
}

export { Monitor as default };
//# sourceMappingURL=Monitor.js.map
