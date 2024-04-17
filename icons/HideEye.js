import * as React from 'react';

function HideEye({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd", clipPath: "url(#hideEye_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { d: "M-.02 10.215v-.469c1.486-2.482 3.57-4.272 6.25-5.371a11.317 11.317 0 0 1 6.641-.273c.517.15 1.018.339 1.504.566l2.09-2.09a.83.83 0 0 1 .781 0c.257.271.302.577.137.918L3.496 17.383c-.717.246-1.05-.008-.996-.762l.078-.156c.6-.593 1.192-1.192 1.777-1.797A13.249 13.249 0 0 1-.02 10.215ZM9.941 4.98a9.514 9.514 0 0 1 3.438.684l-1.23 1.23c-1.165-.744-2.395-.867-3.692-.37-1.636.83-2.371 2.164-2.207 4.003.093.591.308 1.132.645 1.621L5.37 13.672A11.041 11.041 0 0 1 1.387 9.98a11.381 11.381 0 0 1 4.687-4.12 9.883 9.883 0 0 1 3.867-.88Zm0 2.5c.448.017.865.141 1.25.372l-3.34 3.34a2.463 2.463 0 0 1-.273-1.837c.28-.904.873-1.497 1.777-1.777.201-.033.397-.065.586-.098Z", opacity: 0.965 }),
            React.createElement("path", { d: "M19.98 9.746v.469c-1.624 2.723-3.941 4.592-6.953 5.605-2.06.552-4.117.546-6.172-.02a.193.193 0 0 1 .02-.116c.327-.34.665-.666 1.015-.977 2.79.593 5.35.066 7.676-1.582a12.779 12.779 0 0 0 3.008-3.145 12.931 12.931 0 0 0-2.89-3.066c.27-.31.557-.61.859-.898a.098.098 0 0 1 .117 0 13.74 13.74 0 0 1 3.32 3.73Z", opacity: 0.959 }),
            React.createElement("path", { d: "M13.535 9.004c.44 1.512.063 2.808-1.133 3.887-.999.777-2.119 1.024-3.36.742-.037-.028-.043-.06-.019-.098l1.074-1.074c1.387-.189 2.175-.977 2.364-2.363.365-.36.724-.724 1.074-1.094Z", opacity: 0.95 })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "hideEye_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" })))));
}

export { HideEye as default };
//# sourceMappingURL=HideEye.js.map
