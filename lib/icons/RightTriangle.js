import * as React from 'react';

function RightTriangle({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3.334 3.8c0-.759.93-1.123 1.445-.565L17.043 16.52a.834.834 0 0 1-.613 1.398H4.167a.833.833 0 0 1-.833-.833z" })));
}

export { RightTriangle as default };
//# sourceMappingURL=RightTriangle.js.map
