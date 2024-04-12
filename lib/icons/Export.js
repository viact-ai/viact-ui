import * as React from 'react';

function Export({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#export_svg__a)" },
            React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15.75 9h1.875a1.875 1.875 0 0 1 1.875 1.875v9a1.875 1.875 0 0 1-1.875 1.875H6.375A1.875 1.875 0 0 1 4.5 19.875v-9A1.875 1.875 0 0 1 6.375 9H8.25m7.5-3L12 2.25 8.25 6M12 15.047V2.25" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "export_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Export as default };
//# sourceMappingURL=Export.js.map
