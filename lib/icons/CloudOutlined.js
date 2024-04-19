import * as React from 'react';

function CloudOutlined({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#cloudOutlined_svg__a)" },
            React.createElement("g", { fill: "currentColor", fillRule: "evenodd", clipPath: "url(#cloudOutlined_svg__b)", clipRule: "evenodd" },
                React.createElement("path", { d: "M19.98 11.036v1.094q-.594 3.222-3.828 3.808-1.522.03-3.047.02v-1.29q1.485.01 2.97-.019 2.157-.44 2.597-2.597.197-2.332-1.895-3.34-.48-.164-.976-.274a.7.7 0 0 1-.254-.293q-.852-3.742-4.59-4.59-3.47-.457-5.566 2.325a5.93 5.93 0 0 0-1.016 3.359.7.7 0 0 1-.41.45q-1.918.045-2.598 1.816-.43 2.198 1.621 3.066.175.046.352.078 1.777.03 3.555.02v1.289a172 172 0 0 1-3.672-.02Q.517 15.41-.02 12.716V11.66Q.52 9.073 3.105 8.497 3.5 4.619 6.934 2.813q4.125-1.779 7.617 1.016a7.1 7.1 0 0 1 2.11 3.457q2.798.875 3.32 3.75", opacity: 0.965 }),
                React.createElement("path", { d: "M9.98 9.668q.205.036.391.137 1.3 1.29 2.578 2.597-.43.469-.898.899a69 69 0 0 1-1.387-1.367q-.03 2.949-.02 5.898H9.356q.01-2.97-.02-5.937L7.93 13.3q-.462-.442-.88-.918a115 115 0 0 1 2.5-2.54.87.87 0 0 1 .43-.175", opacity: 0.965 }))),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "cloudOutlined_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" })),
            React.createElement("clipPath", { id: "cloudOutlined_svg__b" },
                React.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" })))));
}

export { CloudOutlined as default };
//# sourceMappingURL=CloudOutlined.js.map
