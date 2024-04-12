import * as React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ViMov from '../../icons/ViMov.js';
import ViTag from '../../icons/ViTag.js';

// @flow
const BoxContent = styled(Box) `
  display: flex;
  align-items: center;

  .vi-device__box {
    border: 1px solid #e0e0e0;
    padding: 5px;
    display: flex;
    border-radius: 5px;
    margin-right: 0.5rem;
  }
`;
const objectImg = {
    'vi-tag': React.createElement(ViTag, { width: 25, height: 25 }),
    'vi-mac': React.createElement(React.Fragment, null),
    'vi-mov': React.createElement(ViMov, { width: 25, height: 25 }),
};
function DeviceId({ id, type = 'vi-tag' }) {
    return id ? (React.createElement(BoxContent, null,
        React.createElement(Box, { className: "vi-device__box" }, objectImg[type]),
        React.createElement(Typography, null, id))) : (React.createElement("div", null));
}

export { DeviceId as default };
//# sourceMappingURL=DeviceId.js.map
