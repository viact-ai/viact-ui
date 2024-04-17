import * as React from 'react';

function AntiCollision({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#9B51E0", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M25.316 22.23 32 19.218l-7.38-.137 1.95-4.383-3.9 2.192.14-5.891-2.646 4.932-3.898-4.932 1.67 6.301-6.544-1.643 5.291 4.52L10 21.683l6.126 1.37-4.316 6.575 6.683-4.383.14 5.753L21 25.656l2.645 3.972v-4.794l4.874 2.191-3.203-4.794Z" })));
}

export { AntiCollision as default };
//# sourceMappingURL=AntiCollision.js.map
