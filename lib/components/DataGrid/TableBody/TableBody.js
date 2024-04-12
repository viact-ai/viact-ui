import React__default from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MuiTableBody from '@mui/material/TableBody';
import { getValueOfNestedObject } from '../ultils.js';
import { dataCells } from '../DataCells/index.js';
import { TableCheckbox } from '../DataCells/TableCheckbox.js';

const TableBody = ({ columns = [], data, checkboxSelection, onRowSelect, isSelected, }) => {
    const getColumValue = (cell, row, rowIndex) => {
        if (cell.formatter) {
            return cell.formatter(row, cell, rowIndex);
        }
        let value = '';
        if (cell.property.indexOf('.') > -1) {
            value = getValueOfNestedObject(cell.property, row);
        }
        else {
            value = row[cell.property];
        }
        if (cell.dataType) {
            const dataCell = dataCells[cell.dataType];
            if (dataCell) {
                return dataCell(value);
            }
        }
        return value;
    };
    return (React__default.createElement(MuiTableBody, null, data.map((row, index) => {
        return (React__default.createElement(TableRow, { hover: true, role: "checkbox", "aria-checked": false, tabIndex: -1, key: row.id || `row_${index}`, selected: false },
            checkboxSelection && (React__default.createElement(TableCell, { align: "left", key: "col_checkbox", padding: "none", sx: { paddingLeft: 3 } },
                React__default.createElement(TableCheckbox, { sx: {
                        padding: 0,
                    }, checked: isSelected(row), onClick: (event) => onRowSelect(event, row) }))),
            columns.map((column) => {
                return (React__default.createElement(TableCell, { onClick: evt => column.onRowClick && column.onRowClick(row, evt), align: column.align || 'left', key: `row_${row.id || index}_${column.label}`, sx: {
                        paddingLeft: column.disablePadding ? 0 : 4,
                        paddingRight: column.disablePadding ? 0 : 4,
                    }, ...column.propsRow }, getColumValue(column, row, index)));
            })));
    })));
};

export { TableBody as default };
//# sourceMappingURL=TableBody.js.map
