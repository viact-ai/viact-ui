import * as React from 'react';

function AutoCapture({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#F2C94C", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M14 11.2h14a2.8 2.8 0 0 1 2.8 2.8v14a2.8 2.8 0 0 1-2.8 2.8H14a2.8 2.8 0 0 1-2.8-2.8V14a2.8 2.8 0 0 1 2.8-2.8m2.1 2.8a2.1 2.1 0 0 0-2.1 2.1v2.8a.7.7 0 0 0 1.4 0v-2.8a.7.7 0 0 1 .7-.7h2.8a.7.7 0 0 0 0-1.4zm7 0a.7.7 0 1 0 0 1.4h2.8a.7.7 0 0 1 .7.7v2.8a.7.7 0 0 0 1.4 0v-2.8a2.1 2.1 0 0 0-2.1-2.1zm-7.7 9.1a.7.7 0 1 0-1.4 0v2.8a2.1 2.1 0 0 0 2.1 2.1h2.8a.7.7 0 0 0 0-1.4h-2.8a.7.7 0 0 1-.7-.7zm12.6 0a.7.7 0 1 0-1.4 0v2.8a.7.7 0 0 1-.7.7h-2.8a.7.7 0 1 0 0 1.4h2.8a2.1 2.1 0 0 0 2.1-2.1z" })));
}

export { AutoCapture as default };
//# sourceMappingURL=AutoCapture.js.map
