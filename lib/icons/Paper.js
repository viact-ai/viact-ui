import * as React from 'react';

function Paper({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 80 80", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "url(#paper_svg__a)", d: "M65.984 26.528 50.049 10.68c-.455-.453-.91-.679-1.594-.679H17.886c-2.504 0-4.552 2.038-4.552 4.528v50.944c0 2.49 2.048 4.528 4.552 4.528h44.228c2.504 0 4.553-2.038 4.553-4.528V28.113c0-.679-.228-1.132-.683-1.585ZM48.455 15.434l12.748 12.68H48.455v-12.68Z" }),
        React.createElement("path", { fill: "#fff", d: "M26.666 52.5h26.667v4.167H26.667V52.5Zm0-12.5h26.667v4.167H26.667V40Z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paper_svg__a", x1: 66.667, x2: 36.569, y1: 10, y2: 39.168, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })))));
}

export { Paper as default };
//# sourceMappingURL=Paper.js.map
