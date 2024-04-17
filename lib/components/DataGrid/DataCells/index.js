import moment from 'moment';

const dateTimeCell = (value) => {
    if (!value) {
        return '';
    }
    return moment(value).format('MM/DD/YYYY [at] h:mm A');
};
const dataCells = {
    dateTime: dateTimeCell,
};

export { dataCells };
//# sourceMappingURL=index.js.map
