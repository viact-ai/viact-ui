import * as React from 'react';

function Upload({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#upload_svg__a)" },
            React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M16.25 9h1.875A1.875 1.875 0 0 1 20 10.875v9a1.875 1.875 0 0 1-1.875 1.875H6.875A1.875 1.875 0 0 1 5 19.875v-9A1.875 1.875 0 0 1 6.875 9H8.75m7.5-3L12.5 2.25 8.75 6m3.75 9.047V2.25" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "upload_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M.5 0h24v24H.5z" })))));
}

export { Upload as default };
//# sourceMappingURL=Upload.js.map
