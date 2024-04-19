import * as React from 'react';

function ArrowBack({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#000", d: "M5.25 11.25h15a.75.75 0 1 1 0 1.5h-15a.75.75 0 1 1 0-1.5" }),
        React.createElement("path", { fill: "#000", d: "m5.562 12 6.22 6.22a.75.75 0 1 1-1.062 1.062l-6.75-6.75a.75.75 0 0 1 0-1.062l6.75-6.75a.751.751 0 0 1 1.062 1.062z" })));
}

export { ArrowBack as default };
//# sourceMappingURL=ArrowBack.js.map
