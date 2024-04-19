import * as React from 'react';

function Cliff({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#9B51E0", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "m12 16.5 18-3-2.727 12H12z" }),
        React.createElement("circle", { cx: 30, cy: 12, r: 1.5, fill: "#fff" }),
        React.createElement("circle", { cx: 27, cy: 25.5, r: 1.5, fill: "#fff" }),
        React.createElement("circle", { cx: 12, cy: 25.5, r: 1.5, fill: "#fff" }),
        React.createElement("circle", { cx: 12, cy: 16.5, r: 1.5, fill: "#fff" })));
}

export { Cliff as default };
//# sourceMappingURL=Cliff.js.map
