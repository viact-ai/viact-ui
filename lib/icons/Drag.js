import * as React from 'react';

function Drag({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", d: "M10 10H1m9 0V1m0 9v9m0-9h9M1 10l2.25 2.25M1 10l2.25-2.25M10 1l2.25 2.25M10 1 7.75 3.25M10 19l-2.25-2.25M10 19l2.25-2.25M19 10l-2.25-2.25M19 10l-2.25 2.25" })));
}

export { Drag as default };
//# sourceMappingURL=Drag.js.map
