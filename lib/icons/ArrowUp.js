import * as React from 'react';

function ArrowUp({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.5, d: "M12 10 8 6l-4 4" })));
}

export { ArrowUp as default };
//# sourceMappingURL=ArrowUp.js.map
