import * as React from 'react';

function Servers({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 90 90", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "evenodd", clipPath: "url(#servers_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { fill: "url(#servers_svg__b)", d: "M32.08-.088h10.547a67.3 67.3 0 0 1 21.621 4.834 23.5 23.5 0 0 1 9.053 6.768 11.3 11.3 0 0 1 1.582 3.867 937 937 0 0 1-.176 36.21q-1.12 1.345-2.725.616a3.1 3.1 0 0 1-.79-.967q-.045-3.957-.264-7.91-5.622 4.525-12.656 6.416-20.542 5.35-41.133.176-7.347-1.938-13.272-6.592a197 197 0 0 0 0 11.777q.782 2.748 3.076 4.483a28.7 28.7 0 0 0 4.57 2.812 146 146 0 0 0 6.505 2.55q1.472 1.71-.176 3.251-1.138.5-2.285 0a33.7 33.7 0 0 1-11.69-6.064q-.253 6.254.176 12.48a9.8 9.8 0 0 0 3.428 4.131 43.2 43.2 0 0 0 10.547 4.922q1.4 1.268.439 2.9a2.74 2.74 0 0 1-1.582.703 36.6 36.6 0 0 1-12.744-6.064Q.969 78.544-.088 74.619V15.03a13.16 13.16 0 0 1 3.164-5.361Q8.62 4.872 15.732 2.813a79.8 79.8 0 0 1 16.348-2.9m1.055 3.867A79.1 79.1 0 0 1 57.04 6.33a34.8 34.8 0 0 1 10.723 5.097q2.713 2.046 3.34 5.361-.627 3.315-3.34 5.361a34.8 34.8 0 0 1-10.723 5.098q-18.195 4.686-36.562.703a41 41 0 0 1-12.48-5.097q-8.439-6.064 0-12.13a44.9 44.9 0 0 1 16.347-5.888 145 145 0 0 1 8.789-1.055M3.779 24.522q6.714 5.245 15.118 7.119a87.4 87.4 0 0 0 29.53 1.406q10.514-1.16 19.688-6.328a83 83 0 0 0 2.9-2.198q.177 5.714 0 11.426-.608 2.841-2.9 4.658-6.346 4.551-14.062 6.153-18.104 3.949-36.035-.703a40 40 0 0 1-10.196-4.57 16.7 16.7 0 0 1-3.427-3.604 8.8 8.8 0 0 1-.528-1.582 395 395 0 0 1-.088-11.777", opacity: 0.956 }),
            React.createElement("path", { fill: "url(#servers_svg__c)", d: "M89.912 60.38v10.196a12 12 0 0 1-1.23 2.461q.768 1.185 1.23 2.461v10.195q-.465 1.456-1.494 2.637a7.6 7.6 0 0 1-2.725 1.582H26.631q-2.295-.754-3.604-2.812-.315-.683-.527-1.407a148 148 0 0 1 0-10.195 7.9 7.9 0 0 1 1.143-2.46 7.9 7.9 0 0 1-1.143-2.462 148 148 0 0 1 0-10.195q.836-3.295 4.13-4.131 29.532-.175 59.063 0a5.9 5.9 0 0 1 2.637 1.406 7.6 7.6 0 0 1 1.582 2.725m-62.402-.35q28.652-.044 57.304.087.748.396 1.143 1.143.176 4.306 0 8.613-.448.976-1.494 1.143-28.3.176-56.602 0-1.046-.166-1.494-1.143a106 106 0 0 1 0-8.613 3.85 3.85 0 0 1 1.143-1.23m.351 14.94q28.302-.044 56.602.089 1.046.165 1.494 1.142.176 4.307 0 8.614a2.7 2.7 0 0 1-1.142 1.142 4670 4670 0 0 1-57.305 0 2.7 2.7 0 0 1-1.143-1.142 106 106 0 0 1 0-8.614q.492-.98 1.494-1.23", opacity: 0.967 }),
            React.createElement("path", { fill: "url(#servers_svg__d)", d: "M31.377 63.545q2.72.127 2.197 2.812-.864 1.48-2.549.967-1.632-.945-.966-2.724.555-.692 1.318-1.055", opacity: 0.903 }),
            React.createElement("path", { fill: "url(#servers_svg__e)", d: "M65.127 63.545q7.91-.044 15.82.088 2.08.788 1.319 2.9-.408.495-.967.791-8.262.177-16.524 0-1.869-1.194-.703-3.076.472-.48 1.055-.703", opacity: 0.959 }),
            React.createElement("path", { fill: "url(#servers_svg__f)", d: "M31.025 78.662q3.03-.354 2.55 2.637-1.65 2.301-3.517.176-.645-1.814.967-2.813", opacity: 0.903 }),
            React.createElement("path", { fill: "url(#servers_svg__g)", d: "M64.775 78.662q8.263-.044 16.524.088 1.869 1.195.703 3.076a2 2 0 0 1-1.055.615 356 356 0 0 1-15.82 0q-2.08-.787-1.318-2.9.456-.501.966-.879", opacity: 0.959 })),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "servers_svg__b", x1: 74.981, x2: 31.229, y1: -0.088, y2: 40.901, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "servers_svg__c", x1: 89.912, x2: 77.076, y1: 56.162, y2: 84.152, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "servers_svg__d", x1: 33.658, x2: 31.698, y1: 63.545, y2: 65.617, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "servers_svg__e", x1: 82.47, x2: 81.76, y1: 63.534, y2: 67.293, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "servers_svg__f", x1: 33.64, x2: 31.701, y1: 78.624, y2: 80.682, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "servers_svg__g", x1: 82.45, x2: 81.741, y1: 78.651, y2: 82.41, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("clipPath", { id: "servers_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h90v90H0z" })))));
}

export { Servers as default };
//# sourceMappingURL=Servers.js.map
