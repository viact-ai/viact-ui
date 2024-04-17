import * as React from 'react';

function OpenEdge({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#092371", rx: 8 }),
        React.createElement("path", { stroke: "#fff", strokeWidth: 2.5, d: "M16.186 13H12v15h19V13h-8.695" })));
}

export { OpenEdge as default };
//# sourceMappingURL=OpenEdge.js.map
