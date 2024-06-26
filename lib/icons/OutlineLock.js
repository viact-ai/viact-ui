import * as React from 'react';

function OutlineLock({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 27 35", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M23.25 12h-1.625V8.75A8.13 8.13 0 0 0 13.5.625 8.13 8.13 0 0 0 5.375 8.75V12H3.75A3.26 3.26 0 0 0 .5 15.25V31.5a3.26 3.26 0 0 0 3.25 3.25h19.5a3.26 3.26 0 0 0 3.25-3.25V15.25A3.26 3.26 0 0 0 23.25 12M8.625 8.75A4.87 4.87 0 0 1 13.5 3.875a4.87 4.87 0 0 1 4.875 4.875V12h-9.75zM23.25 31.5H3.75V15.25h19.5zm-9.75-4.875a3.26 3.26 0 0 0 3.25-3.25 3.26 3.26 0 0 0-3.25-3.25 3.26 3.26 0 0 0-3.25 3.25 3.26 3.26 0 0 0 3.25 3.25" })));
}

export { OutlineLock as default };
//# sourceMappingURL=OutlineLock.js.map
