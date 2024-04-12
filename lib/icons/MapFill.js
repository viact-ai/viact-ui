import * as React from 'react';

function MapFill({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#mapFill_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "m22.207 4.9-5.54 1.727v2.707h-1.333V6.86l-6-3.073V6H8.001V3.514L1.554 6.18a.353.353 0 0 0-.22.32v13.8a.353.353 0 0 0 .493.327l6.174-2.547v-2.746h1.333v3.02l6 3.073v-2.76h1.333v2.527l5.754-1.8a.354.354 0 0 0 .246-.34V5.24a.353.353 0 0 0-.46-.34ZM9.334 14H8.001v-2.666h1.333V14Zm0-4H8.001V7.334h1.333V10Zm7.333 7.334h-1.333v-2.667h1.333v2.667Zm0-4h-1.333v-2.667h1.333v2.667Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "mapFill_svg__a" },
                React.createElement("path", { fill: "currentColor", d: "M0 0h24v24H0z" })))));
}

export { MapFill as default };
//# sourceMappingURL=MapFill.js.map
