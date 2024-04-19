import * as React from 'react';

function HideEye({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd", clipPath: "url(#hideEye_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { d: "M-.02 10.215v-.469q2.23-3.723 6.25-5.371a11.3 11.3 0 0 1 6.641-.273q.775.225 1.504.566l2.09-2.09a.83.83 0 0 1 .781 0q.385.407.137.918L3.496 17.383q-1.076.369-.996-.762l.078-.156q.9-.89 1.777-1.797A13.25 13.25 0 0 1-.02 10.215M9.941 4.98a9.5 9.5 0 0 1 3.438.684l-1.23 1.23q-1.747-1.116-3.692-.37-2.454 1.245-2.207 4.003.14.887.645 1.621L5.37 13.672A11.04 11.04 0 0 1 1.387 9.98a11.4 11.4 0 0 1 4.687-4.12 9.9 9.9 0 0 1 3.867-.88m0 2.5q.672.026 1.25.372l-3.34 3.34a2.46 2.46 0 0 1-.273-1.837Q7.998 8 9.355 7.578q.302-.049.586-.098", opacity: 0.965 }),
            React.createElement("path", { d: "M19.98 9.746v.469q-2.435 4.085-6.953 5.605-3.09.829-6.172-.02a.2.2 0 0 1 .02-.116q.49-.51 1.015-.977 4.186.89 7.676-1.582a12.8 12.8 0 0 0 3.008-3.145 13 13 0 0 0-2.89-3.066q.405-.465.859-.898a.1.1 0 0 1 .117 0 13.7 13.7 0 0 1 3.32 3.73", opacity: 0.959 }),
            React.createElement("path", { d: "M13.535 9.004q.66 2.268-1.133 3.887-1.498 1.165-3.36.742-.055-.041-.019-.098l1.074-1.074q2.08-.284 2.364-2.363.548-.54 1.074-1.094", opacity: 0.95 })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "hideEye_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" })))));
}

export { HideEye as default };
//# sourceMappingURL=HideEye.js.map
