import * as React from 'react';

function ViTag({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "none", viewBox: "0 0 28 22", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "url(#viTag_svg__a)", d: "M.667 0h26.667v21.111H.667z" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "viTag_svg__a", width: 1, height: 1, patternContentUnits: "objectBoundingBox" },
                React.createElement("use", { xlinkHref: "#viTag_svg__b", transform: "matrix(.01176 0 0 .01486 0 -.005)" })),
            React.createElement("image", { xlinkHref: "data:image/png;base64,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", id: "viTag_svg__b", width: 85, height: 68 }))));
}

export { ViTag as default };
//# sourceMappingURL=ViTag.js.map