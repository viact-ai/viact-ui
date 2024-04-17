import * as React from 'react';

function Indicator({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 176", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeWidth: 3, d: "M11.5 172V0" }),
        React.createElement("path", { fill: "currentColor", d: "M8 8a8 8 0 0 1-8-8h23a8 8 0 0 1-8 8H8Z" })));
}

export { Indicator as default };
//# sourceMappingURL=Indicator.js.map
