import * as React from 'react';

function DangerZone({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 41.008, height: 41.105, x: 0.806, y: 0.884, fill: "#EB5757", rx: 8 }),
        React.createElement("g", { clipPath: "url(#dangerZone_svg__a)" },
            React.createElement("path", { fill: "#fff", d: "M29.201 21.632q0-2.411-1.3-4.419l-11.268 11.28q2.047 1.333 4.438 1.333 1.66 0 3.161-.651a8.3 8.3 0 0 0 2.593-1.745 8.1 8.1 0 0 0 1.734-2.614 8.1 8.1 0 0 0 .642-3.184m-14.93 4.48 11.284-11.296a7.83 7.83 0 0 0-4.484-1.363 7.93 7.93 0 0 0-4.08 1.094 8.1 8.1 0 0 0-2.958 2.98 8.06 8.06 0 0 0-1.091 4.105q0 2.427 1.33 4.48m18.278-4.48a11.4 11.4 0 0 1-.912 4.494q-.912 2.143-2.443 3.685-1.532 1.544-3.662 2.457-2.13.915-4.46.914-2.332 0-4.462-.914-2.13-.913-3.661-2.457-1.532-1.542-2.443-3.685a11.4 11.4 0 0 1-.912-4.494q0-2.352.912-4.486.911-2.135 2.443-3.678 1.532-1.542 3.661-2.457a11.2 11.2 0 0 1 4.461-.913q2.332 0 4.461.913 2.13.915 3.662 2.457 1.531 1.543 2.443 3.678t.912 4.486" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "dangerZone_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M9.594 9.692h22.955v23.49H9.594z" })))));
}

export { DangerZone as default };
//# sourceMappingURL=DangerZone.js.map
