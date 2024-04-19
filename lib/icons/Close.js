import * as React from 'react';

function Close({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 32 32", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#close_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "m17.796 15.94 8.91-8.91a1.222 1.222 0 0 0-1.723-1.724l-8.91 8.91-8.91-8.922a1.222 1.222 0 0 0-1.724 1.723l8.91 8.922-8.922 8.91a1.222 1.222 0 1 0 1.724 1.724l8.922-8.91 8.91 8.91a1.223 1.223 0 0 0 1.723-1.724z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "close_svg__a" },
                React.createElement("rect", { width: 32, height: 32, fill: "currentColor", rx: 16 })))));
}

export { Close as default };
//# sourceMappingURL=Close.js.map
