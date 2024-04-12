import React from 'react';
import { Column } from '../DataGrid';
export interface TableBodyProps {
    data: any;
    columns: Column[];
    checkboxSelection?: boolean;
    onRowSelect?: (event: React.MouseEvent<unknown>, row: any) => void;
    isSelected?: (row: any) => boolean;
}
declare const TableBody: ({ columns, data, checkboxSelection, onRowSelect, isSelected, }: TableBodyProps) => React.JSX.Element;
export default TableBody;
