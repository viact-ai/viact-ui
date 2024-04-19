import * as React from 'react';

function Pause({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#pause_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M10 16a.97.97 0 0 0 .713-.288A.96.96 0 0 0 11 15V8.975a.93.93 0 0 0-.288-.7A1 1 0 0 0 10 8a.97.97 0 0 0-.713.288A.96.96 0 0 0 9 9v6.025q0 .425.288.7T10 16m4 0a.97.97 0 0 0 .713-.288A.96.96 0 0 0 15 15V8.975a.93.93 0 0 0-.288-.7A1 1 0 0 0 14 8a.97.97 0 0 0-.713.288A.96.96 0 0 0 13 9v6.025q0 .425.288.7T14 16m-2 6a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.8 9.8 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.8 9.8 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.138 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.138A9.7 9.7 0 0 1 12 22m0-2q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 3.325 2.337 5.663T12 20" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "pause_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Pause as default };
//# sourceMappingURL=Pause.js.map
