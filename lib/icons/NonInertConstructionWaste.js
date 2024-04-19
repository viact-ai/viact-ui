import * as React from 'react';

function NonInertConstructionWaste({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#219653", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "m28.029 17.556-2.055 12.267a.77.77 0 0 1-.751.628h-9.446a.77.77 0 0 1-.751-.628l-2.055-12.267a.767.767 0 0 1 .752-.89h13.539a.77.77 0 0 1 .767.89m.904-3.19a.767.767 0 0 1-.766.767H12.833a.767.767 0 0 1 0-1.533h3.834v-2.3a.767.767 0 0 1 .766-.767h6.134a.767.767 0 0 1 .766.767v2.3h3.834a.767.767 0 0 1 .766.767M22.8 13.6v-1.533h-4.6V13.6z" })));
}

export { NonInertConstructionWaste as default };
//# sourceMappingURL=NonInertConstructionWaste.js.map
