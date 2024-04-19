import * as React from 'react';

function Link({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 24, height: 24, fill: "#2B518E", rx: 12 }),
        React.createElement("path", { stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M13.03 10.97a2.91 2.91 0 0 0-4.118 0l-2.06 2.06a2.912 2.912 0 0 0 4.119 4.117L12 16.117" }),
        React.createElement("path", { stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M10.97 13.03a2.91 2.91 0 0 0 4.118 0l2.06-2.06a2.912 2.912 0 0 0-4.119-4.117L12 7.883" })));
}

export { Link as default };
//# sourceMappingURL=Link.js.map
