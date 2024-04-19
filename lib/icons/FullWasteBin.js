import * as React from 'react';

function FullWasteBin({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#219653", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M27.178 11.811a.65.65 0 0 0-.656-1.123l-15.6 9.1a.65.65 0 0 0-.322.562v7.8a3.25 3.25 0 0 0 3.25 3.25h14.3a3.25 3.25 0 0 0 3.25-3.25v-7.8a.65.65 0 0 0-.65-.65h-.65v-3.25a1.95 1.95 0 0 0-1.95-1.95h-2.6a1.95 1.95 0 0 0-1.95 1.95v.65h-3.25a1.95 1.95 0 0 0-1.95 1.95v.65h-4.745zM23.6 18.4v1.3h-3.9v-.65a.65.65 0 0 1 .65-.65zm1.3 1.3v-3.25a.65.65 0 0 1 .65-.65h2.6a.65.65 0 0 1 .65.65v3.25z" })));
}

export { FullWasteBin as default };
//# sourceMappingURL=FullWasteBin.js.map
