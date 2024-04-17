import * as React from 'react';

function Vitag2({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 20, height: 13.75, x: 2, y: 5.499, fill: "currentColor", rx: 2 }),
        React.createElement("ellipse", { cx: 4.94, cy: 4.875, fill: "currentColor", rx: 1.765, ry: 1.875 }),
        React.createElement("ellipse", { cx: 4.94, cy: 18.625, fill: "currentColor", rx: 1.765, ry: 1.875 }),
        React.createElement("ellipse", { cx: 12, cy: 4.875, fill: "currentColor", rx: 1.765, ry: 1.875 }),
        React.createElement("ellipse", { cx: 12, cy: 18.625, fill: "currentColor", rx: 1.765, ry: 1.875 }),
        React.createElement("ellipse", { cx: 19.058, cy: 4.875, fill: "currentColor", rx: 1.765, ry: 1.875 }),
        React.createElement("ellipse", { cx: 19.058, cy: 18.625, fill: "currentColor", rx: 1.765, ry: 1.875 })));
}

export { Vitag2 as default };
//# sourceMappingURL=Vitag2.js.map
