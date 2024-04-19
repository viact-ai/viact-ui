import * as React from 'react';

function DrawZone({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#draw-zone_svg__a)" },
            React.createElement("circle", { cx: 4.5, cy: 3.5, r: 1.5, fill: "currentColor" }),
            React.createElement("circle", { cx: 4.5, cy: 15.5, r: 1.5, fill: "currentColor" }),
            React.createElement("circle", { cx: 16.5, cy: 15.5, r: 1.5, fill: "currentColor" }),
            React.createElement("circle", { cx: 16.5, cy: 3.5, r: 1.5, fill: "currentColor" }),
            React.createElement("path", { stroke: "currentColor", strokeWidth: 1.3, d: "M4.65 3.65h11.7v11.7H4.65z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "draw-zone_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" })))));
}

export { DrawZone as default };
//# sourceMappingURL=DrawZone.js.map
