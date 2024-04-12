import * as React from 'react';

function NoEarPlug({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#F2C94C", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M21 9.75c-4.547 0-8.25 3.703-8.25 8.25v9.683c0 1.2.47 2.354 1.313 3.21a4.43 4.43 0 0 0 3.187 1.357c1.728 0 3.15-.732 4.224-2.176.21-.281.448-.69.723-1.165.718-1.236 1.701-2.928 2.961-3.784 1.208-.821 2.214-1.854 2.906-2.987A7.798 7.798 0 0 0 29.25 18c0-4.547-3.7-8.25-8.25-8.25Zm4.5 8.625a.75.75 0 0 1-.75-.75c0-1.86-1.682-3.375-3.75-3.375s-3.75 1.514-3.75 3.375v1.426c1.274-.368 2.738-.315 3.013-.301a2.25 2.25 0 0 1 1.81 3.558.872.872 0 0 1-.045.056c-.776.89-1.688 2.132-1.803 2.578a.75.75 0 0 1-1.45-.381c.258-.982 1.73-2.729 2.093-3.148a.75.75 0 0 0-.626-1.163H20.2c-.778-.042-2.15.038-2.95.39v2.61a.75.75 0 1 1-1.5 0v-5.625c0-2.688 2.355-4.875 5.25-4.875s5.25 2.187 5.25 4.875a.75.75 0 0 1-.75.75Z" })));
}

export { NoEarPlug as default };
//# sourceMappingURL=NoEarPlug.js.map
