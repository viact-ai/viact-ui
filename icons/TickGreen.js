import * as React from 'react';

function TickGreen({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 90 90", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#tickGreen_svg__a)" },
            React.createElement("path", { fill: "#27AE60", fillRule: "evenodd", d: "M45 3.75C22.219 3.75 3.75 22.219 3.75 45S22.219 86.25 45 86.25 86.25 67.781 86.25 45 67.781 3.75 45 3.75Zm17.88 34.275a3.75 3.75 0 1 0-5.76-4.8L40.995 52.571l-8.344-8.347a3.75 3.75 0 0 0-5.302 5.302l11.25 11.25a3.75 3.75 0 0 0 5.531-.251l18.75-22.5Z", clipRule: "evenodd" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "tickGreen_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h90v90H0z" })))));
}

export { TickGreen as default };
//# sourceMappingURL=TickGreen.js.map
