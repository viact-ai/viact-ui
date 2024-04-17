import * as React from 'react';

function HexagonThree({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.5, d: "M9.067 2.42 11.134 6 9.067 9.58H4.933L2.866 6l2.067-3.58h4.134ZM9.067 14.42 11.134 18l-2.067 3.58H4.933L2.866 18l2.067-3.58h4.134ZM19.067 8.42 21.134 12l-2.067 3.58h-4.134L12.866 12l2.067-3.58h4.134Z" })));
}

export { HexagonThree as default };
//# sourceMappingURL=HexagonThree.js.map
