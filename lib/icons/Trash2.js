import * as React from 'react';

function Trash2({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#trash2_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M8.042 3.8h-.209c.115 0 .209-.09.209-.2zh7.916v-.2c0 .11.094.2.209.2h-.209v1.8h1.875v-2c0-.883-.747-1.6-1.666-1.6H7.833c-.919 0-1.666.717-1.666 1.6v2h1.875zm13.125 1.8H2.833c-.46 0-.833.357-.833.8v.8c0 .11.094.2.208.2h1.573l.643 13.075C4.466 21.327 5.201 22 6.09 22h11.823c.89 0 1.622-.67 1.664-1.525L20.219 7.4h1.573c.114 0 .208-.09.208-.2v-.8c0-.443-.372-.8-.833-.8M17.71 20.2H6.289L5.66 7.4H18.34z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "trash2_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Trash2 as default };
//# sourceMappingURL=Trash2.js.map
