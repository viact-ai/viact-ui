import * as React from 'react';

function Edit({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#edit_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M18.8 5.417a2.389 2.389 0 0 0-.776-.54 2.31 2.31 0 0 0-1.832 0c-.29.125-.554.308-.776.54l-9.243 9.629a2.164 2.164 0 0 0-.498.838l-1.142 3.572a.677.677 0 0 0 .15.665.602.602 0 0 0 .639.158l3.43-1.19c.303-.105.578-.283.804-.519L18.8 8.943c.222-.232.399-.507.52-.81a2.584 2.584 0 0 0 0-1.908 2.502 2.502 0 0 0-.52-.808Zm-2.5.921a1.103 1.103 0 0 1 1.625-.01c.107.111.192.243.25.389a1.234 1.234 0 0 1-.259 1.304L17 8.976l-1.616-1.683.917-.955H16.3Zm-1.8 1.875 1.615 1.684-7.442 7.753a.806.806 0 0 1-.317.203l-2.242.778.747-2.334a.851.851 0 0 1 .195-.33L14.5 8.212Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "edit_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Edit as default };
//# sourceMappingURL=Edit.js.map
