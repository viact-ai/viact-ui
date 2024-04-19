import * as React from 'react';

function NoSafetyJacket({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#F2C94C", rx: 8 }),
        React.createElement("mask", { id: "no-safety-jacket_svg__a", width: 18, height: 22, x: 12, y: 10, maskUnits: "userSpaceOnUse", style: {
                maskType: 'alpha',
            } },
            React.createElement("path", { fill: "#fff", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", d: "M27 11.004h-2.5l-3.5 10v10h8v-12.5l-2-3zm-12 0h2.5l3.5 10v10h-8v-12.5l2-3z" })),
        React.createElement("g", { mask: "url(#no-safety-jacket_svg__a)" },
            React.createElement("path", { fill: "#fff", d: "M9 9h33v33H9z" }))));
}

export { NoSafetyJacket as default };
//# sourceMappingURL=NoSafetyJacket.js.map
