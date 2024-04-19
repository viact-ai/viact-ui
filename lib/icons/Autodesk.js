import * as React from 'react';

function Autodesk({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#333", rx: 8 }),
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M16.763 17.85 11 21.699V28l.6-.38c.329-.209 2.943-1.945 5.808-3.859l5.21-3.48h3.227c2.462 0 3.227.06 3.224.247-.003.135-1.259 1.039-2.791 2.008s-2.939 1.9-3.125 2.067c-.25.225-.371.709-.462 1.832l-.123 1.526H30l-.049-6.94-.048-6.942-3.688-.04L22.526 14z", clipRule: "evenodd" })));
}

export { Autodesk as default };
//# sourceMappingURL=Autodesk.js.map
