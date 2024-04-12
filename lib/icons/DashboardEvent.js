import * as React from 'react';

function DashboardEvent({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#56CCF2", rx: 8 }),
        React.createElement("rect", { width: 18, height: 18, x: 12, y: 12, fill: "#fff", rx: 4 }),
        React.createElement("path", { stroke: "#56CCF2", strokeWidth: 1.5, d: "M22 12v6H12" })));
}

export { DashboardEvent as default };
//# sourceMappingURL=DashboardEvent.js.map
