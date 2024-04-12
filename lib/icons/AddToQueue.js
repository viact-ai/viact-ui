import * as React from 'react';

function AddToQueue({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M21 3H3a1.5 1.5 0 0 0-1.5 1.5v12A1.5 1.5 0 0 0 3 18h6v3H6v1.5h12V21h-3v-3h6a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 21 3Zm-7.5 18h-3v-3h3v3Zm7.5-4.5H3v-12h18v12Z" }),
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.5, d: "M11.967 6.262v8.348M16.174 10.402H7.826" })));
}

export { AddToQueue as default };
//# sourceMappingURL=AddToQueue.js.map
