import * as React from 'react';

function Device({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 12, cy: 12, r: 9.25, stroke: "currentColor", strokeWidth: 1.5 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 5.25, stroke: "currentColor", strokeWidth: 1.5 })));
}

export { Device as default };
//# sourceMappingURL=Device.js.map
