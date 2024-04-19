import * as React from 'react';

function Calendar({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#calendar_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M7.556 11.1h1.777v1.8H7.556zM20 6.6v12.6c0 .99-.8 1.8-1.778 1.8H5.778c-.472 0-.924-.19-1.257-.527A1.8 1.8 0 0 1 4 19.2l.009-12.6c0-.99.782-1.8 1.769-1.8h.889V3h1.777v1.8h7.112V3h1.777v1.8h.89C19.2 4.8 20 5.61 20 6.6M5.778 8.4h12.444V6.6H5.778zm12.444 10.8v-9H5.778v9zm-3.555-6.3h1.777v-1.8h-1.777zm-3.556 0h1.778v-1.8H11.11z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "calendar_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Calendar as default };
//# sourceMappingURL=Calendar.js.map
