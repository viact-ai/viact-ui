import * as React from 'react';

function Comment({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 13 11", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M.875 4.5c0-1.4 0-2.1.272-2.635A2.5 2.5 0 0 1 2.24.773C2.775.5 3.475.5 4.875.5h3.25c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093c.273.535.273 1.235.273 2.635v.75c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273H3.634a.63.63 0 0 0-.442.183l-1.25 1.25a.625.625 0 0 1-1.067-.442V4.5M4.625 3a.625.625 0 0 0 0 1.25h3.75a.625.625 0 0 0 0-1.25zm0 2.5a.625.625 0 0 0 0 1.25H6.5a.625.625 0 0 0 0-1.25z", clipRule: "evenodd" })));
}

export { Comment as default };
//# sourceMappingURL=Comment.js.map
