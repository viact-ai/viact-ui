import * as React from 'react';

function CameraFill({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M2.4 5.4a1.8 1.8 0 0 1 1.8-1.8h15.6a1.8 1.8 0 0 1 0 3.6H4.2a1.8 1.8 0 0 1-1.8-1.8m9.6 5.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2m-2.4 3.6a2.4 2.4 0 1 1 4.8 0 2.4 2.4 0 0 1-4.8 0m-6-6h16.8v4.8a8.4 8.4 0 0 1-16.8 0zM12 9.6a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6" })));
}

export { CameraFill as default };
//# sourceMappingURL=CameraFill.js.map
