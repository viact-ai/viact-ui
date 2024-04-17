import * as React from 'react';

function Add({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M10.625 9.375V5h-1.25v4.375H5v1.25h4.375V15h1.25v-4.375H15v-1.25h-4.375Z" })));
}

export { Add as default };
//# sourceMappingURL=Add.js.map
