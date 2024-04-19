import * as React from 'react';

function Google({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#google_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M15.671 6.545H8.035v3.273h4.328C11.671 12 9.962 12.727 8 12.727a4.726 4.726 0 1 1 3.035-8.346l2.378-2.265A8 8 0 1 0 8 16c4.411 0 8.4-2.909 7.671-9.455" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "google_svg__a" },
                React.createElement("path", { fill: "currentColor", d: "M0 0h16v16H0z" })))));
}

export { Google as default };
//# sourceMappingURL=Google.js.map
