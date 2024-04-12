import * as React from 'react';

function Hide({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#hide_svg__a)" },
            React.createElement("rect", { width: 20.5, height: 20.5, x: 1.75, y: 1.75, stroke: "currentColor", strokeWidth: 1.5, rx: 2.25 }),
            React.createElement("path", { fill: "currentColor", d: "M8 11h8v2H8z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "hide_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Hide as default };
//# sourceMappingURL=Hide.js.map
