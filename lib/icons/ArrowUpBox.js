import * as React from 'react';

function ArrowUpBox({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 22, height: 22, x: 1, y: 1, stroke: "currentColor", strokeWidth: 2, rx: 3 }),
        React.createElement("path", { fill: "currentColor", d: "M16.219 10.74a.8.8 0 0 1-.604.24.86.86 0 0 1-.605-.262l-2.354-2.354v9.292q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V8.364L8.616 10.74a.81.81 0 0 1-.595.25.8.8 0 0 1-.593-.25.81.81 0 0 1-.25-.594.8.8 0 0 1 .25-.593l3.813-3.813a.7.7 0 0 1 .27-.177 1 1 0 0 1 .313-.052q.166 0 .312.052a.7.7 0 0 1 .271.177l3.834 3.834q.229.228.229.572 0 .345-.25.594" })));
}

export { ArrowUpBox as default };
//# sourceMappingURL=ArrowUpBox.js.map
