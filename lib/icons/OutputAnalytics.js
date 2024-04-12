import * as React from 'react';

function OutputAnalytics({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 40 40", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 40, height: 40, fill: "#56CCF2", rx: 8 }),
        React.createElement("g", { stroke: "#fff", strokeWidth: 1.5, clipPath: "url(#output-analytics_svg__a)" },
            React.createElement("circle", { cx: 13, cy: 25, r: 2 }),
            React.createElement("circle", { cx: 17, cy: 15, r: 2 }),
            React.createElement("circle", { cx: 23, cy: 25, r: 2 }),
            React.createElement("path", { d: "m14 23 2-6M18 16l4 8M24.5 23l2.5-4" }),
            React.createElement("circle", { cx: 28, cy: 17, r: 2 })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "output-analytics_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M8 8h24v24H8z" })))));
}

export { OutputAnalytics as default };
//# sourceMappingURL=OutputAnalytics.js.map
