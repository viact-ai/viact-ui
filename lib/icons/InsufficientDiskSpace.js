import * as React from 'react';

function InsufficientDiskSpace({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#F2C94C", rx: 8 }),
        React.createElement("g", { fill: "#fff", clipPath: "url(#insufficient-disk-space_svg__a)" },
            React.createElement("path", { d: "M28.716 14.386a1.28 1.28 0 0 0-1.227-.914H13.511a1.28 1.28 0 0 0-1.233.94l-1.815 7.366h20.074zM10.278 23.056v4.472a1.28 1.28 0 0 0 1.278 1.278h17.888a1.28 1.28 0 0 0 1.278-1.278v-4.472zm17.889 3.194H25.61v-1.278h2.556z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "insufficient-disk-space_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M9 9h23v23H9z" })))));
}

export { InsufficientDiskSpace as default };
//# sourceMappingURL=InsufficientDiskSpace.js.map
