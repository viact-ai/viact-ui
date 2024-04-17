import * as React from 'react';

function HeightOutlined({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M16.406 16.328H3.594a.157.157 0 0 0-.156.156v1.172c0 .086.07.157.156.157h12.812c.086 0 .157-.07.157-.157v-1.172a.157.157 0 0 0-.157-.156Zm0-14.14H3.594a.157.157 0 0 0-.156.156v1.172c0 .086.07.156.156.156h12.812c.086 0 .157-.07.157-.156V2.344a.157.157 0 0 0-.157-.156ZM11.93 7.383a.142.142 0 0 0 .111-.229l-1.969-2.492a.14.14 0 0 0-.172-.04.14.14 0 0 0-.048.04l-1.97 2.492a.141.141 0 0 0 .112.229h1.303v5.234H8.07a.142.142 0 0 0-.111.229l1.969 2.49a.14.14 0 0 0 .22 0l1.97-2.49a.141.141 0 0 0-.112-.229h-1.303V7.383h1.227Z" })));
}

export { HeightOutlined as default };
//# sourceMappingURL=HeightOutlined.js.map
