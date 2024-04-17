import * as React from 'react';
import { TableCellProps } from '@mui/material';
export interface Column {
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    checkboxSelection?: boolean;
    customHeader?: JSX.Element;
    dataType?: 'dateTime';
    disablePadding?: boolean;
    label: string | JSX.Element;
    property: string;
    sortable?: boolean;
    width?: number;
    formatter?: (cell: any, row: any, rowIndex: number) => JSX.Element | string;
    onSelectCheckboxHeader?: () => void;
    onSelectRow?: (row: any, rowIndex: number) => void;
    isSelected?: (row: any) => void;
    onRowClick?: (row: any, evt: any) => void;
    propsRow?: TableCellProps;
}
export interface GridDataProps {
    columns: Column[];
    checkboxSelection?: boolean;
    data: any;
    totalRecords: number;
    pageNumber: number;
    rowsPerPageOptions?: number[];
    pageSize?: number;
    isSelectAll?: boolean;
    loading?: boolean;
    showEmptyBox?: boolean;
    onPageChange?: (value: number) => void;
    onPageSizeChange?: (value: number) => void;
    onOderByChange?: (property: string, orderDirection: 'asc' | 'desc') => void;
    onRowClick?: (event: React.MouseEvent<React.MouseEvent>, row: any) => void;
    onColumnHeaderClick?: (event: React.MouseEvent<React.MouseEvent>) => void;
    isSelected?: (row: any) => boolean;
    hidePagination?: boolean;
    headerStyle?: {
        [key: string]: string | number;
    };
}
export default function GridData({ columns, checkboxSelection, data, pageNumber, pageSize, rowsPerPageOptions, totalRecords, loading, onPageChange, onPageSizeChange, onOderByChange, onRowClick, onColumnHeaderClick: handleColumnClick, isSelected, isSelectAll, hidePagination, headerStyle, showEmptyBox, }: GridDataProps): React.JSX.Element;
