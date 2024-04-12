import * as React from 'react';

function Camera2({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("mask", { id: "camera2_svg__a", width: 22, height: 21, x: 2, y: 1, maskUnits: "userSpaceOnUse", style: {
                maskType: 'alpha',
            } },
            React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m3.5 10 13.237 8.825a.5.5 0 0 0 .535.012L22 16M3 13v8-8Zm0 3.5h3.5l2-3-5.5 3Z" }),
            React.createElement("path", { fill: "currentColor", stroke: "currentColor", strokeWidth: 2, d: "M3.54 6.36a.5.5 0 0 1-.056-.79l3.73-3.316a.5.5 0 0 1 .606-.045l13.533 8.866a.5.5 0 0 1-.006.84l-4.572 2.91a.5.5 0 0 1-.546-.006L3.54 6.36Z" })),
        React.createElement("g", { mask: "url(#camera2_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M0 0h24v24H0V0Z" }))));
}

export { Camera2 as default };
//# sourceMappingURL=Camera2.js.map
