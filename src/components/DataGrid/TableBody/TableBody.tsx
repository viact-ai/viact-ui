import React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { default as MuiTableBody } from '@mui/material/TableBody'
import { Column } from '../DataGrid'
import { getValueOfNestedObject } from '../ultils'
import { dataCells } from '../DataCells'
import { TableCheckbox } from '../DataCells/TableCheckbox'

export interface TableBodyProps {
  data: any
  columns: Column[]
  checkboxSelection?: boolean
  onRowSelect?: (event: React.MouseEvent<unknown>, row: any) => void
  isSelected?: (row: any) => boolean
}

const TableBody = ({
  columns = [],
  data,
  checkboxSelection,
  onRowSelect,
  isSelected,
}: TableBodyProps) => {
  const getColumValue = (
    cell: Column,
    row: any,
    rowIndex: number,
  ): string | React.ReactNode => {
    if (cell.formatter) {
      return cell.formatter(row, cell, rowIndex)
    }

    let value = ''

    if (cell.property.indexOf('.') > -1) {
      value = getValueOfNestedObject(cell.property, row)
    } else {
      value = row[cell.property]
    }

    if (cell.dataType) {
      const dataCell = dataCells[cell.dataType]
      if (dataCell) {
        return dataCell(value)
      }
    }

    return value
  }

  return (
    <MuiTableBody>
      {data.map((row: any, index: number) => {
        return (
          <TableRow
            hover
            role="checkbox"
            aria-checked={false}
            tabIndex={-1}
            key={row.id || `row_${index}`}
            selected={false}>
            {checkboxSelection && (
              <TableCell
                align="left"
                key="col_checkbox"
                padding="none"
                sx={{ paddingLeft: 3 }}>
                <TableCheckbox
                  sx={{
                    padding: 0,
                  }}
                  checked={isSelected(row)}
                  onClick={(event: React.MouseEvent<unknown>) =>
                    onRowSelect(event, row)
                  }
                />
              </TableCell>
            )}
            {columns.map((column: Column) => {
              return (
                <TableCell
                  onClick={evt =>
                    column.onRowClick && column.onRowClick(row, evt)
                  }
                  align={column.align || 'left'}
                  key={`row_${row.id || index}_${column.label}`}
                  sx={{
                    paddingLeft: column.disablePadding ? 0 : 4,
                    paddingRight: column.disablePadding ? 0 : 4,
                  }}
                  {...column.propsRow}>
                  {getColumValue(column, row, index)}
                </TableCell>
              )
            })}
          </TableRow>
        )
      })}
    </MuiTableBody>
  )
}

export default TableBody
