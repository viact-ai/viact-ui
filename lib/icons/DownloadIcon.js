import * as React from 'react';

function DownloadIcon({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 21", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#7B7B7B", d: "M10 13.478a1 1 0 0 1-.313-.052.7.7 0 0 1-.27-.177l-3-3a.8.8 0 0 1-.23-.584.8.8 0 0 1 .23-.583.84.84 0 0 1 .594-.24.77.77 0 0 1 .593.22l1.562 1.562V4.665q0-.354.24-.594T10 3.832t.594.24q.24.24.239.593v5.959l1.563-1.563a.77.77 0 0 1 .594-.219.83.83 0 0 1 .593.24.8.8 0 0 1 .23.583.8.8 0 0 1-.23.584l-3 3a.7.7 0 0 1-.27.177.9.9 0 0 1-.313.052m-5 3.687q-.688 0-1.178-.49a1.6 1.6 0 0 1-.489-1.176v-1.667q0-.354.24-.594t.593-.24.595.24.239.594v1.667h10v-1.667q0-.354.24-.594t.593-.24.594.24.24.594v1.667q0 .687-.49 1.177-.491.49-1.177.49z" })));
}

export { DownloadIcon as default };
//# sourceMappingURL=DownloadIcon.js.map
