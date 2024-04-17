function getValueOfNestedObject(key, object) {
    if (key.indexOf('.') <= -1) {
        return '';
    }
    const keys = key.split('.');
    let value = object[keys[0]];
    for (let i = 1; i < keys.length; i++) {
        value = value[keys[i]];
    }
    return value;
}

export { getValueOfNestedObject };
//# sourceMappingURL=ultils.js.map
