import * as React from 'react';

function OutlineLock({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 27 35", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M23.25 12h-1.625V8.75A8.128 8.128 0 0 0 13.5.625 8.128 8.128 0 0 0 5.375 8.75V12H3.75A3.26 3.26 0 0 0 .5 15.25V31.5a3.26 3.26 0 0 0 3.25 3.25h19.5a3.26 3.26 0 0 0 3.25-3.25V15.25A3.26 3.26 0 0 0 23.25 12ZM8.625 8.75A4.868 4.868 0 0 1 13.5 3.875a4.868 4.868 0 0 1 4.875 4.875V12h-9.75V8.75ZM23.25 31.5H3.75V15.25h19.5V31.5Zm-9.75-4.875a3.26 3.26 0 0 0 3.25-3.25 3.26 3.26 0 0 0-3.25-3.25 3.26 3.26 0 0 0-3.25 3.25 3.26 3.26 0 0 0 3.25 3.25Z" })));
}

export { OutlineLock as default };
//# sourceMappingURL=OutlineLock.js.map
