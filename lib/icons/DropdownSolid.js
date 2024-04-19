import * as React from 'react';

function DropdownSolid({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#dropdownSolid_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M6.984 9.984h10.032L12 15z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "dropdownSolid_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { DropdownSolid as default };
//# sourceMappingURL=DropdownSolid.js.map
