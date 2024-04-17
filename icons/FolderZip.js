import * as React from 'react';

function FolderZip({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 32 32", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M26.667 8H16l-1.88-1.88a2.675 2.675 0 0 0-1.893-.787H5.334A2.663 2.663 0 0 0 2.68 8l-.013 16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667V10.667C29.334 9.2 28.134 8 26.667 8ZM24 16h-2.666v2.667H24v2.666h-2.666V24h-2.667v-2.667h2.667v-2.666h-2.667V16h2.667v-2.667h-2.667v-2.666h2.667v2.666H24V16Z" })));
}

export { FolderZip as default };
//# sourceMappingURL=FolderZip.js.map
