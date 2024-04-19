import * as React from 'react';

function Tick({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 12 12", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m2.063 6.563 2.625 2.625 5.25-5.626" })));
}

export { Tick as default };
//# sourceMappingURL=Tick.js.map
