import * as React from 'react';

function ListBoxes({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 22 18", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M11 3h10.5v1.5H11V3Zm0 10.5h10.5V15H11v-1.5Zm-4.5-6H2A1.502 1.502 0 0 1 .5 6V1.5A1.502 1.502 0 0 1 2 0h4.5A1.502 1.502 0 0 1 8 1.5V6a1.502 1.502 0 0 1-1.5 1.5ZM2 1.5V6h4.5V1.5H2ZM6.5 18H2a1.502 1.502 0 0 1-1.5-1.5V12A1.501 1.501 0 0 1 2 10.5h4.5A1.502 1.502 0 0 1 8 12v4.5A1.501 1.501 0 0 1 6.5 18ZM2 12v4.5h4.5V12H2Z" })));
}

export { ListBoxes as default };
//# sourceMappingURL=ListBoxes.js.map
