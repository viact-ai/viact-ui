import * as React from 'react';

function Window({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.3, d: "M5.65 5.65h13.7v13.7H5.65z" }),
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.3, d: "M12.65 5.65h6.7v13.7h-6.7z" })));
}

export { Window as default };
//# sourceMappingURL=Window.js.map
