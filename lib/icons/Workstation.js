import * as React from 'react';

function Workstation({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "none", viewBox: "0 0 28 28", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "url(#workstation_svg__a)", d: "M0 0h28v28H0z" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "workstation_svg__a", width: 1, height: 1, patternContentUnits: "objectBoundingBox" },
                React.createElement("use", { xlinkHref: "#workstation_svg__b", transform: "scale(.00083)" })),
}

export { Workstation as default };
//# sourceMappingURL=Workstation.js.map