import * as React from 'react';

function Deactive({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#deactive_svg__a)" },
            React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Zm-4.415-3.312L17.688 7.585A7.2 7.2 0 0 1 7.585 17.688Zm-1.273-1.273A7.2 7.2 0 0 1 16.415 6.312L6.312 16.415Z", clipRule: "evenodd" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "deactive_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Deactive as default };
//# sourceMappingURL=Deactive.js.map
