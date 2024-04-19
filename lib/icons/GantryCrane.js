import * as React from 'react';

function GantryCrane({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#F2C94C", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M30 15h1v-2h-1v-1h-3v1H15v-1h-3v1h-1v2h1v14h-1v2h5v-2h-1V15h5v1h.5v3.62c-.5.17-.81.63-.81 1.14 0 .44.23.84.61 1.06V23h.62c.34 0 .62.27.63.61a.619.619 0 0 1-.931.546.63.63 0 0 1-.229-.226.618.618 0 1 0-1.07.62c.33.57.94.92 1.6.92 1.02-.01 1.84-.85 1.83-1.87-.01-.77-.49-1.46-1.22-1.72v-.06c.59-.32.81-1.04.5-1.62-.11-.2-.29-.39-.5-.5V16H22v-1h5v14h-1v2h5v-2h-1zm-16 9.29v1.42l-1 1v-1.42zM13 29v-.76l1-1v1.42l-.34.34zm0-12.71 1-1v1.42l-1 1zm0 3 1-1v1.42l-1 1zm0 3 1-1v1.42l-1 1v-1.47zm16 2v1.42l-1 1v-1.42zM28 29v-.76l1-1v1.42l-.34.34zm0-12.71 1-1v1.42l-1 1zm0 3 1-1v1.42l-1 1zm0 3 1-1v1.42l-1 1v-1.47z" })));
}

export { GantryCrane as default };
//# sourceMappingURL=GantryCrane.js.map
