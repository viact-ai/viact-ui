import * as React from 'react';

function Adjust({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#adjust_svg__a)" },
            React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21.143 12.57h-3.429m-10.285-8A1.143 1.143 0 0 1 8.57 5.713V8a1.143 1.143 0 1 1-2.285 0V5.713A1.143 1.143 0 0 1 7.429 4.57m13.714 2.286H8.57zm-14.857 0H2.857zm1.143 9.143a1.143 1.143 0 0 1 1.142 1.143v2.285a1.143 1.143 0 1 1-2.285 0v-2.285a1.143 1.143 0 0 1 1.143-1.143m13.714 2.286H8.57zm-14.857 0H2.857zm10.286-8a1.143 1.143 0 0 1 1.142 1.143v2.285a1.143 1.143 0 1 1-2.285 0v-2.285a1.143 1.143 0 0 1 1.143-1.143m-1.143 2.285H2.857z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "adjust_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Adjust as default };
//# sourceMappingURL=Adjust.js.map
