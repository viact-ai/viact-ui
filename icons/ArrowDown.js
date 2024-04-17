import * as React from 'react';

function ArrowDown({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.5, d: "M2.5 6 8 11.5 13.5 6" })));
}

export { ArrowDown as default };
//# sourceMappingURL=ArrowDown.js.map
