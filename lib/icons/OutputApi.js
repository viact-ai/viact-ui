import * as React from 'react';

function OutputApi({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 40 40", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 40, height: 40, fill: "#F2C94C", rx: 8 }),
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M21.781 13.01q1.651-.127 1.545 1.508L19.59 25.724q-.503.853-1.472.61-.963-.434-.755-1.472L21.1 13.656q.26-.422.682-.647", clipRule: "evenodd", opacity: 0.96 }),
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M14.67 14.805q1.84.234 1.113 1.94-1.475 1.455-2.91 2.945 1.436 1.488 2.91 2.945.721 1.575-.97 1.94a2.1 2.1 0 0 1-.718-.252l-3.915-3.915a1.53 1.53 0 0 1 0-1.437l3.915-3.915q.285-.16.574-.251M25.733 14.805q.46.025.862.251l3.915 3.915q.36.72 0 1.437l-3.915 3.915q-1.543.72-1.94-.934.051-.403.252-.754 1.474-1.456 2.91-2.945a169 169 0 0 0-2.91-2.946q-.704-1.464.826-1.94", clipRule: "evenodd", opacity: 0.958 })));
}

export { OutputApi as default };
//# sourceMappingURL=OutputApi.js.map
