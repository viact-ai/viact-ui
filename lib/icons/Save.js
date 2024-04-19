import * as React from 'react';

function Save({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#save_svg__a)" },
            React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M3.299 1.666q7.219-.01 14.437.021l.172.086 4.276 4.276.085.171q.045 7.219 0 14.438-.333 1.279-1.61 1.611-8.68.044-17.36 0-1.279-.333-1.611-1.611-.045-8.68 0-17.36.345-1.279 1.61-1.632m.43 1.375h4.125q-.011 2.235.021 4.469.204.805 1.01 1.01 3.093.042 6.187 0 .806-.205 1.01-1.01.032-2.235.021-4.47.538-.01 1.075.022l3.717 3.717q.042 6.724 0 13.45a.67.67 0 0 1-.452.622q-.79.09-1.59.065.011-2.622-.021-5.242-.334-1.28-1.611-1.612a638 638 0 0 0-10.485 0q-1.278.333-1.611 1.612a320 320 0 0 0-.021 5.242 11 11 0 0 1-1.59-.065.67.67 0 0 1-.451-.623q-.045-8.25 0-16.5.086-.591.666-.687m5.5 0h5.5v4.125h-5.5zM7.166 15.416q4.813-.01 9.625.021.591.075.666.666.032 2.406.021 4.813h-11q-.01-2.407.022-4.813.087-.591.666-.687", clipRule: "evenodd", opacity: 0.994 })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "save_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M1 1h22v22H1z" })))));
}

export { Save as default };
//# sourceMappingURL=Save.js.map
