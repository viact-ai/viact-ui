import * as React from 'react';

function Search2({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 80 80", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "evenodd", clipPath: "url(#search2_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { fill: "url(#search2_svg__b)", d: "M47.11-.078h6.25c12.69 1.934 21.153 8.965 25.39 21.094.504 1.82.895 3.643 1.172 5.468v6.25a32.495 32.495 0 0 1-4.297 12.5c-1.015 1.037-2.239 1.376-3.672 1.016-1.708-.787-2.36-2.115-1.953-3.984 4.098-7.143 4.619-14.538 1.563-22.188-4.395-8.735-11.505-13.37-21.329-13.906-8.602.36-15.242 4.11-19.922 11.25-4.687 8.125-4.687 16.25 0 24.375 5.926 8.714 14.13 12.282 24.61 10.703a24.247 24.247 0 0 0 5.469-1.875c2.593-.633 4.051.357 4.375 2.969.088 1.124-.328 2.01-1.25 2.656-6.657 3.23-13.584 3.96-20.782 2.188a32.912 32.912 0 0 1-7.968-3.36 682.757 682.757 0 0 1-13.36 16.719l-6.172 6.172a12.962 12.962 0 0 1-4.218 1.953H7.578C3.516 78.88.964 76.328-.078 72.266v-3.438a12.958 12.958 0 0 1 1.953-4.219l6.328-6.328A1008.544 1008.544 0 0 1 24.766 45c-4.406-7.567-5.422-15.562-3.047-23.984 4.237-12.129 12.7-19.16 25.39-21.094ZM28.515 50.234c.543.204.881.568 1.015 1.094A1008.63 1008.63 0 0 1 16.25 67.891l-5.078 5.078c-2.087 1.134-3.676.639-4.766-1.485a3.844 3.844 0 0 1 .469-2.812 176.596 176.596 0 0 1 6.328-6.172c5.087-4.13 10.19-8.218 15.313-12.266Z", opacity: 0.971 }),
            React.createElement("path", { fill: "url(#search2_svg__c)", d: "M49.14 12.422c6.34-.228 11.418 2.168 15.235 7.188a22.672 22.672 0 0 1 1.719 3.125c.599 2.267-.209 3.75-2.422 4.453-1.309.137-2.377-.306-3.203-1.328-2.21-4.805-5.985-7.227-11.328-7.266-1.758-.835-2.41-2.215-1.953-4.14.367-.967 1.018-1.644 1.953-2.032Z", opacity: 0.965 })),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "search2_svg__b", x1: 79.922, x2: 39.922, y1: -0.078, y2: 43.533, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "search2_svg__c", x1: 66.285, x2: 59.284, y1: 12.407, y2: 22.326, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("clipPath", { id: "search2_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h80v80H0z" })))));
}

export { Search2 as default };
//# sourceMappingURL=Search2.js.map
