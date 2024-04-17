import React from 'react';
import { Column } from '../DataGrid';
type Order = 'asc' | 'desc';
interface TableHeadProps {
    isSelectAll?: boolean;
    numSelected: number;
    order: Order;
    orderBy: string;
    rowCount: number;
    columns: Column[];
    checkboxSelection?: boolean;
    headerStyle?: {
        [key: string]: string | number;
    };
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    onColumnHeaderClick: (event: React.MouseEvent<unknown>) => void;
}
declare function TableHead({ columns, isSelectAll, checkboxSelection, order, orderBy, headerStyle, onRequestSort, onColumnHeaderClick, }: TableHeadProps): React.JSX.Element;
export default TableHead;
