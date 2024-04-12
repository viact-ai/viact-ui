import React from 'react'
import Box from '@mui/material/Box'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { default as MuiTableHead } from '@mui/material/TableHead'
import { Column } from '../DataGrid'
import { visuallyHidden } from '@mui/utils'
import { StyledTableCell } from './TableHead.styled'
import { FormControlLabel, Typography } from '@mui/material'
import { TableCheckbox } from '../DataCells/TableCheckbox'

type Order = 'asc' | 'desc'

interface TableHeadProps {
  isSelectAll?: boolean
  numSelected: number
  order: Order
  orderBy: string
  rowCount: number
  columns: Column[]
  checkboxSelection?: boolean
  headerStyle?: { [key: string]: string | number }
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void
  onColumnHeaderClick: (event: React.MouseEvent<unknown>) => void
}

function TableHead({
  columns,
  isSelectAll = false,
  checkboxSelection,
  order,
  orderBy,
  headerStyle = {},
  onRequestSort,
  onColumnHeaderClick,
}: TableHeadProps) {
  const createSortHandler = (
    event: React.MouseEvent<unknown>,
    column: Column,
  ) => {
    if (column.sortable && onRequestSort) {
      onRequestSort(event, column.property)
    }
  }

  return (
    <MuiTableHead>
      <TableRow
        sx={{
          ...headerStyle,
        }}>
        {checkboxSelection && (
          <TableCell
            key="checkbox"
            align="left"
            padding="none"
            width={'35px'}
            sx={{ marginLeft: 1, paddingLeft: 3 }}>
            <StyledTableCell hideSortIcon={true} active={false}>
              <FormControlLabel
                control={
                  <TableCheckbox
                    checked={isSelectAll}
                    onClick={onColumnHeaderClick}
                  />
                }
                label=""
              />
            </StyledTableCell>
          </TableCell>
        )}
        {columns.map((column, index) => (
          <TableCell
            key={typeof column.label === 'string' ? column.label : index}
            align={column.align || 'left'}
            sx={{
              width: column.width || 'unset',
              paddingLeft: column.disablePadding ? 0 : 4,
              paddingRight: column.disablePadding ? 0 : 4,
            }}
            sortDirection={orderBy === column.property ? order : false}>
            <StyledTableCell
              hideSortIcon={!column.sortable}
              active={column.sortable && orderBy === column.property}
              direction={orderBy === column.property ? order : 'asc'}
              onClick={(event: React.MouseEvent<unknown>) =>
                createSortHandler(event, column)
              }>
              {column.customHeader ? (
                column.customHeader
              ) : (
                <Typography variant="body1" color="text.primary">
                  {column.label}
                </Typography>
              )}

              {orderBy === column.property ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </StyledTableCell>
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  )
}

export default TableHead
