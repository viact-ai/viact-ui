import * as React from 'react';

function Latitude({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 18 18", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 15.75a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5M3.45 5.25h11.1M2.25 9h13.5m-12.3 3.75h11.1" })));
}

export { Latitude as default };
//# sourceMappingURL=Latitude.js.map
