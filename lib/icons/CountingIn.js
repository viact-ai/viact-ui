import * as React from 'react';

function CountingIn({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 36 36", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 17.648, cy: 17.648, r: 14.809, fill: "#fff", stroke: "#EB5757", strokeWidth: 3, transform: "rotate(85.079 17.648 17.648)" }),
        React.createElement("path", { fill: "#333", d: "M14.57 12.559v9.953h-1.319v-9.953h1.32Zm3.473 4.135v5.818h-1.265v-7.397h1.197l.068 1.58Zm-.3 1.84-.527-.021c.004-.506.08-.973.225-1.402.146-.433.351-.809.616-1.128a2.742 2.742 0 0 1 2.167-1.005c.364 0 .692.05.984.15.292.097.54.252.745.466.21.214.37.492.479.834.109.337.164.75.164 1.237v4.847h-1.272v-4.86c0-.388-.057-.698-.17-.93a1.05 1.05 0 0 0-.5-.513c-.218-.11-.487-.164-.806-.164-.315 0-.602.066-.862.198a2.06 2.06 0 0 0-.663.547c-.182.233-.326.5-.43.8-.1.296-.15.61-.15.943Z" })));
}

export { CountingIn as default };
//# sourceMappingURL=CountingIn.js.map
