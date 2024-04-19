import * as React from 'react';

function DirtyWheelTruck({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#219653", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M29 16.998h-5v6H11v3h1a3 3 0 1 0 6 0h6a3 3 0 1 0 6 0h2v-5zm-14 10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-1-6.5v-2.5h2.5l1.96 2.5zm1-5h-4v6H12l-1.43-5H10v-2h12l1-1h4z" })));
}

export { DirtyWheelTruck as default };
//# sourceMappingURL=DirtyWheelTruck.js.map
