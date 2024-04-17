import * as React from 'react';

function DangerZoneBlueHelmet({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "currentColor", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M29.89 21.336c0-2.986-2.147-5.538-4.847-6.61l-1.82 3.037v-4.166a.604.604 0 0 0-.618-.595h-3.208a.604.604 0 0 0-.618.595v4.165l-1.82-3.035c-2.7 1.07-4.848 3.622-4.848 6.609v2.38h17.78v-2.38Zm1.066 3.776a.555.555 0 0 0-.51-.324h-18.89a.572.572 0 0 0-.305.088.521.521 0 0 0-.099.816c.092.093 2.349 2.31 9.818 2.31 7.468 0 9.726-2.216 9.848-2.31a.485.485 0 0 0 .138-.58Z" })));
}

export { DangerZoneBlueHelmet as default };
//# sourceMappingURL=DangerZoneBlueHelmet.js.map