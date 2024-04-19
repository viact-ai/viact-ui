import * as React from 'react';

function Search2({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 80 80", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "evenodd", clipPath: "url(#search2_svg__a)", clipRule: "evenodd" },
            React.createElement("path", { fill: "url(#search2_svg__b)", d: "M47.11-.078h6.25q19.035 2.9 25.39 21.094.756 2.73 1.172 5.468v6.25a32.5 32.5 0 0 1-4.297 12.5q-1.523 1.556-3.672 1.016Q69.39 45.07 70 42.266q6.147-10.714 1.563-22.188Q64.97 6.976 50.234 6.172q-12.903.54-19.921 11.25-7.032 12.188 0 24.375Q39.2 54.868 54.922 52.5a24.3 24.3 0 0 0 5.469-1.875q3.89-.95 4.375 2.969.132 1.686-1.25 2.656-9.985 4.846-20.782 2.188a33 33 0 0 1-7.968-3.36 683 683 0 0 1-13.36 16.719l-6.172 6.172a13 13 0 0 1-4.218 1.953H7.578q-6.093-1.563-7.656-7.656v-3.438a13 13 0 0 1 1.953-4.219l6.328-6.328A1009 1009 0 0 1 24.766 45q-6.61-11.35-3.047-23.984Q28.074 2.823 47.109-.078M28.515 50.234q.814.306 1.015 1.094A1009 1009 0 0 1 16.25 67.891l-5.078 5.078q-3.13 1.701-4.766-1.485a3.84 3.84 0 0 1 .469-2.812 177 177 0 0 1 6.328-6.172q7.63-6.195 15.313-12.266", opacity: 0.971 }),
            React.createElement("path", { fill: "url(#search2_svg__c)", d: "M49.14 12.422q9.51-.342 15.235 7.188a22.7 22.7 0 0 1 1.719 3.125q.898 3.4-2.422 4.453-1.963.205-3.203-1.328-3.314-7.207-11.328-7.266-2.638-1.253-1.953-4.14.55-1.45 1.953-2.032", opacity: 0.965 })),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "search2_svg__b", x1: 79.922, x2: 39.922, y1: -0.078, y2: 43.533, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("linearGradient", { id: "search2_svg__c", x1: 66.285, x2: 59.284, y1: 12.407, y2: 22.326, gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#F1F1F5" }),
                React.createElement("stop", { offset: 1, stopColor: "#CFCED8" })),
            React.createElement("clipPath", { id: "search2_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h80v80H0z" })))));
}

export { Search2 as default };
//# sourceMappingURL=Search2.js.map
