import * as React from 'react';

function OutputVisualize({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 40 40", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 40, height: 40, fill: "#9B51E0", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "m11.708 25.51 7.584 4.304a1.438 1.438 0 0 0 1.416 0l7.584-4.304c.215-.123.393-.299.518-.51.124-.212.19-.452.19-.696v-8.608c0-.245-.066-.484-.19-.696a1.408 1.408 0 0 0-.518-.51l-7.584-4.304a1.44 1.44 0 0 0-1.416 0l-7.584 4.304a1.408 1.408 0 0 0-.518.51c-.124.212-.19.451-.19.696v8.608c0 .245.066.484.19.696.125.212.303.387.518.51Zm9-13.716 6.876 3.902v7.717l-6.876-3.82v-7.8Zm-.71 9.003 6.955 3.865L20 28.608l-6.955-3.947 6.953-3.864Zm-7.582-5.101 6.876-3.902v7.796l-6.876 3.82v-7.714Z" })));
}

export { OutputVisualize as default };
//# sourceMappingURL=OutputVisualize.js.map