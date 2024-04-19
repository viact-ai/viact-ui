import * as React from 'react';

function AiModule({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 80 80", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "url(#AIModule_svg__a)", d: "M52 28H28v24h24z" }),
        React.createElement("path", { fill: "url(#AIModule_svg__b)", fillRule: "evenodd", d: "M28 8a4 4 0 1 1 8 0v4h8V8a4 4 0 1 1 8 0v4h8a8 8 0 0 1 8 8v8h4a4 4 0 1 1 0 8h-4v8h4a4 4 0 1 1 0 8h-4v8a8 8 0 0 1-8 8h-8v4a4 4 0 1 1-8 0v-4h-8v4a4 4 0 1 1-8 0v-4h-8a8 8 0 0 1-8-8v-8H8a4 4 0 1 1 0-8h4v-8H8a4 4 0 1 1 0-8h4v-8a8 8 0 0 1 8-8h8zm-8 12h40v40H20z", clipRule: "evenodd" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "AIModule_svg__a", x1: 52, x2: 40, y1: 28, y2: 41.083, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "AIModule_svg__b", x1: 76, x2: 40, y1: 4, y2: 43.25, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })))));
}

export { AiModule as default };
//# sourceMappingURL=AiModule.js.map
