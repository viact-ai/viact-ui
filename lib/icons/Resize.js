import * as React from 'react';

function Resize({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 17.5, cy: 7.5, r: 1.5, fill: "currentColor" }),
        React.createElement("circle", { cx: 17.5, cy: 17.5, r: 1.5, fill: "currentColor" }),
        React.createElement("circle", { cx: 7.5, cy: 17.5, r: 1.5, fill: "currentColor" }),
        React.createElement("circle", { cx: 12.5, cy: 12.5, r: 1.5, fill: "currentColor" }),
        React.createElement("circle", { cx: 17.5, cy: 12.5, r: 1.5, fill: "currentColor" }),
        React.createElement("circle", { cx: 12.5, cy: 17.5, r: 1.5, fill: "currentColor" })));
}

export { Resize as default };
//# sourceMappingURL=Resize.js.map
