import * as React from 'react';

function OutputApi({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 40 40", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 40, height: 40, fill: "#F2C94C", rx: 8 }),
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M21.781 13.01c1.101-.085 1.616.418 1.545 1.508L19.59 25.724c-.335.569-.826.772-1.472.61-.642-.29-.894-.78-.755-1.472L21.1 13.656c.173-.281.4-.497.682-.647Z", clipRule: "evenodd", opacity: 0.96 }),
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M14.67 14.805c1.227.156 1.598.803 1.113 1.94-.983.97-1.953 1.952-2.91 2.945.957.992 1.927 1.974 2.91 2.945.48 1.05.158 1.696-.97 1.94a2.084 2.084 0 0 1-.718-.252l-3.915-3.915a1.527 1.527 0 0 1 0-1.437l3.915-3.915c.19-.106.382-.19.574-.251ZM25.733 14.805c.306.017.594.1.862.251l3.915 3.915c.24.48.24.958 0 1.437l-3.915 3.915c-1.029.48-1.675.168-1.94-.934.034-.268.118-.52.252-.754.983-.97 1.952-1.953 2.91-2.945a168.597 168.597 0 0 0-2.91-2.946c-.47-.976-.194-1.623.826-1.94Z", clipRule: "evenodd", opacity: 0.958 })));
}

export { OutputApi as default };
//# sourceMappingURL=OutputApi.js.map
