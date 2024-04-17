import * as React from 'react';

function Feedback({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 19", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M4.411 14.25H16.75a1.5 1.5 0 0 0 1.5-1.5V3a1.5 1.5 0 0 0-1.5-1.5H3.25A1.5 1.5 0 0 0 1.75 3v13.38l2.661-2.13Zm.527 1.5-3.47 2.775A.75.75 0 0 1 .25 17.94V3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v9.75a3 3 0 0 1-3 3H4.937Z" })));
}

export { Feedback as default };
//# sourceMappingURL=Feedback.js.map
