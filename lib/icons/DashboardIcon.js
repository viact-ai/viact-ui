import * as React from 'react';

function DashboardIcon({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M11.25 13.5h1.5v3h-1.5zM15 12h1.5v4.5H15zM7.5 9H9v7.5H7.5z" }),
        React.createElement("rect", { width: 16.5, height: 16.5, x: 3.75, y: 3.75, stroke: "currentColor", rx: 2.25 })));
}

export { DashboardIcon as default };
//# sourceMappingURL=DashboardIcon.js.map
