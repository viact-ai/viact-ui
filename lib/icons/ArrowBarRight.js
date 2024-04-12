import * as React from 'react';

function ArrowBarRight({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M20.25 22.5a.75.75 0 0 0 .75-.75V2.25a.75.75 0 1 0-1.5 0v19.5a.75.75 0 0 0 .75.75Z", clipRule: "evenodd" }),
        React.createElement("path", { fill: "currentColor", d: "M4.718 12.531a.75.75 0 0 1 .53-1.28h8.69l-3.22-3.219A.75.75 0 1 1 11.78 6.97l4.5 4.5a.751.751 0 0 1 0 1.062l-4.5 4.5a.75.75 0 1 1-1.062-1.062l3.22-3.22h-8.69a.75.75 0 0 1-.53-.219Z" })));
}

export { ArrowBarRight as default };
//# sourceMappingURL=ArrowBarRight.js.map
