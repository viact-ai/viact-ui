import * as React from 'react';

function Play({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 24, height: 24, fill: "currentColor", fillOpacity: 0.1, rx: 12 }),
        React.createElement("path", { fill: "currentColor", d: "M16.5 11.134a1 1 0 0 1 0 1.732l-6 3.464a1 1 0 0 1-1.5-.866V8.536a1 1 0 0 1 1.5-.866z" }),
        React.createElement("rect", { width: 23, height: 23, x: 0.5, y: 0.5, stroke: "currentColor", strokeOpacity: 0.7, rx: 11.5 })));
}

export { Play as default };
//# sourceMappingURL=Play.js.map
