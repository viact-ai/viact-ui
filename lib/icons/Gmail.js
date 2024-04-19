import * as React from 'react';

function Gmail({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#EB5757", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M31 13H11v16h20zm-2 4-8 5-8-5v-2l8 5 8-5z" })));
}

export { Gmail as default };
//# sourceMappingURL=Gmail.js.map
