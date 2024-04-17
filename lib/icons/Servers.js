import * as React from 'react';

function Servers({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 90 90", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "evenodd", clipPath: "url(#servers_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { fill: "url(#servers_svg__b)", d: "M32.08-.088h10.547a67.32 67.32 0 0 1 21.621 4.834 23.501 23.501 0 0 1 9.053 6.768 11.274 11.274 0 0 1 1.582 3.867 936.968 936.968 0 0 1-.176 36.21c-.747.897-1.655 1.102-2.725.616a3.135 3.135 0 0 1-.79-.967c-.03-2.638-.118-5.275-.264-7.91-3.748 3.017-7.967 5.155-12.656 6.416-13.695 3.567-27.406 3.625-41.133.176-4.898-1.292-9.322-3.489-13.272-6.592a197.292 197.292 0 0 0 0 11.777c.521 1.832 1.547 3.326 3.076 4.483a28.717 28.717 0 0 0 4.57 2.812 145.92 145.92 0 0 0 6.505 2.55c.981 1.14.923 2.224-.176 3.251-.759.333-1.52.333-2.285 0a33.723 33.723 0 0 1-11.69-6.064c-.168 4.169-.11 8.329.176 12.48a9.792 9.792 0 0 0 3.428 4.131 43.184 43.184 0 0 0 10.547 4.922c.934.845 1.08 1.812.439 2.9a2.741 2.741 0 0 1-1.582.703 36.57 36.57 0 0 1-12.744-6.064C2.023 79.433.617 77.236-.088 74.619V15.03a13.162 13.162 0 0 1 3.164-5.361c3.696-3.197 7.915-5.482 12.656-6.855a79.773 79.773 0 0 1 16.348-2.9Zm1.055 3.867A79.135 79.135 0 0 1 57.04 6.33a34.758 34.758 0 0 1 10.723 5.097c1.809 1.364 2.922 3.151 3.34 5.361-.418 2.21-1.531 3.997-3.34 5.361a34.758 34.758 0 0 1-10.723 5.098c-12.13 3.124-24.317 3.358-36.563.703a40.956 40.956 0 0 1-12.48-5.097c-5.625-4.043-5.625-8.086 0-12.13a44.898 44.898 0 0 1 16.348-5.888 144.95 144.95 0 0 1 8.789-1.055ZM3.779 24.521c4.476 3.498 9.515 5.871 15.117 7.12a87.41 87.41 0 0 0 29.532 1.406c7.009-.774 13.571-2.883 19.687-6.328a83.034 83.034 0 0 0 2.9-2.198c.118 3.81.118 7.618 0 11.426-.405 1.894-1.372 3.447-2.9 4.658-4.23 3.034-8.918 5.085-14.062 6.153-12.07 2.633-24.081 2.398-36.035-.703a39.932 39.932 0 0 1-10.196-4.57 16.663 16.663 0 0 1-3.427-3.604 8.764 8.764 0 0 1-.528-1.582 394.596 394.596 0 0 1-.088-11.777Z", opacity: 0.956 }),
            React.createElement("path", { fill: "url(#servers_svg__c)", d: "M89.912 60.38v10.196a12.07 12.07 0 0 1-1.23 2.461c.512.79.922 1.61 1.23 2.461v10.195c-.31.971-.808 1.85-1.494 2.637a7.563 7.563 0 0 1-2.725 1.582H26.631c-1.53-.503-2.731-1.44-3.604-2.812-.21-.455-.386-.924-.527-1.407a147.86 147.86 0 0 1 0-10.195 7.864 7.864 0 0 1 1.143-2.46 7.865 7.865 0 0 1-1.143-2.462 147.86 147.86 0 0 1 0-10.195c.557-2.197 1.934-3.574 4.13-4.131 19.688-.117 39.376-.117 59.063 0a5.893 5.893 0 0 1 2.637 1.406 7.56 7.56 0 0 1 1.582 2.725Zm-62.402-.35c19.101-.03 38.203 0 57.304.087.499.264.88.645 1.143 1.143.117 2.87.117 5.742 0 8.613-.299.651-.797 1.032-1.494 1.143-18.867.117-37.734.117-56.602 0-.697-.11-1.195-.492-1.494-1.143a105.546 105.546 0 0 1 0-8.613 3.848 3.848 0 0 1 1.143-1.23Zm.351 14.94c18.868-.029 37.735 0 56.602.089.697.11 1.195.49 1.494 1.142.117 2.871.117 5.743 0 8.614a2.689 2.689 0 0 1-1.142 1.142 4669.88 4669.88 0 0 1-57.305 0 2.689 2.689 0 0 1-1.143-1.142 105.546 105.546 0 0 1 0-8.614c.328-.653.826-1.063 1.494-1.23Z", opacity: 0.967 }),
            React.createElement("path", { fill: "url(#servers_svg__d)", d: "M31.377 63.545c1.813.085 2.545 1.022 2.197 2.812-.576.986-1.425 1.309-2.549.967-1.088-.63-1.41-1.538-.966-2.724.37-.461.81-.813 1.318-1.055Z", opacity: 0.903 }),
            React.createElement("path", { fill: "url(#servers_svg__e)", d: "M65.127 63.545c5.274-.03 10.547 0 15.82.088 1.387.525 1.826 1.492 1.319 2.9-.272.33-.594.594-.967.791-5.508.118-11.016.118-16.524 0-1.246-.796-1.48-1.821-.703-3.076.315-.32.666-.554 1.055-.703Z", opacity: 0.959 }),
            React.createElement("path", { fill: "url(#servers_svg__f)", d: "M31.025 78.662c2.02-.236 2.87.643 2.55 2.637-1.1 1.534-2.272 1.593-3.517.176-.43-1.21-.108-2.147.967-2.813Z", opacity: 0.903 }),
            React.createElement("path", { fill: "url(#servers_svg__g)", d: "M64.775 78.662c5.509-.03 11.016 0 16.524.088 1.246.796 1.48 1.822.703 3.076a1.983 1.983 0 0 1-1.055.615 355.66 355.66 0 0 1-15.82 0c-1.387-.525-1.826-1.491-1.318-2.9.304-.334.626-.627.966-.879Z", opacity: 0.959 })),
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
