import * as React from 'react';

function Expand2({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#fff", d: "M13.97 11.06a.728.728 0 0 1-1.03-1.03l5.817-5.817a.729.729 0 0 1 1.03 1.03zm-8.727 8.727a.727.727 0 1 1-1.03-1.03l5.818-5.818a.728.728 0 0 1 1.03 1.03z" }),
        React.createElement("path", { fill: "#fff", d: "M4.728 20a.727.727 0 1 1 0-1.455h5.818a.727.727 0 0 1 0 1.455z" }),
        React.createElement("path", { fill: "#fff", d: "M5.455 19.272a.727.727 0 0 1-1.454 0v-5.818a.727.727 0 0 1 1.454 0zm14.544-8.727a.727.727 0 1 1-1.455 0V4.728a.727.727 0 1 1 1.455 0z" }),
        React.createElement("path", { fill: "#fff", d: "M13.455 5.456a.727.727 0 1 1 0-1.455h5.817a.727.727 0 0 1 0 1.455z" })));
}

export { Expand2 as default };
//# sourceMappingURL=Expand2.js.map
