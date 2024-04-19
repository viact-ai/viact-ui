import * as React from 'react';

function ChangeLog({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "m19.795 7.958-4.78-4.754A.62.62 0 0 0 14.537 3H5.366C4.615 3 4 3.611 4 4.358v15.284C4 20.389 4.615 21 5.366 21h13.268c.751 0 1.366-.611 1.366-1.358V8.434a.62.62 0 0 0-.205-.476M14.537 4.63l3.824 3.804h-3.824zm4.097 15.012H5.366V4.358h7.805v4.076c0 .747.614 1.358 1.366 1.358h4.097z" }),
        React.createElement("path", { fill: "currentColor", d: "M8 15.75h8V17H8zM8 12h8v1.25H8z" })));
}

export { ChangeLog as default };
//# sourceMappingURL=ChangeLog.js.map
