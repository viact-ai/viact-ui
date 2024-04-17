import * as React from 'react';

function ImageCount({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 30 30", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#56CCF2", fillRule: "evenodd", d: "M9.111 2.432a457.23 457.23 0 0 1 12.422.088c3.724.618 5.707 2.816 5.947 6.591.04 3.907.04 7.813 0 11.72-.068 2.275-.996 4.101-2.783 5.478a7.68 7.68 0 0 1-3.867 1.171c-3.906.04-7.812.04-11.719 0-2.277-.069-4.103-.996-5.478-2.783A7.68 7.68 0 0 1 2.46 20.83c-.04-3.906-.04-7.812 0-11.719.352-4.092 2.569-6.319 6.65-6.68Zm0 1.933c3.907-.01 7.813 0 11.72.03 2.927.252 4.5 1.844 4.716 4.775.049 2.149.039 4.297-.03 6.445-1.108-.814-2.26-.882-3.456-.205a345.696 345.696 0 0 1-5.801 4.922c-1.335.577-2.507.342-3.516-.703-.702-.508-1.483-.683-2.344-.527a3.715 3.715 0 0 0-.996.41 285.986 285.986 0 0 1-4.57 3.076 5.237 5.237 0 0 1-.44-1.875c-.039-3.848-.039-7.695 0-11.543.227-2.932 1.8-4.534 4.717-4.805Z", clipRule: "evenodd", opacity: 0.982 }),
        React.createElement("path", { fill: "#56CCF2", fillRule: "evenodd", d: "M11.104 6.943c1.925.113 2.96 1.128 3.105 3.047-.153 1.833-1.15 2.83-2.988 2.989-2.1-.235-3.086-1.407-2.96-3.516.374-1.497 1.321-2.337 2.843-2.52Z", clipRule: "evenodd", opacity: 0.977 })));
}

export { ImageCount as default };
//# sourceMappingURL=ImageCount.js.map
