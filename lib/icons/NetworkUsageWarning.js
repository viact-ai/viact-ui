import * as React from 'react';

function NetworkUsageWarning({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#F2C94C", rx: 8 }),
        React.createElement("path", { stroke: "#fff", strokeWidth: 3, d: "m10 26.5 7-7 7 7L32.5 7" })));
}

export { NetworkUsageWarning as default };
//# sourceMappingURL=NetworkUsageWarning.js.map
