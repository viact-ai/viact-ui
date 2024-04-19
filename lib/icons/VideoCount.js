import * as React from 'react';

function VideoCount({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 30 30", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#EB5757", fillRule: "evenodd", d: "M9.287 3.135q1.816-.015 3.633.03l5.39 5.39q-2.021.058-4.042 0a675 675 0 0 1-5.274-5.303q.158-.06.293-.117", clipRule: "evenodd", opacity: 0.981 }),
        React.createElement("path", { fill: "#EB5757", fillRule: "evenodd", d: "M15.908 3.193a64 64 0 0 1 4.746-.029q4.1.357 5.713 4.13.217.633.322 1.29-2.695.015-5.39-.03a696 696 0 0 0-5.39-5.36", clipRule: "evenodd", opacity: 0.987 }),
        React.createElement("path", { fill: "#EB5757", fillRule: "evenodd", d: "M6.533 3.896q.12-.014.235.03a508 508 0 0 1 4.57 4.6q-4.042.087-8.086.058.558-3.111 3.281-4.688", clipRule: "evenodd", opacity: 0.994 }),
        React.createElement("path", { fill: "#EB5757", fillRule: "evenodd", d: "M3.135 10.635h23.672q.015 5.01-.03 10.02-.464 4.605-4.892 5.947a7.3 7.3 0 0 1-1.29.175q-5.625.06-11.25 0-3.075-.181-4.95-2.607a6.6 6.6 0 0 1-1.23-3.516q-.045-5.01-.03-10.02m9.375 2.52q.324-.015.644.029a134 134 0 0 1 5.83 3.252q.573.949-.322 1.61a351 351 0 0 0-5.332 2.93q-1.03.38-1.494-.615a181 181 0 0 1 0-6.504q.177-.514.674-.703", clipRule: "evenodd", opacity: 0.993 })));
}

export { VideoCount as default };
//# sourceMappingURL=VideoCount.js.map
