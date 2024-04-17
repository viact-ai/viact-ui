import * as React from 'react';

function InfoCircle({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 36 36", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M18 6a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" }),
        React.createElement("path", { fill: "currentColor", d: "M18 20.07a1.3 1.3 0 0 1-1.3-1.3v-6a1.3 1.3 0 0 1 2.6 0v6a1.3 1.3 0 0 1-1.3 1.3ZM17.95 24.52a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" })));
}

export { InfoCircle as default };
//# sourceMappingURL=InfoCircle.js.map
