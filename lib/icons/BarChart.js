import * as React from 'react';

function BarChart({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 74 74", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 74, height: 74, fill: "currentColor", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M12.95 33.3h11.1v20.35h-11.1zM38.85 25.9h11.1v27.75h-11.1zM25.9 18.5H37v35.15H25.9zM51.8 33.3h11.1v20.35H51.8z" })));
}

export { BarChart as default };
//# sourceMappingURL=BarChart.js.map
