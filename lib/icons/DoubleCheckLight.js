import * as React from 'react';

function DoubleCheckLight({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m4.188 14.188 3.125 3.124m4.375-5 3.124-3.124m-5.624 5 3.124 3.124 7.5-8.125" })));
}

export { DoubleCheckLight as default };
//# sourceMappingURL=DoubleCheckLight.js.map
