import * as React from 'react';

function File({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 16.5, height: 16.5, x: 3.75, y: 3.75, stroke: "currentColor", strokeWidth: 1.5, rx: 3.25 }),
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.5, d: "M3.75 7A3.25 3.25 0 0 1 7 3.75h5.25v4.5h-8.5z" })));
}

export { File as default };
//# sourceMappingURL=File.js.map
