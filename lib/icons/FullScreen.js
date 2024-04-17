import * as React from 'react';

function FullScreen({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#fullScreen_svg__a)" },
            React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9.36 18.865H6v-3.521m12 0v3.521h-3.36m0-12.576H18V9.81m-12 0V6.29h3.36" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "fullScreen_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { FullScreen as default };
//# sourceMappingURL=FullScreen.js.map
