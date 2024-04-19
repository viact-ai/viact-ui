import * as React from 'react';

function Next({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#next_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "m13.3 5.303-1.4 1.4 4.3 4.3H4v2h12.2l-4.3 4.3 1.4 1.4 6.7-6.7z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "next_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Next as default };
//# sourceMappingURL=Next.js.map
