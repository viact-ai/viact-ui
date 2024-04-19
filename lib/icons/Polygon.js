import * as React from 'react';

function Polygon({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#polygon_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M10.5 3A1.5 1.5 0 0 0 9 4.5v.047l-3.797 2.39A1.5 1.5 0 0 0 4.5 6.75 1.5 1.5 0 0 0 3 8.25c0 .553.301 1.028.75 1.29v8.67c-.449.261-.75.735-.75 1.29A1.5 1.5 0 0 0 4.5 21c.553 0 1.028-.302 1.29-.75h9.42c.261.448.735.75 1.29.75a1.5 1.5 0 0 0 1.5-1.5c0-.3-.083-.587-.235-.821L19.594 15a1.503 1.503 0 0 0 .187-2.977l-1.43-4.288c.238-.267.399-.602.399-.985a1.5 1.5 0 0 0-1.5-1.5c-.384 0-.718.161-.985.398l-4.288-1.452A1.51 1.51 0 0 0 10.5 3m.985 2.625 4.288 1.406c.115.604.593 1.081 1.196 1.196l1.43 4.265a1.49 1.49 0 0 0-.141 1.852L16.406 18a1.49 1.49 0 0 0-1.195.75H5.79a1.5 1.5 0 0 0-.54-.54V9.54c.449-.261.75-.735.75-1.29v-.046l3.797-2.39c.21.11.448.187.703.187.378 0 .72-.144.985-.375z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "polygon_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Polygon as default };
//# sourceMappingURL=Polygon.js.map
