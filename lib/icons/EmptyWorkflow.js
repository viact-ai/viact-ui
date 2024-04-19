import * as React from 'react';

function EmptyWorkflow({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 101 101", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "evenodd", clipPath: "url(#emptyWorkflow_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { fill: "url(#emptyWorkflow_svg__b)", d: "M35.41-.099h29.786v29.393H35.41zm6.114 5.918h17.557v17.557H41.524z", opacity: 0.981 }),
            React.createElement("path", { fill: "url(#emptyWorkflow_svg__c)", d: "M100.901 32.845v5.523q-3.87 15.218-19.726 15.288a103 103 0 0 1 3.748 3.847 114 114 0 0 1-3.945 4.044.49.49 0 0 1-.592 0L69.832 50.993q-.198-.197 0-.394a822 822 0 0 1 10.751-10.653 68 68 0 0 1 4.34 4.34 65 65 0 0 1-2.96 3.058q10.218.141 12.725-9.765.943-8.714-6.806-12.724a15.8 15.8 0 0 0-3.748-.986q-5.128-.148-10.258-.099v-6.115q6.125-.114 12.23.296 12.22 2.7 14.795 14.894", opacity: 0.958 }),
            React.createElement("path", { fill: "url(#emptyWorkflow_svg__d)", d: "M35.41 35.606h29.786v29.59H35.41zm6.114 6.116h17.557v17.36H41.524z", opacity: 0.965 }),
            React.createElement("path", { fill: "url(#emptyWorkflow_svg__e)", d: "M-.099 73.482v-5.327q2.779-12.69 15.584-15.09a332 332 0 0 1 11.442-.099v6.115q-5.426-.05-10.85.099-10.785 2.602-9.962 13.71 1.638 7.26 8.779 9.37 1.954.426 3.945.197a65 65 0 0 1-2.96-3.057 42 42 0 0 1 4.242-4.143 284 284 0 0 1 10.948 10.85 284 284 0 0 1-10.948 10.85 132 132 0 0 1-4.241-4.34 103 103 0 0 1 3.748-3.847Q6.846 89.19 1.184 77.82A32 32 0 0 1-.1 73.481", opacity: 0.959 }),
            React.createElement("path", { fill: "url(#emptyWorkflow_svg__f)", d: "M65.196 100.901H35.41V71.509h29.787zM41.524 77.427h17.557v17.556H41.524z", opacity: 0.981 })),
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
