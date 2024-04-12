import * as React from 'react';

function Download2({ title, titleId, ...props }) {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props },
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#download2_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M12 15.575c-.133 0-.258-.02-.375-.062a.865.865 0 0 1-.325-.213l-3.6-3.6a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7.183-.183.421-.279.713-.287.292-.008.53.08.712.262L11 12.15V5c0-.283.096-.521.288-.713A.964.964 0 0 1 12 4c.283 0 .521.096.713.288.192.192.288.43.287.712v7.15l1.875-1.875c.183-.183.421-.271.713-.263a1 1 0 0 1 .712.288.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7l-3.6 3.6c-.1.1-.208.171-.325.213a1.082 1.082 0 0 1-.375.062ZM6 20c-.55 0-1.021-.196-1.413-.588A1.922 1.922 0 0 1 4 18v-2c0-.283.096-.521.288-.713A.964.964 0 0 1 5 15c.283 0 .521.096.713.288.192.192.288.43.287.712v2h12v-2c0-.283.096-.521.288-.713A.964.964 0 0 1 19 15c.283 0 .521.096.713.288.192.192.288.43.287.712v2c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0 1 18 20H6Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "download2_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}

export { Download2 as default };
//# sourceMappingURL=Download2.js.map
