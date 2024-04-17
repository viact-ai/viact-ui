import * as React from 'react';

function SamplingData({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 28 29", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 28, height: 28, y: 0.5, fill: "currentColor", rx: 8 }),
        React.createElement("g", { fill: "#fff", fillRule: "evenodd", clipPath: "url(#sampling-data_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { d: "M18.516 5.984h3.187c.047.041.099.078.156.11.038.063.08.12.125.172v3.187a.544.544 0 0 1-.343.297c-1.021.02-2.042.02-3.063 0a.456.456 0 0 1-.36-.36 74.8 74.8 0 0 1 0-3.062.544.544 0 0 1 .298-.344ZM11.234 6.922c1.053-.005 2.105 0 3.157.016a.47.47 0 0 1 .296.328c.021 1.03.021 2.062 0 3.093a.44.44 0 0 1-.328.329c-1.03.02-2.062.02-3.093 0a.47.47 0 0 1-.329-.297 79.83 79.83 0 0 1 0-3.157.621.621 0 0 1 .297-.312Z", opacity: 0.99 }),
            React.createElement("path", { d: "M16.516 21.984H6.266a.901.901 0 0 0-.157-.109 1.109 1.109 0 0 0-.125-.172v-10.25a.544.544 0 0 1 .344-.297 74.8 74.8 0 0 1 3.063 0 .52.52 0 0 1 .359.36c.016 1.052.02 2.104.016 3.156 1.052-.005 2.104 0 3.156.015a.52.52 0 0 1 .36.36c.015 1.052.02 2.104.015 3.156 1.052-.005 2.104 0 3.156.016a.52.52 0 0 1 .36.36c.02 1.02.02 2.04 0 3.062a.544.544 0 0 1-.297.343Z", opacity: 0.995 }),
            React.createElement("path", { d: "M16.89 12.328c1.042-.005 2.084 0 3.126.016a.48.48 0 0 1 .328.36c.02 1.01.02 2.02 0 3.03a.46.46 0 0 1-.328.36c-1.042.02-2.084.02-3.125 0a.47.47 0 0 1-.328-.39c-.021-.99-.021-1.98 0-2.97a.59.59 0 0 1 .328-.406Z", opacity: 0.983 })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "sampling-data_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M6 6h16v16H6z" })))));
}

export { SamplingData as default };
//# sourceMappingURL=SamplingData.js.map
