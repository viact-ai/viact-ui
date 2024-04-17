import * as React from 'react';

function VideoCount({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 30 30", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#EB5757", fillRule: "evenodd", d: "M9.287 3.135c1.211-.01 2.422 0 3.633.03l5.39 5.39c-1.347.039-2.695.039-4.042 0a675.183 675.183 0 0 1-5.274-5.303c.105-.04.203-.078.293-.117Z", clipRule: "evenodd", opacity: 0.981 }),
        React.createElement("path", { fill: "#EB5757", fillRule: "evenodd", d: "M15.908 3.193a64.231 64.231 0 0 1 4.746-.029c2.733.238 4.637 1.615 5.713 4.13.145.422.252.852.322 1.29-1.797.01-3.593 0-5.39-.03a695.611 695.611 0 0 0-5.39-5.36Z", clipRule: "evenodd", opacity: 0.987 }),
        React.createElement("path", { fill: "#EB5757", fillRule: "evenodd", d: "M6.533 3.896c.08-.009.159.001.235.03a507.688 507.688 0 0 1 4.57 4.6c-2.695.058-5.39.077-8.086.058.372-2.074 1.466-3.637 3.281-4.688Z", clipRule: "evenodd", opacity: 0.994 }),
        React.createElement("path", { fill: "#EB5757", fillRule: "evenodd", d: "M3.135 10.635h23.672c.01 3.34 0 6.68-.03 10.02-.309 3.07-1.94 5.052-4.892 5.947a7.323 7.323 0 0 1-1.29.175c-3.75.04-7.5.04-11.25 0-2.05-.121-3.7-.99-4.95-2.607a6.587 6.587 0 0 1-1.23-3.516c-.03-3.34-.04-6.68-.03-10.02Zm9.375 2.52c.216-.01.43 0 .644.029a133.686 133.686 0 0 1 5.83 3.252c.382.632.274 1.17-.322 1.61a350.807 350.807 0 0 0-5.332 2.93c-.687.253-1.185.048-1.494-.615a180.787 180.787 0 0 1 0-6.504c.118-.342.343-.577.674-.703Z", clipRule: "evenodd", opacity: 0.993 })));
}

export { VideoCount as default };
//# sourceMappingURL=VideoCount.js.map
