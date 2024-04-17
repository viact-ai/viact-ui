import * as React from 'react';

function CarbonBuildingInsights({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 26 26", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { stroke: "currentColor", strokeWidth: 2 },
            React.createElement("rect", { width: 10, height: 20, x: 13, y: 3, rx: 1 }),
            React.createElement("path", { fill: "#fff", d: "m3.553 6.342 10-5A1 1 0 0 1 15 2.236v21.528a1 1 0 0 1-1.447.894l-10-5A1 1 0 0 1 3 18.764V7.236a1 1 0 0 1 .553-.894Z" }))));
}

export { CarbonBuildingInsights as default };
//# sourceMappingURL=CarbonBuildingInsights.js.map
