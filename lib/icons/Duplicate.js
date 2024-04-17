import * as React from 'react';

function Duplicate({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#duplicate_svg__a)" },
            React.createElement("g", { fill: "currentColor", fillRule: "evenodd", clipPath: "url(#duplicate_svg__b)", clipRule: "evenodd" },
                React.createElement("path", { d: "M8.797 2.64c2.344-.005 4.687 0 7.031.016.828.162 1.323.656 1.485 1.485.02 3.01.02 6.02 0 9.03-.182.844-.697 1.339-1.547 1.485-.636.021-1.271.021-1.907 0-.459-.142-.63-.45-.515-.922a.608.608 0 0 1 .39-.39c.645-.04 1.29-.061 1.938-.063a.49.49 0 0 0 .265-.234c.037-1.463.052-2.926.047-4.39l-.015-4.235c-.026-.255-.167-.396-.422-.422-2.156-.02-4.313-.02-6.469 0a.703.703 0 0 0-.219.063 4.65 4.65 0 0 1-.406.5c-.393.189-.721.11-.984-.235a.938.938 0 0 1 .187-1c.3-.369.68-.598 1.14-.687Z", opacity: 0.984 }),
                React.createElement("path", { d: "M4.203 5.297c2.302-.005 4.604 0 6.906.016.87.161 1.386.677 1.547 1.546.021 2.97.021 5.938 0 8.907-.146.85-.64 1.365-1.484 1.546-2.344.021-4.688.021-7.031 0-.83-.162-1.324-.657-1.485-1.484-.02-3.01-.02-6.02 0-9.031.188-.84.703-1.34 1.547-1.5Zm.094 1.375c2.24-.005 4.48 0 6.719.016.13.046.218.135.265.265.021 2.906.021 5.813 0 8.719a.425.425 0 0 1-.39.297c-2.167.02-4.334.02-6.5 0-.25-.03-.38-.171-.391-.422a573.86 573.86 0 0 1 0-8.469.475.475 0 0 1 .297-.406Z", opacity: 0.979 }))),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "duplicate_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" })),
            React.createElement("clipPath", { id: "duplicate_svg__b" },
                React.createElement("path", { fill: "#fff", d: "M2 2h16v16H2z" })))));
}

export { Duplicate as default };
//# sourceMappingURL=Duplicate.js.map
