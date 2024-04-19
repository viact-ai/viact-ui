import * as React from 'react';

function SamplingData({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 28 29", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 28, height: 28, y: 0.5, fill: "currentColor", rx: 8 }),
        React.createElement("g", { fill: "#fff", fillRule: "evenodd", clipPath: "url(#sampling-data_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { d: "M18.516 5.984h3.187q.07.062.156.11.057.094.125.172v3.187a.54.54 0 0 1-.343.297q-1.532.03-3.063 0a.46.46 0 0 1-.36-.36 75 75 0 0 1 0-3.062.54.54 0 0 1 .298-.344M11.234 6.922q1.58-.008 3.157.016a.47.47 0 0 1 .297.328q.03 1.546 0 3.093a.44.44 0 0 1-.329.329q-1.546.03-3.093 0a.47.47 0 0 1-.328-.297 80 80 0 0 1 0-3.157.62.62 0 0 1 .296-.312", opacity: 0.99 }),
            React.createElement("path", { d: "M16.516 21.984H6.266a1 1 0 0 0-.157-.109 1 1 0 0 0-.125-.172v-10.25a.54.54 0 0 1 .344-.297 75 75 0 0 1 3.063 0 .52.52 0 0 1 .359.36q.023 1.578.016 3.156 1.578-.008 3.156.015a.52.52 0 0 1 .36.36q.023 1.578.015 3.156 1.578-.008 3.156.016a.52.52 0 0 1 .36.36q.03 1.53 0 3.062a.54.54 0 0 1-.297.343", opacity: 0.995 }),
            React.createElement("path", { d: "M16.89 12.328q1.563-.008 3.126.016a.48.48 0 0 1 .328.36q.03 1.515 0 3.03a.46.46 0 0 1-.328.36q-1.563.03-3.125 0a.47.47 0 0 1-.328-.39q-.032-1.485 0-2.97a.59.59 0 0 1 .328-.406", opacity: 0.983 })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "sampling-data_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M6 6h16v16H6z" })))));
}

export { SamplingData as default };
//# sourceMappingURL=SamplingData.js.map
