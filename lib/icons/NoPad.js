import * as React from 'react';

function NoPad({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#F2C94C", rx: 8 }),
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M12.75 15.5a2.75 2.75 0 0 1 2.75-2.75h11a2.75 2.75 0 0 1 2.75 2.75v11a2.75 2.75 0 0 1-2.75 2.75h-11a2.75 2.75 0 0 1-2.75-2.75z", clipRule: "evenodd" })));
}

export { NoPad as default };
//# sourceMappingURL=NoPad.js.map
