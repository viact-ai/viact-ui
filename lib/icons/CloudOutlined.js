import * as React from 'react';

function CloudOutlined({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#cloudOutlined_svg__a)" },
            React.createElement("g", { fill: "currentColor", fillRule: "evenodd", clipPath: "url(#cloudOutlined_svg__b)", clipRule: "evenodd" },
                React.createElement("path", { d: "M19.98 11.036v1.094c-.396 2.148-1.672 3.417-3.828 3.808-1.015.02-2.03.026-3.047.02v-1.29c.99.007 1.98 0 2.97-.019 1.438-.293 2.304-1.159 2.597-2.597.131-1.555-.5-2.668-1.895-3.34-.32-.11-.646-.2-.976-.274a.692.692 0 0 1-.254-.293c-.568-2.495-2.098-4.025-4.59-4.59-2.313-.304-4.169.47-5.566 2.325a5.925 5.925 0 0 0-1.016 3.359.703.703 0 0 1-.41.45c-1.279.03-2.144.635-2.598 1.816-.286 1.465.254 2.487 1.621 3.066.116.031.234.057.352.078 1.185.02 2.37.026 3.555.02v1.289a172.2 172.2 0 0 1-3.672-.02C1.419 15.586.338 14.512-.02 12.716V11.66c.36-1.726 1.4-2.78 3.125-3.164.263-2.585 1.539-4.48 3.829-5.684 2.75-1.186 5.288-.847 7.617 1.016a7.122 7.122 0 0 1 2.11 3.457c1.865.583 2.972 1.833 3.32 3.75Z", opacity: 0.965 }),
                React.createElement("path", { d: "M9.98 9.668c.137.024.267.07.391.137.867.86 1.726 1.726 2.578 2.597-.286.313-.586.612-.898.899a68.72 68.72 0 0 1-1.387-1.367c-.02 1.966-.026 3.932-.02 5.898H9.356c.007-1.98 0-3.958-.02-5.938L7.93 13.302c-.308-.295-.601-.6-.88-.918a114.76 114.76 0 0 1 2.5-2.54.87.87 0 0 1 .43-.175Z", opacity: 0.965 }))),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "cloudOutlined_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" })),
            React.createElement("clipPath", { id: "cloudOutlined_svg__b" },
                React.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" })))));
}

export { CloudOutlined as default };
//# sourceMappingURL=CloudOutlined.js.map
