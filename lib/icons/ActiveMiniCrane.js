import * as React from 'react';

function ActiveMiniCrane({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#EB5757", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M29 15v-1a1 1 0 0 0-1-1H18v-1h-3v1h-1v2h1v9h-1v-2h-2v2h-1v5.5h11V24h-1v-2h-2v2h-1v-9h8v4.62c-.47.17-.81.61-.81 1.14 0 .44.24.84.61 1.06V23h.62c.34 0 .61.28.61.62 0 .34-.27.62-.61.62-.22 0-.42-.12-.53-.31a.62.62 0 0 0-.84-.22c-.3.16-.4.54-.23.84.33.56.94.92 1.6.92 1.01 0 1.84-.83 1.84-1.85 0-.78-.5-1.48-1.23-1.74v-.06c.38-.22.62-.62.62-1.06 0-.46-.27-.85-.65-1.06V15h2Zm-12 7.66-1 1v-1.42l1-1v1.42Zm0-2.95-1 1v-1.42l1-1v1.42Zm-1-2v-1.42l1-1v1.42l-1 1Z" })));
}

export { ActiveMiniCrane as default };
//# sourceMappingURL=ActiveMiniCrane.js.map
