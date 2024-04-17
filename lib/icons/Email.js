import * as React from 'react';

function Email({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#email_svg__a)" },
            React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.6, d: "M3 19v-8.93a2 2 0 0 1 .89-1.664l7-4.666a2 2 0 0 1 2.22 0l7 4.666A2 2 0 0 1 21 10.07V19M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0-1.14.76a2 2 0 0 1-2.22 0l-1.14-.76" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "email_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Email as default };
//# sourceMappingURL=Email.js.map
