import * as React from 'react';

function Minus({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 12 12", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M9 6.499H3a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1" })));
}

export { Minus as default };
//# sourceMappingURL=Minus.js.map
