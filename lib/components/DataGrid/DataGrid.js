import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from './TableHead/TableHead.js';
import TableBody from './TableBody/TableBody.js';
import Pagination from '@mui/material/Pagination';
import { Skeleton } from '@mui/material';
import EmptyData from './EmptyData/EmptyData.js';

function GridData({ columns, checkboxSelection, data = [], pageNumber = 1, pageSize = 10, rowsPerPageOptions = [5, 10, 50], totalRecords, loading, onPageChange, onPageSizeChange, onOderByChange, onRowClick, onColumnHeaderClick: handleColumnClick, isSelected, isSelectAll, hidePagination, headerStyle, showEmptyBox, }) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('');
    const [selected, setSelected] = React.useState([]);
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        if (onOderByChange) {
            onOderByChange(property, isAsc ? 'desc' : 'asc');
        }
    };
    const handleChangePage = (event, newPage) => {
        onPageChange(newPage);
    };
    const onColumnHeaderClick = (event) => {
        if (handleColumnClick) {
            handleColumnClick(event);
        }
    };
    return (React.createElement(Box, { sx: { width: '100%' } },
        React.createElement(TableContainer, { sx: { width: '100%' } },
            React.createElement(Table, { "aria-labelledby": "tableTitle", size: 'medium' },
                React.createElement(TableHead, { headerStyle: headerStyle, isSelectAll: isSelectAll, columns: columns, numSelected: selected.length, order: order, orderBy: orderBy, rowCount: data.length, onRequestSort: handleRequestSort, checkboxSelection: checkboxSelection, onColumnHeaderClick: onColumnHeaderClick }),
                !loading && data.length > 0 && (React.createElement(TableBody, { columns: columns, data: data, checkboxSelection: checkboxSelection, onRowSelect: onRowClick, isSelected: isSelected }))),
            loading && (React.createElement(Box, { sx: {
                    height: 'max-content',
                    width: '100%',
                } }, [...Array(pageSize)].map(value => (React.createElement(Skeleton, { key: value, variant: "rectangular", sx: { my: 4, mx: 1, height: '35px' } }))))),
            !loading && data.length === 0 && showEmptyBox && React.createElement(EmptyData, null)),
        !hidePagination && (React.createElement(Box, { paddingTop: 4, paddingBottom: 4, display: "flex", alignItems: "center", justifyContent: "flex-end", sx: {
                '& button.Mui-selected': {
                    border: '1px solid gray',
                    backgroundColor: '#fff',
                },
            } },
            React.createElement(Pagination, { onChange: handleChangePage, count: Math.ceil(totalRecords / pageSize), page: pageNumber, variant: "outlined", shape: "rounded", showFirstButton: true, showLastButton: true, size: "medium" })))));
}

export { GridData as default };
//# sourceMappingURL=DataGrid.js.map
