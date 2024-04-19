import * as React from 'react';

function ProcoreLogo({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 72 68.44", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { "data-name": "PROCORE GRAPHICMARK" },
            React.createElement("path", { d: "m55.6 43.39-7.14 12.32H23.54L11.09 34.22l12.45-21.49h24.92l7.14 12.32H72V13.96a13.52 13.52 0 0 0-14-14H14a13.52 13.52 0 0 0-14 14v40.52a13.52 13.52 0 0 0 14 14h44a13.52 13.52 0 0 0 14-14V43.39Z" }),
            React.createElement("path", { d: "M29.25 22.57 22.5 34.22l6.75 11.65h13.5l6.76-11.65-6.76-11.65z", style: {
                    fill: '#ff5200',
                } }))));
}

export { ProcoreLogo as default };
//# sourceMappingURL=ProcoreLogo.js.map
