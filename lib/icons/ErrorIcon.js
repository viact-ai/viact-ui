import * as React from 'react';

function ErrorIcon({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 90 90", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#errorIcon_svg__a)" },
            React.createElement("path", { fill: "#EB5757", d: "M45 5.25a40 40 0 1 0 0 80 40 40 0 0 0 0-80M41.5 22a3.5 3.5 0 0 1 7 0v30a3.5 3.5 0 1 1-7 0zM45 71.5a4.5 4.5 0 1 1 0-8.999 4.5 4.5 0 0 1 0 8.999" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "errorIcon_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h90v90H0z" })))));
}

export { ErrorIcon as default };
//# sourceMappingURL=ErrorIcon.js.map
