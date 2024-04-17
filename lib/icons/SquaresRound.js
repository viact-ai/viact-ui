import * as React from 'react';

function SquaresRound({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.8, d: "M6 4.9h12A1.1 1.1 0 0 1 19.1 6v12a1.1 1.1 0 0 1-1.1 1.1H6A1.1 1.1 0 0 1 4.9 18V6A1.1 1.1 0 0 1 6 4.9Z" })));
}

export { SquaresRound as default };
//# sourceMappingURL=SquaresRound.js.map
