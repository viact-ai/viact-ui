import * as React from 'react';

function ArrowRight({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#arrowRight_svg__a)" },
            React.createElement("path", { stroke: "currentColor", strokeWidth: 1.5, d: "m5.667 12 4-4-4-4" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "arrowRight_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h16v16H0z" })))));
}

export { ArrowRight as default };
//# sourceMappingURL=ArrowRight.js.map
