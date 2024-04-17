import * as React from 'react';

function Enter({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 22 18", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M6.5 3.375V8.25h7.19l-2.47-2.47a.75.75 0 0 1 1.06-1.06l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.06-1.06l2.47-2.47H6.5v4.875a2.628 2.628 0 0 0 2.625 2.625h9.75a2.627 2.627 0 0 0 2.625-2.625V3.375A2.627 2.627 0 0 0 18.875.75h-9.75A2.628 2.628 0 0 0 6.5 3.375ZM1.25 8.25a.75.75 0 0 0 0 1.5H6.5v-1.5H1.25Z" })));
}

export { Enter as default };
//# sourceMappingURL=Enter.js.map
