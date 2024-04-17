import * as React from 'react';

function Sort({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#sort_svg__a)" },
            React.createElement("g", { clipPath: "url(#sort_svg__b)" },
                React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.7, d: "m3 9 4-4m0 0 4 4M7 5v14m14-4-4 4m0 0-4-4m4 4V5" }))),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "sort_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })),
            React.createElement("clipPath", { id: "sort_svg__b" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Sort as default };
//# sourceMappingURL=Sort.js.map
