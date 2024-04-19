import * as React from 'react';

function Filter({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M2.79 5.445q9.187-.012 18.374.024.816.171.844 1.008-.029.837-.844 1.007-9.187.048-18.375 0-.816-.171-.844-1.007.043-.84.844-1.032", opacity: 0.968 }),
        React.createElement("path", { fill: "currentColor", d: "M5.79 11.445q6.187-.012 12.374.024.816.171.844 1.008-.029.837-.844 1.007-6.187.048-12.375 0-.816-.171-.844-1.007.043-.84.844-1.032", opacity: 0.967 }),
        React.createElement("path", { fill: "currentColor", d: "M8.79 17.445q3.187-.012 6.374.024.958.216.82 1.195-.128.691-.82.82-3.187.048-6.375 0-.816-.171-.844-1.007.043-.84.844-1.032", opacity: 0.965 })));
}

export { Filter as default };
//# sourceMappingURL=Filter.js.map
