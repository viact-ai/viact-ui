import * as React from 'react';

function SendMessage({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 14 21 3M10 14l3.5 7a.551.551 0 0 0 1 0L21 3M10 14l-7-3.5a.55.55 0 0 1 0-1L21 3" })));
}

export { SendMessage as default };
//# sourceMappingURL=SendMessage.js.map
