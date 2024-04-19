import * as React from 'react';

function Search({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 15 15", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M6.5 12.5a5.96 5.96 0 0 0 3.673-1.266l3.297 3.297 1.06-1.06-3.297-3.297A5.96 5.96 0 0 0 12.5 6.5c0-3.308-2.692-6-6-6s-6 2.692-6 6 2.692 6 6 6M6.5 2C8.982 2 11 4.018 11 6.5S8.982 11 6.5 11A4.505 4.505 0 0 1 2 6.5C2 4.018 4.018 2 6.5 2" })));
}

export { Search as default };
//# sourceMappingURL=Search.js.map
