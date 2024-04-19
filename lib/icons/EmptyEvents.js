import * as React from 'react';

function EmptyEvents({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 64 64", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "url(#empty-events_svg__a)", d: "M12 0A12 12 0 0 0 0 12v32a12 12 0 0 0 12 12h12.204A10 10 0 0 1 24 54V37.828l-5.584 5.584a2 2 0 0 1-2.764.064l-3-2.74a2 2 0 0 1 2.696-2.952l1.588 1.452 5.648-5.652A2 2 0 0 1 24 33v-3c0-4.872 3.508-8.444 7.328-10.568C35.288 17.232 40.48 16 46 16c3.548 0 6.96.512 10 1.46V12A12 12 0 0 0 44 0zm44 21.684C53.14 20.62 49.7 20 46 20c-9.94 0-18 4.48-18 10s8.06 10 18 10 18-4.48 18-10c0-3.468-3.176-6.52-8-8.316m-30.584-8.1a2 2 0 0 1 0 2.832l-7 7a2 2 0 0 1-2.764.06l-3-2.74a1.999 1.999 0 1 1 2.696-2.952l1.588 1.448 5.648-5.648a2 2 0 0 1 2.832 0M46 44c5.52 0 10.712-1.236 14.672-3.432a18.2 18.2 0 0 0 3.332-2.36L64 54c0 5.524-8.06 10-18 10s-18-4.48-18-10V38.22c1.02.92 2.16 1.7 3.328 2.352 3.96 2.2 9.152 3.432 14.672 3.432z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "empty-events_svg__a", x1: 64.004, x2: 32.004, y1: 0, y2: 34.891, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })))));
}

export { EmptyEvents as default };
//# sourceMappingURL=EmptyEvents.js.map
