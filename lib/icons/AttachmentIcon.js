import * as React from 'react';

function AttachmentIcon({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#333", fillRule: "evenodd", d: "M15.682 4.78a4 4 0 0 1 5.657 5.657l-8.84 8.84a5.5 5.5 0 0 1-7.777-7.779l.707.708-.707-.707 7.424-7.425a1 1 0 1 1 1.415 1.414l-7.425 7.425-.656-.656.656.656a3.5 3.5 0 0 0 0 4.95l-.704.703.704-.704a3.5 3.5 0 0 0 4.95 0l8.838-8.838a2 2 0 1 0-2.828-2.829l-8.839 8.839-.707-.707.707.707a.5.5 0 1 0 .707.707l7.425-7.425a1 1 0 1 1 1.414 1.415l-7.424 7.424a2.5 2.5 0 0 1-3.536 0m0 0a2.5 2.5 0 0 1 0-3.535l8.839-8.84", clipRule: "evenodd" })));
}

export { AttachmentIcon as default };
//# sourceMappingURL=AttachmentIcon.js.map
