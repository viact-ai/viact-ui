import * as React from 'react';

function Excavator({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "none", viewBox: "0 0 39 35", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "url(#excavator_svg__a)", d: "M0-5h40v40H0z" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "excavator_svg__a", width: 1, height: 1, patternContentUnits: "objectBoundingBox" },
                React.createElement("use", { xlinkHref: "#excavator_svg__b", transform: "matrix(.0005 0 0 .0005 .125 .334)" })),
}

export { Excavator as default };
//# sourceMappingURL=Excavator.js.map