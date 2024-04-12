import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from './TableHead'
import TableBody from './TableBody'
import Pagination from '@mui/material/Pagination'
import { Skeleton, TableCellProps } from '@mui/material'
import EmptyData from './EmptyData'

type Order = 'asc' | 'desc'

export interface Column {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  checkboxSelection?: boolean
  customHeader?: JSX.Element
  dataType?: 'dateTime'
  disablePadding?: boolean
  label: string | JSX.Element
  property: string
  sortable?: boolean
  width?: number
  formatter?: (cell: any, row: any, rowIndex: number) => JSX.Element | string
  onSelectCheckboxHeader?: () => void
  onSelectRow?: (row: any, rowIndex: number) => void
  isSelected?: (row: any) => void
  onRowClick?: (row: any, evt: any) => void
  propsRow?: TableCellProps
}

export interface GridDataProps {
  columns: Column[]
  checkboxSelection?: boolean
  data: any
  totalRecords: number
  pageNumber: number
  rowsPerPageOptions?: number[]
  pageSize?: number
  isSelectAll?: boolean
  loading?: boolean
  showEmptyBox?: boolean
  onPageChange?: (value: number) => void
  onPageSizeChange?: (value: number) => void
  onOderByChange?: (property: string, orderDirection: 'asc' | 'desc') => void
  onRowClick?: (event: React.MouseEvent<React.MouseEvent>, row: any) => void
  onColumnHeaderClick?: (event: React.MouseEvent<React.MouseEvent>) => void
  isSelected?: (row: any) => boolean
  hidePagination?: boolean
  headerStyle?: { [key: string]: string | number }
}

export default function GridData({
  columns,
  checkboxSelection,
  data = [],
  pageNumber = 1,
  pageSize = 10,
  rowsPerPageOptions = [5, 10, 50],
  totalRecords,
  loading,
  onPageChange,
  onPageSizeChange,
  onOderByChange,
  onRowClick,
  onColumnHeaderClick: handleColumnClick,
  isSelected,
  isSelectAll,
  hidePagination,
  headerStyle,
  showEmptyBox,
}: GridDataProps) {
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<string>('')
  const [selected, setSelected] = React.useState<string[]>([])

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string,
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
    if (onOderByChange) {
      onOderByChange(property, isAsc ? 'desc' : 'asc')
    }
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onPageSizeChange(parseInt(event.target.value, 10))
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    onPageChange(newPage)
  }

  const onColumnHeaderClick = (event: React.MouseEvent<React.MouseEvent>) => {
    if (handleColumnClick) {
      handleColumnClick(event)
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer sx={{ width: '100%' }}>
        <Table aria-labelledby="tableTitle" size={'medium'}>
          <TableHead
            headerStyle={headerStyle}
            isSelectAll={isSelectAll}
            columns={columns}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            rowCount={data.length}
            onRequestSort={handleRequestSort}
            checkboxSelection={checkboxSelection}
            onColumnHeaderClick={onColumnHeaderClick}
          />
          {!loading && data.length > 0 && (
            <TableBody
              columns={columns}
              data={data}
              checkboxSelection={checkboxSelection}
              onRowSelect={onRowClick}
              isSelected={isSelected}
            />
          )}
        </Table>
        {loading && (
          <Box
            sx={{
              height: 'max-content',
              width: '100%',
            }}>
            {[...Array(pageSize)].map(value => (
              <Skeleton
                key={value}
                variant="rectangular"
                sx={{ my: 4, mx: 1, height: '35px' }}
              />
            ))}
          </Box>
        )}
        {!loading && data.length === 0 && showEmptyBox && <EmptyData />}
      </TableContainer>
      {!hidePagination && (
        <Box
          paddingTop={4}
          paddingBottom={4}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            '& button.Mui-selected': {
              border: '1px solid gray',
              backgroundColor: '#fff',
            },
          }}>
          <Pagination
            onChange={handleChangePage}
            count={Math.ceil(totalRecords / pageSize)}
            page={pageNumber}
            variant="outlined"
            shape="rounded"
            showFirstButton
            showLastButton
            size="medium"
          />
        </Box>
      )}
    </Box>
  )
}
