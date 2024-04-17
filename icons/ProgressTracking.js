import * as React from 'react';

function ProgressTracking({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#F2994A", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M21 11.375A9.625 9.625 0 1 0 30.625 21 9.636 9.636 0 0 0 21 11.375Zm0 17.875a8.25 8.25 0 1 1 0-16.5V21l5.83 5.83A8.225 8.225 0 0 1 21 29.25Z" })));
}

export { ProgressTracking as default };
//# sourceMappingURL=ProgressTracking.js.map
