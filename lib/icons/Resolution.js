import * as React from 'react';

function Resolution({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.102 12.241c1.864.717 2.986 1.852 4.398 3.594M9.102 12.24c-2.267-.871-3.973-1.099-5.519-1.073m5.519 1.073c1.767-1.943 2.928-3.345 7.315-3.99m-8.75-.583h.001" }),
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" })));
}

export { Resolution as default };
//# sourceMappingURL=Resolution.js.map
