import * as React from 'react';

function User2({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 22", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", d: "M10 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM15 13h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 16.734 21H3.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 4.649 13H5" })));
}

export { User2 as default };
//# sourceMappingURL=User2.js.map
