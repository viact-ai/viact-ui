import * as React from 'react';

function Save({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#save_svg__a)" },
            React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M3.299 1.666c4.812-.007 9.625 0 14.437.021l.172.086 4.276 4.276.085.171c.03 4.813.03 9.625 0 14.438-.221.852-.759 1.39-1.61 1.611-5.787.029-11.574.029-17.36 0-.852-.222-1.39-.759-1.611-1.611-.03-5.787-.03-11.573 0-17.36.23-.852.766-1.397 1.61-1.632Zm.43 1.375h4.125c-.008 1.49 0 2.979.021 4.469.136.537.473.873 1.01 1.01 2.062.028 4.125.028 6.187 0 .537-.137.874-.473 1.01-1.01.021-1.49.029-2.98.021-4.47.359-.006.717 0 1.075.022l3.716 3.717c.03 4.483.03 8.966 0 13.45a.668.668 0 0 1-.45.622c-.528.06-1.058.082-1.59.065.007-1.748 0-3.495-.022-5.242-.222-.853-.76-1.39-1.611-1.612a638.35 638.35 0 0 0-10.485 0c-.852.222-1.389.76-1.611 1.612a319.733 319.733 0 0 0-.021 5.242 10.986 10.986 0 0 1-1.59-.065.668.668 0 0 1-.451-.623c-.03-5.5-.03-11 0-16.5.057-.394.28-.623.666-.687Zm5.5 0h5.5v4.125h-5.5V3.04ZM7.166 15.416c3.208-.007 6.417 0 9.625.021.394.05.616.272.666.666.021 1.604.029 3.208.021 4.813h-11c-.007-1.605 0-3.209.022-4.813.058-.394.28-.623.666-.687Z", clipRule: "evenodd", opacity: 0.994 })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "save_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M1 1h22v22H1z" })))));
}

export { Save as default };
//# sourceMappingURL=Save.js.map
