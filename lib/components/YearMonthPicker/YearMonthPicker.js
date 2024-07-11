import * as React from 'react';
import Button from '@mui/material/Button';
import DateRange from '../../icons/DateRange.js';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useTheme, useMediaQuery, Typography, Popover } from '@mui/material';
import { BLACK } from '../../theme/variables.js';

function YearMonthPicker({ value = new Date(), inputRender, fullWidth, onChange, }) {
    const theme = useTheme();
    useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [date, setDate] = React.useState(value ? dayjs(value) : undefined);
    const handleClose = React.useCallback(() => {
        setAnchorEl(undefined);
        if (onChange) {
            onChange(date?.toDate());
        }
    }, [date]);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleChange = React.useCallback((v) => {
        setDate(v ? dayjs(v) : undefined);
    }, [date]);
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs },
        React.createElement(React.Fragment, null,
            React.createElement(Button, { className: "year-month-picker-btn", sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    columnGap: '10px',
                    color: BLACK[200],
                    borderRadius: '4px',
                    padding: '9px 16px',
                    border: '1px solid #E0E0E0',
                    width: fullWidth ? '100%' : 'fit-content',
                }, onClick: handleOpen }, inputRender ? (inputRender) : (React.createElement(React.Fragment, null,
                React.createElement(DateRange, { width: 12, height: 12 }),
                React.createElement(Typography, { component: 'span', sx: {
                        fontSize: 14,
                        fontWeight: 400,
                        textTransform: 'capitalize',
                    } }, dayjs(date)?.format('MMMM, YYYY'))))),
            React.createElement(Popover, { open: !!anchorEl, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                }, PaperProps: {
                    style: {
                        maxHeight: 300,
                        maxWidth: 300,
                        minWidth: 200,
                    },
                } },
                React.createElement(DateCalendar, { value: date, views: ['month', 'year'], openTo: "month", onChange: handleChange })))));
}

export { YearMonthPicker as default };
//# sourceMappingURL=YearMonthPicker.js.map
