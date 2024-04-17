import * as React from 'react';

function FolderNext({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.8, d: "M6.5 11.143h7m0 0L11 14.57m2.5-3.428L11 7.714m-10 8V4.286C1 3.023 1.895 2 3 2h6l2 2.286h6c1.105 0 2 1.023 2 2.285v9.143C19 16.977 18.105 18 17 18H3c-1.105 0-2-1.023-2-2.286Z" })));
}

export { FolderNext as default };
//# sourceMappingURL=FolderNext.js.map
