import * as React from 'react';

function Squares({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 6.5, cy: 6.5, r: 1.5, fill: "currentColor" }),
        React.createElement("circle", { cx: 6.5, cy: 18.5, r: 1.5, fill: "currentColor" }),
        React.createElement("circle", { cx: 18.5, cy: 18.5, r: 1.5, fill: "currentColor" }),
        React.createElement("circle", { cx: 18.5, cy: 6.5, r: 1.5, fill: "currentColor" }),
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.3, d: "M6.65 6.65h11.7v11.7H6.65z" })));
}

export { Squares as default };
//# sourceMappingURL=Squares.js.map
