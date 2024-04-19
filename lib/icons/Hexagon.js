import * as React from 'react';

function Hexagon({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.5, d: "m16.167 19.083 4.166-7.084-4.166-7.083H7.833l-4.166 7.083 4.166 7.084z" }),
        React.createElement("path", { stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 14.083a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z" })));
}

export { Hexagon as default };
//# sourceMappingURL=Hexagon.js.map
