import * as React from 'react';

function LadderDetection({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 42 42", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 42, height: 42, fill: "#F2994A", rx: 8 }),
        React.createElement("path", { fill: "#fff", d: "M29.416 28.693 24.484 15.13l.743-2.05h.742a1.172 1.172 0 1 0 0-2.345h-9.375a1.172 1.172 0 0 0-.867 1.961c.197.216.468.349.76.373l-5.684 15.625a1.182 1.182 0 0 0 .703 1.504 1.172 1.172 0 0 0 1.504-.703l.85-2.353h3.76l-.567 1.552a1.182 1.182 0 0 0 .703 1.504 1.172 1.172 0 0 0 1.504-.703l1.709-4.697H25.5l1.709 4.697a1.172 1.172 0 0 0 1.104.772 1.153 1.153 0 0 0 1.06-.676c.132-.282.147-.604.043-.897Zm-9.238-8.584h-3.76l.86-2.343h3.75l-.85 2.343Zm1.699-4.687h-3.75l.85-2.344h3.76l-.86 2.344Zm-7.158 9.375.85-2.344h3.76l-.86 2.344h-3.75Zm7.1-2.344 1.415-3.896 1.416 3.896h-2.832Z" })));
}

export { LadderDetection as default };
//# sourceMappingURL=LadderDetection.js.map
