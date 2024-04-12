import * as React from 'react';

function ShareOutline({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M13.125 7.5h1.563a1.563 1.563 0 0 1 1.562 1.563v7.5a1.563 1.563 0 0 1-1.563 1.562H5.313a1.563 1.563 0 0 1-1.563-1.563v-7.5A1.562 1.562 0 0 1 5.313 7.5h1.562m6.25-2.5L10 1.875 6.875 5M10 12.54V1.874" })));
}

export { ShareOutline as default };
//# sourceMappingURL=ShareOutline.js.map
