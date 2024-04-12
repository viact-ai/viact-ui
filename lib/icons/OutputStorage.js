import * as React from 'react';

function OutputStorage({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 40 40", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("rect", { width: 40, height: 40, fill: "#F2994A", rx: 8 }),
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M11.258 11.726c2.25-.008 4.5 0 6.75.023.492.09.898.324 1.219.703l9.468.047c.93.242 1.516.828 1.758 1.758.031 4.062.031 8.125 0 12.187-.242.93-.828 1.516-1.758 1.758-5.812.031-11.625.031-17.437 0-.93-.242-1.516-.828-1.758-1.758a892.7 892.7 0 0 1 0-12.937c.25-.93.837-1.524 1.758-1.781Zm.469 1.5c1.937-.008 3.875 0 5.812.023.275.003.486.12.633.352.312.686.671 1.342 1.078 1.968.334.328.733.539 1.195.633l7.782.047c.43.055.671.297.726.727.031 3 .031 6 0 9-.055.43-.297.671-.726.726-5.5.031-11 .031-16.5 0-.43-.055-.672-.297-.727-.726-.031-4-.031-8 0-12 .063-.43.305-.68.727-.75Zm8.39.75c2.703-.008 5.406 0 8.11.023.487.073.722.346.703.82a1.319 1.319 0 0 0-.235-.07l-7.78-.047c-.421-.069-.687-.31-.798-.726Z", clipRule: "evenodd", opacity: 0.993 })));
}

export { OutputStorage as default };
//# sourceMappingURL=OutputStorage.js.map
