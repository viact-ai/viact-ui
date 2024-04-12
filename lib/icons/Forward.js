import * as React from 'react';

function Forward({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd", clipPath: "url(#forward_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { d: "M11.082 1.98h1.797c3.94.502 6.733 2.56 8.379 6.172.37.95.612 1.927.723 2.93v1.758a10.53 10.53 0 0 1-1.192 3.945 4.316 4.316 0 0 1-.488.723c-.383.2-.747.175-1.094-.078a.936.936 0 0 1-.176-.801c1.537-2.525 1.771-5.169.703-7.93-1.263-2.747-3.379-4.42-6.347-5.02-3.415-.437-6.17.702-8.262 3.419-1.711 2.562-2.01 5.283-.898 8.164 1.024 2.3 2.723 3.87 5.097 4.707 2.651.808 5.138.456 7.461-1.055.469-.134.814.016 1.035.45a.88.88 0 0 1-.117.82 9.797 9.797 0 0 1-4.863 1.796h-1.758c-3.474-.409-6.098-2.114-7.871-5.117a10.598 10.598 0 0 1-1.23-3.984v-1.797c.484-3.815 2.45-6.568 5.898-8.262 1.03-.44 2.099-.72 3.203-.84Z", opacity: 0.971 }),
            React.createElement("path", { d: "M11.707 7.41c.298-.04.571.018.82.176l2.989 3.066c.268.434.222.831-.137 1.192-.348.192-.687.179-1.016-.04a46.297 46.297 0 0 0-1.582-1.62l-.039 5.859c-.265.5-.662.637-1.191.41a.875.875 0 0 1-.332-.41l-.04-5.86a55.706 55.706 0 0 1-1.777 1.739c-.659.172-1.036-.075-1.132-.742a.807.807 0 0 1 .175-.528l2.989-3.066.273-.176Z", opacity: 0.979 })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "forward_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M2 2h20v20H2z" })))));
}

export { Forward as default };
//# sourceMappingURL=Forward.js.map
