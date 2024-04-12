import Button from './Button.js';
import Menu from './Menu.js';
import Select from './Select.js';

function ComponentsOverrides(theme) {
    const button = Button();
    const select = Select();
    const menu = Menu(theme);
    return { ...button, ...select, ...menu };
}

export { ComponentsOverrides as default };
//# sourceMappingURL=index.js.map
