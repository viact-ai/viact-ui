import * as React from 'react';

function OutputIntegrations({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 40 40", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 40, height: 40, fill: "#27AE60", rx: 8 }),
        React.createElement("path", { stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12.8 14.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6m.9 13.5a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4m12.6.9a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4m-7.2-7.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2m5.4-7.2a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M15.5 23.15l1.8-1.8m-3.15-7.2 1.8 1.8zm8.55.45-.9.9zm1.8 9.675L21.8 20.9z" })));
}

export { OutputIntegrations as default };
//# sourceMappingURL=OutputIntegrations.js.map
