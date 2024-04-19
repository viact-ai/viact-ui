import * as React from 'react';

function Eye({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", clipPath: "url(#eye_svg__a)" },
            React.createElement("path", { stroke: "currentColor", d: "M9.922 4.246h-.047a9.35 9.35 0 0 0-3.671.97l-.012.006A16.8 16.8 0 0 0 .84 9.669l-.25.316.255.312a18.3 18.3 0 0 0 4.818 4.156l.01.006c2.895 1.634 5.818 1.62 8.699-.042l.01-.006a18.6 18.6 0 0 0 4.736-4.113l.258-.315-.256-.317a18 18 0 0 0-4.46-3.957 9.5 9.5 0 0 0-4.737-1.463Zm9.424 5.232.134.269v.454q-.086.215-.227.41a17.3 17.3 0 0 1-5.435 4.411c-2.566 1.257-5.108 1.257-7.675 0a17.3 17.3 0 0 1-5.432-4.407 3 3 0 0 1-.23-.392v-.476l.134-.269c3.202-3.719 6.323-5.482 9.363-5.482s6.163 1.763 9.368 5.482Z", opacity: 0.962 }),
            React.createElement("path", { fillRule: "evenodd", d: "M9.628 5.645q2.991-.082 4.317 2.578 1.095 2.95-1.192 5.098-2.325 1.723-4.922.43-2.456-1.563-2.129-4.473.54-2.61 3.067-3.457.432-.116.86-.176m-.117 1.29q-1.594.333-2.324 1.796-.866 2.48 1.308 3.926 1.852.89 3.477-.352 1.787-1.785.566-4.004-1.112-1.547-3.027-1.367", clipRule: "evenodd", opacity: 0.963 })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "eye_svg__a" },
                React.createElement("path", { fill: "currentColor", d: "M0 0h20v20H0z" })))));
}

export { Eye as default };
//# sourceMappingURL=Eye.js.map
