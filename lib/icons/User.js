import * as React from 'react';

function User({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m3-4.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m6 12c0 1.5-1.5 1.5-1.5 1.5h-15S3 21 3 19.5s1.5-6 9-6 9 4.5 9 6m-1.5-.006c-.002-.369-.231-1.479-1.248-2.496C17.274 16.02 15.434 15 12 15c-3.435 0-5.274 1.02-6.252 1.998-1.017 1.017-1.245 2.127-1.248 2.496z" })));
}

export { User as default };
//# sourceMappingURL=User.js.map
