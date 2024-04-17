import * as React from 'react';

function DefaultEngine({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#E9E9E9", rx: 8 }),
        React.createElement("circle", { cx: 21.5, cy: 20.5, r: 8.5, fill: "#D9D9D9" })));
}

export { DefaultEngine as default };
//# sourceMappingURL=DefaultEngine.js.map
