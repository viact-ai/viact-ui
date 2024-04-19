import * as React from 'react';

function Setting({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#setting_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M14.079 1.5a.75.75 0 0 1 .714.52l.825 2.564q.52.254.995.575l2.634-.567a.75.75 0 0 1 .806.36l2.08 3.598a.75.75 0 0 1-.095.879l-1.808 1.995q.04.575 0 1.149l1.808 1.998a.75.75 0 0 1 .095.879l-2.08 3.6a.75.75 0 0 1-.806.358l-2.634-.567a8 8 0 0 1-.993.575l-.827 2.564a.75.75 0 0 1-.714.52H9.921a.75.75 0 0 1-.714-.52l-.823-2.562a8 8 0 0 1-.998-.578l-2.632.569a.75.75 0 0 1-.807-.36l-2.08-3.599a.75.75 0 0 1 .095-.879l1.808-1.998a8 8 0 0 1 0-1.146L1.962 9.429a.75.75 0 0 1-.094-.879l2.079-3.6a.75.75 0 0 1 .807-.359l2.632.569a8 8 0 0 1 .998-.578l.825-2.561a.75.75 0 0 1 .71-.521h4.16M13.53 3h-3.06l-.852 2.65-.574.281a7 7 0 0 0-.816.471l-.531.36-2.724-.588-1.53 2.652 1.867 2.067-.045.636a7 7 0 0 0 0 .942l.045.636-1.87 2.067 1.531 2.652 2.724-.587.531.359q.391.263.816.471l.575.28L10.47 21h3.063l.855-2.652.573-.279q.424-.207.814-.471l.53-.358 2.726.586 1.53-2.652-1.87-2.067.046-.636q.032-.472 0-.944l-.045-.635 1.87-2.066-1.532-2.652-2.725.585-.53-.357a7 7 0 0 0-.814-.471l-.573-.279L13.531 3zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "setting_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Setting as default };
//# sourceMappingURL=Setting.js.map
