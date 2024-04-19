import * as React from 'react';

function ViActShare({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "#27AE60", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3.334 5c0 1.38 2.985 2.5 6.666 2.5s6.667-1.12 6.667-2.5S13.682 2.5 10 2.5 3.334 3.62 3.334 5" }),
        React.createElement("path", { stroke: "#27AE60", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3.334 5v5c0 1.38 2.985 2.5 6.666 2.5q.451 0 .888-.022m5.779-1.645V5" }),
        React.createElement("path", { stroke: "#27AE60", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3.334 10v5c0 1.38 2.985 2.5 6.666 2.5m3.334.833 4.166-4.166m0 0v3.75m0-3.75h-3.75" })));
}

export { ViActShare as default };
//# sourceMappingURL=ViActShare.js.map
