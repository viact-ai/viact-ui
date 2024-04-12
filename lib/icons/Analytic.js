import * as React from 'react';

function Analytic({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 5, cy: 17, r: 2, stroke: "currentColor", strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 9, cy: 7, r: 2, stroke: "currentColor", strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 15, cy: 17, r: 2, stroke: "currentColor", strokeWidth: 1.5 }),
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.5, d: "m6 15 2-6M10 8l4 8M16.5 15l2.5-4" }),
        React.createElement("circle", { cx: 20, cy: 9, r: 2, stroke: "currentColor", strokeWidth: 1.5 })));
}

export { Analytic as default };
//# sourceMappingURL=Analytic.js.map
