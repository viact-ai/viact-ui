import * as React from 'react';

function Desktop({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M20.063 3.625H4.313A1.313 1.313 0 0 0 3 4.938v10.5a1.313 1.313 0 0 0 1.313 1.312h5.25v2.625H6.937v1.313h10.5v-1.313h-2.625V16.75h5.25a1.313 1.313 0 0 0 1.313-1.313v-10.5a1.313 1.313 0 0 0-1.313-1.312ZM13.5 19.375h-2.625V16.75H13.5v2.625Zm6.563-3.938H4.313v-10.5h15.75v10.5Z" }),
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.5, d: "M12.281 4.281v11.813M20.719 10.281H3.656" })));
}

export { Desktop as default };
//# sourceMappingURL=Desktop.js.map