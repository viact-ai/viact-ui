import * as React from 'react';

function Visualization({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "m3.708 17.51 7.584 4.304a1.438 1.438 0 0 0 1.416 0l7.584-4.304c.215-.123.393-.299.518-.51.124-.212.19-.452.19-.696V7.696c0-.244-.066-.484-.19-.696a1.408 1.408 0 0 0-.518-.51l-7.584-4.304a1.439 1.439 0 0 0-1.416 0L3.708 6.49A1.408 1.408 0 0 0 3.19 7c-.124.212-.19.452-.19.696v8.608c0 .245.066.484.19.696.125.212.303.387.518.51Zm9-13.716 6.876 3.902v7.717l-6.876-3.82v-7.8Zm-.71 9.003 6.955 3.865L12 20.608l-6.955-3.947 6.953-3.864ZM4.416 7.696l6.876-3.902v7.796l-6.876 3.82V7.697Z" })));
}

export { Visualization as default };
//# sourceMappingURL=Visualization.js.map