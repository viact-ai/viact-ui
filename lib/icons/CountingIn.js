import * as React from 'react';

function CountingIn({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 36 36", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 17.648, cy: 17.648, r: 14.809, fill: "#fff", stroke: "#EB5757", strokeWidth: 3, transform: "rotate(85.079 17.648 17.648)" }),
        React.createElement("path", { fill: "#333", d: "M14.57 12.559v9.953h-1.319v-9.953zm3.473 4.135v5.818h-1.265v-7.397h1.197zm-.3 1.84-.527-.021q.007-.759.225-1.402.219-.65.616-1.128a2.74 2.74 0 0 1 2.167-1.005q.546 0 .984.15.438.145.745.466.315.321.479.834.164.506.164 1.237v4.847h-1.272v-4.86q0-.582-.17-.93a1.05 1.05 0 0 0-.5-.513q-.327-.165-.806-.164-.472 0-.862.198a2.1 2.1 0 0 0-.663.547q-.273.35-.43.8-.15.444-.15.943" })));
}

export { CountingIn as default };
//# sourceMappingURL=CountingIn.js.map
