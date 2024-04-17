import React__default from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MuiTableHead from '@mui/material/TableHead';
import { visuallyHidden } from '@mui/utils';
import { StyledTableCell } from './TableHead.styled.js';
import { FormControlLabel, Typography } from '@mui/material';
import { TableCheckbox } from '../DataCells/TableCheckbox.js';

function TableHead({ columns, isSelectAll = false, checkboxSelection, order, orderBy, headerStyle = {}, onRequestSort, onColumnHeaderClick, }) {
    const createSortHandler = (event, column) => {
        if (column.sortable && onRequestSort) {
            onRequestSort(event, column.property);
        }
    };
    return (React__default.createElement(MuiTableHead, null,
        React__default.createElement(TableRow, { sx: {
                ...headerStyle,
            } },
            checkboxSelection && (React__default.createElement(TableCell, { key: "checkbox", align: "left", padding: "none", width: '35px', sx: { marginLeft: 1, paddingLeft: 3 } },
                React__default.createElement(StyledTableCell, { hideSortIcon: true, active: false },
                    React__default.createElement(FormControlLabel, { control: React__default.createElement(TableCheckbox, { checked: isSelectAll, onClick: onColumnHeaderClick }), label: "" })))),
            columns.map((column, index) => (React__default.createElement(TableCell, { key: typeof column.label === 'string' ? column.label : index, align: column.align || 'left', sx: {
                    width: column.width || 'unset',
                    paddingLeft: column.disablePadding ? 0 : 4,
                    paddingRight: column.disablePadding ? 0 : 4,
                }, sortDirection: orderBy === column.property ? order : false },
                React__default.createElement(StyledTableCell, { hideSortIcon: !column.sortable, active: column.sortable && orderBy === column.property, direction: orderBy === column.property ? order : 'asc', onClick: (event) => createSortHandler(event, column) },
                    column.customHeader ? (column.customHeader) : (React__default.createElement(Typography, { variant: "body1", color: "text.primary" }, column.label)),
                    orderBy === column.property ? (React__default.createElement(Box, { component: "span", sx: visuallyHidden }, order === 'desc' ? 'sorted descending' : 'sorted ascending')) : null)))))));
}

export { TableHead as default };
//# sourceMappingURL=TableHead.js.map
