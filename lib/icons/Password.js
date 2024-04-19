import * as React from 'react';

function Password({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#password_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M4.5 5.25v13.5a.75.75 0 1 1-1.5 0V5.25a.75.75 0 0 1 1.5 0m7.875 5.11-1.875.609V9A.75.75 0 1 0 9 9v1.969l-1.875-.61a.73.73 0 0 0-.937.479.74.74 0 0 0 .478.946l1.875.61-1.163 1.594a.75.75 0 0 0 .728 1.18.76.76 0 0 0 .49-.3l1.154-1.593 1.153 1.594a.76.76 0 0 0 1.25-.046.75.75 0 0 0-.031-.835l-1.163-1.594 1.875-.61a.74.74 0 0 0 .479-.947.73.73 0 0 0-.938-.478m9.938.478a.73.73 0 0 0-.938-.479l-1.875.61V9A.75.75 0 1 0 18 9v1.969l-1.875-.61a.73.73 0 0 0-.937.479.74.74 0 0 0 .478.946l1.875.61-1.163 1.594a.75.75 0 0 0 .728 1.18.76.76 0 0 0 .49-.3l1.154-1.593 1.153 1.594a.76.76 0 0 0 1.25-.046.75.75 0 0 0-.031-.835l-1.163-1.594 1.875-.61a.74.74 0 0 0 .479-.947" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "password_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Password as default };
//# sourceMappingURL=Password.js.map
