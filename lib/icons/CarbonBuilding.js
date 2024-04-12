import * as React from 'react';

function CarbonBuilding({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 26 26", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M22.75 1.625H13a1.627 1.627 0 0 0-1.625 1.625v8.125H3.25A1.627 1.627 0 0 0 1.625 13v11.375h22.75V3.25a1.627 1.627 0 0 0-1.625-1.625ZM7.312 22.75v-5.688h3.25v5.688h-3.25Zm15.438 0H12.187v-6.5a.812.812 0 0 0-.812-.813H6.5a.812.812 0 0 0-.813.813v6.5H3.25V13H13V3.25h9.75v19.5Z" }),
        React.createElement("path", { fill: "currentColor", d: "M14.625 6.5h1.625v1.625h-1.625V6.5Zm4.875 0h1.625v1.625H19.5V6.5Zm-4.875 4.875h1.625V13h-1.625v-1.625Zm4.875 0h1.625V13H19.5v-1.625Zm-4.875 4.875h1.625v1.625h-1.625V16.25Zm4.875 0h1.625v1.625H19.5V16.25ZM7.312 9.75H5.688A4.067 4.067 0 0 1 9.75 5.687v1.625A2.44 2.44 0 0 0 7.312 9.75Zm-4.062 0H1.625A8.134 8.134 0 0 1 9.75 1.625V3.25a6.508 6.508 0 0 0-6.5 6.5Z" })));
}

export { CarbonBuilding as default };
//# sourceMappingURL=CarbonBuilding.js.map
