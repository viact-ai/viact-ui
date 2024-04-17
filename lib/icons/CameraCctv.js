import * as React from 'react';

function CameraCctv({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 52 51", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M49.033 18.706a2.576 2.576 0 0 0-1.325-3.4L13.931.436c-2.57-1.131-5.735.132-6.833 2.692l-5.71 13.315a5.17 5.17 0 0 0 2.719 6.778l15.598 6.686-3.204 8.008H5.334v-7.75H.167v20.667h5.167v-7.75H16.5a5.135 5.135 0 0 0 4.795-3.25l3.157-7.89 13.446 5.761a2.583 2.583 0 0 0 3.384-1.335l.806-1.834 4.395 1.756 5.166-12.916-3.968-1.584 1.351-3.084ZM37.58 31.948 6.142 18.476l5.704-13.31 31.419 13.831-5.686 12.95Z" })));
}

export { CameraCctv as default };
//# sourceMappingURL=CameraCctv.js.map
