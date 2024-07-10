import * as React from 'react'
import Button from '@mui/material/Button'
import DateRangeIcon from '../../icons/DateRange'
import dayjs from 'dayjs'
import ResponsiveModal from '../ResponsiveModal'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { Popover, Typography, useMediaQuery, useTheme } from '@mui/material'
import { BLACK } from '../../theme/variables'

export interface YearMonthPickerProps {
  value?: Date
  inputRender?: React.ReactNode
  fullWidth?: boolean
}

export default function YearMonthPicker({
  value = new Date(),
  inputRender,
  fullWidth,
}: YearMonthPickerProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClose = () => setAnchorEl(undefined)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Button
          className="year-month-picker-btn"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            columnGap: '10px',
            color: BLACK[200],
            borderRadius: '4px',
            padding: '9px 16px',
            border: '1px solid #E0E0E0',
            width: fullWidth ? '100%' : 'fit-content',
          }}
          onClick={handleOpen}>
          {inputRender ? (
            inputRender
          ) : (
            <>
              <DateRangeIcon width={12} height={12} />
              <Typography
                component={'span'}
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  textTransform: 'capitalize',
                }}>
                {dayjs(value).format('MMMM, YYYY')}
              </Typography>
            </>
          )}
        </Button>
        {isMobile ? (
          <ResponsiveModal
            open={!!anchorEl}
            onClose={handleClose}
            PaperProps={{
              style: {
                borderRadius: '20px 20px 0 0',
              },
            }}>
            <DateCalendar views={['month', 'year']} openTo="month" />
          </ResponsiveModal>
        ) : (
          <Popover
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{
              style: {
                maxHeight: 300,
                maxWidth: 300,
                minWidth: 200,
              },
            }}>
            <DateCalendar views={['month', 'year']} openTo="month" />
          </Popover>
        )}
      </>
    </LocalizationProvider>
  )
}
