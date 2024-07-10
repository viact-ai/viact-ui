import * as React from 'react';
import Button from '@mui/material/Button';
import DateRange from '../../icons/DateRange.js';
import dayjs from 'dayjs';
import ResponsiveModal from '../ResponsiveModal/ResponsiveModal.js';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useTheme, useMediaQuery, Typography, Popover } from '@mui/material';
import { BLACK } from '../../theme/variables.js';

function YearMonthPicker({ value = new Date(), inputRender, fullWidth, }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => setAnchorEl(undefined);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
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
                    } }, dayjs(value).format('MMMM, YYYY'))))),
            isMobile ? (React.createElement(ResponsiveModal, { open: !!anchorEl, onClose: handleClose, PaperProps: {
                    style: {
                        borderRadius: '20px 20px 0 0',
                    },
                } },
                React.createElement(DateCalendar, { views: ['month', 'year'], openTo: "month" }))) : (React.createElement(Popover, { open: !!anchorEl, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
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
                React.createElement(DateCalendar, { views: ['month', 'year'], openTo: "month" }))))));
}

export { YearMonthPicker as default };
//# sourceMappingURL=YearMonthPicker.js.map
