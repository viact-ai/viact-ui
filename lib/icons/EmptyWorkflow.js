import * as React from 'react';

function EmptyWorkflow({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 101 101", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "evenodd", clipPath: "url(#emptyWorkflow_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { fill: "url(#emptyWorkflow_svg__b)", d: "M35.41-.099h29.786v29.393H35.41V-.1Zm6.114 5.918h17.557v17.557H41.524V5.819Z", opacity: 0.981 }),
            React.createElement("path", { fill: "url(#emptyWorkflow_svg__c)", d: "M100.901 32.845v5.523c-2.58 10.145-9.155 15.241-19.726 15.288a103.15 103.15 0 0 1 3.748 3.847 113.982 113.982 0 0 1-3.945 4.044.493.493 0 0 1-.592 0L69.832 50.993c-.132-.131-.132-.263 0-.394a821.452 821.452 0 0 1 10.751-10.653 67.525 67.525 0 0 1 4.34 4.34 64.685 64.685 0 0 1-2.96 3.058c6.812.094 11.053-3.161 12.725-9.765.629-5.81-1.64-10.05-6.806-12.724a15.756 15.756 0 0 0-3.748-.986c-3.419-.099-6.838-.131-10.258-.099v-6.115c4.083-.076 8.16.023 12.23.296 8.146 1.8 13.078 6.765 14.795 14.894Z", opacity: 0.958 }),
            React.createElement("path", { fill: "url(#emptyWorkflow_svg__d)", d: "M35.41 35.606h29.786v29.59H35.41v-29.59Zm6.114 6.116h17.557v17.36H41.524v-17.36Z", opacity: 0.965 }),
            React.createElement("path", { fill: "url(#emptyWorkflow_svg__e)", d: "M-.099 73.482v-5.327c1.853-8.46 7.047-13.49 15.584-15.09a331.61 331.61 0 0 1 11.442-.099v6.115c-3.617-.033-7.234 0-10.85.099-7.19 1.735-10.51 6.305-9.962 13.71 1.092 4.84 4.018 7.963 8.779 9.37 1.303.284 2.618.35 3.945.197a64.734 64.734 0 0 1-2.96-3.057 42.006 42.006 0 0 1 4.242-4.143 283.876 283.876 0 0 1 10.948 10.85 283.98 283.98 0 0 1-10.948 10.85 131.794 131.794 0 0 1-4.241-4.34 103.232 103.232 0 0 1 3.748-3.847c-8.521.28-14.67-3.37-18.444-10.949A32.282 32.282 0 0 1-.1 73.481Z", opacity: 0.959 }),
            React.createElement("path", { fill: "url(#emptyWorkflow_svg__f)", d: "M65.196 100.901H35.41V71.509h29.787V100.9ZM41.524 77.427h17.557v17.556H41.524V77.427Z", opacity: 0.981 })),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "emptyWorkflow_svg__b", x1: 65.196, x2: 50.518, y1: -0.099, y2: 16.119, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "emptyWorkflow_svg__c", x1: 100.901, x2: 79.531, y1: 17.63, y2: 34.13, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "emptyWorkflow_svg__d", x1: 65.196, x2: 50.41, y1: 35.606, y2: 51.835, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "emptyWorkflow_svg__e", x1: 31.069, x2: 9.703, y1: 52.954, y2: 69.454, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "emptyWorkflow_svg__f", x1: 65.196, x2: 50.518, y1: 71.509, y2: 87.727, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("clipPath", { id: "emptyWorkflow_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h101v101H0z" })))));
}

export { EmptyWorkflow as default };
//# sourceMappingURL=EmptyWorkflow.js.map
