import * as React from 'react';

function PenUnderline({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M1.5 19.5h21V21h-21zM19.05 6.75c.6-.6.6-1.5 0-2.1l-2.7-2.7c-.6-.6-1.5-.6-2.1 0L3 13.2V18h4.8zM15.3 3 18 5.7l-2.25 2.25-2.7-2.7zM4.5 16.5v-2.7L12 6.3 14.7 9l-7.5 7.5z" })));
}

export { PenUnderline as default };
//# sourceMappingURL=PenUnderline.js.map
