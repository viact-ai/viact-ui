import * as React from 'react';

function Dashboard({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20.4 18.74v-6.492c0-.452-.093-.9-.274-1.314a3.317 3.317 0 0 0-.779-1.1l-6.193-5.78a1.691 1.691 0 0 0-2.308 0l-6.193 5.78c-.333.311-.598.685-.779 1.1a3.284 3.284 0 0 0-.274 1.314v6.493c0 .44.177.862.492 1.173a1.69 1.69 0 0 0 1.188.486h13.44a1.69 1.69 0 0 0 1.188-.486 1.65 1.65 0 0 0 .492-1.173Z" })));
}

export { Dashboard as default };
//# sourceMappingURL=Dashboard.js.map
