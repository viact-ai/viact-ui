import * as React from 'react';

function PinLocation({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 18", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M7 .25A6.883 6.883 0 0 0 .125 7.125 6.8 6.8 0 0 0 1.51 11.25s.188.247.218.283L7 17.75l5.274-6.22c.028-.034.216-.28.216-.28v-.002a6.8 6.8 0 0 0 1.385-4.123A6.883 6.883 0 0 0 7 .25m0 9.375a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" })));
}

export { PinLocation as default };
//# sourceMappingURL=PinLocation.js.map
