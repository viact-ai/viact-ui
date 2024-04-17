import * as React from 'react';
import { Select, MenuItem } from '@mui/material';
import { isEmpty, isArray } from 'lodash';

const SelectBox = ({ value, options, placeholder, onChange, }) => {
    return (React.createElement(Select, { displayEmpty: true, fullWidth: true, value: value, onChange: onChange, sx: {
            '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.23) !important',
            },
        } },
        placeholder && (React.createElement(MenuItem, { value: "", sx: {
                fontWeight: 500,
                color: '#333333',
                borderBottom: '1px solid #ccc',
                padding: '1rem 0.5rem',
            } }, placeholder)),
        !isEmpty(options) &&
            isArray(options) &&
            options.map((item) => (React.createElement(MenuItem, { sx: {
                    display: 'block',
                    borderBottom: '1px solid #ccc',
                    padding: '1rem 0.5rem',
                    '&:last-child': {
                        borderBottom: 'none',
                    },
                }, key: item.value, value: item.value },
                React.createElement("span", null, item.label))))));
};

export { SelectBox as default };
//# sourceMappingURL=SelectBox.js.map
