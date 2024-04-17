import * as React from 'react';

function LocalRtsp({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd", clipPath: "url(#localRTSP_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { d: "M4.992 4.43c.554-.002.866.272.938.82-.03.158-.085.306-.164.445-2.566 2.59-3.316 5.638-2.25 9.14a8.743 8.743 0 0 0 2.25 3.423c.22.458.135.84-.258 1.148a1.165 1.165 0 0 1-.797 0c-2.408-2.3-3.478-5.12-3.211-8.46.292-2.467 1.315-4.569 3.07-6.305.133-.098.273-.168.422-.211Z", opacity: 0.963 }),
            React.createElement("path", { d: "M18.727 4.476c.196-.004.383.035.562.118 2.745 2.72 3.721 5.978 2.93 9.773a10.042 10.042 0 0 1-2.93 4.992c-.38.187-.732.148-1.055-.117-.218-.344-.218-.687 0-1.031 2.245-2.219 3.089-4.89 2.532-8.016a9.134 9.134 0 0 0-1.407-3.187 26.856 26.856 0 0 0-1.218-1.453c-.121-.54.074-.9.586-1.079ZM8.46 6.727c.649-.016.954.296.915.937-.034.115-.08.224-.14.328-1.736 1.788-2.158 3.85-1.266 6.188.31.7.748 1.31 1.312 1.828.236.409.181.776-.164 1.102a.948.948 0 0 1-.984-.047c-1.912-1.941-2.56-4.246-1.945-6.914A7.395 7.395 0 0 1 8.133 6.89l.328-.164Z", opacity: 0.961 }),
            React.createElement("path", { d: "M15.023 6.727c.29-.04.556.014.797.164 2.13 2.222 2.684 4.793 1.664 7.71a6.31 6.31 0 0 1-1.804 2.555c-.55.208-.934.044-1.149-.492a.887.887 0 0 1 .094-.61c1.83-1.832 2.267-3.957 1.313-6.374a6.127 6.127 0 0 0-1.313-1.781c-.226-.519-.093-.91.398-1.172Z", opacity: 0.96 }),
            React.createElement("path", { d: "M11.602 10.476c1.335-.079 1.952.546 1.851 1.875-.298.888-.915 1.255-1.851 1.102-.888-.298-1.255-.915-1.102-1.852.157-.586.524-.961 1.102-1.125Z", opacity: 0.966 })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "localRTSP_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { LocalRtsp as default };
//# sourceMappingURL=LocalRtsp.js.map