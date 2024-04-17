import * as React from 'react';

function Discard({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#discard_svg__a)" },
            React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.903 21.828h-1.627c-3.271-.425-5.678-2.09-7.222-4.996a8.489 8.489 0 0 1-.852-4.182c.216-.512.597-.699 1.143-.562.314.12.5.347.561.678.068 2.825 1.3 4.962 3.698 6.409 2.324 1.213 4.647 1.213 6.971 0 2.355-1.424 3.582-3.521 3.679-6.293-.12-2.74-1.347-4.812-3.679-6.216a5.957 5.957 0 0 0-2.091-.735.182.182 0 0 0-.136.135l-.039 1.51c.008.16-.063.219-.212.175a208.91 208.91 0 0 1-2.982-2.401 2.355 2.355 0 0 1-.368-.368.323.323 0 0 1 .038-.271A309.689 309.689 0 0 1 13.058 2h.193c.023.049.043.1.059.155l.038 1.743c.037.041.07.087.097.135 2.8.557 4.937 2.048 6.41 4.473 1.352 2.562 1.507 5.195.464 7.9-1.484 3.153-3.956 4.96-7.416 5.422Z", clipRule: "evenodd", opacity: 0.974 })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "discard_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Discard as default };
//# sourceMappingURL=Discard.js.map
