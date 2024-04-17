import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ContentLayout = styled(Box)(() => ({
    margin: '0 20px',
}));
const ContentHeader = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid #E0E0E0`,
    boxSizing: 'border-box',
    // padding: '16px 0',
    color: 'text.primary',
    height: '64px',
}));
const ContentBody = styled(Box)(() => ({
    width: '100%',
    margin: 0,
    padding: '16px 0',
}));

export { ContentBody, ContentHeader, ContentLayout };
//# sourceMappingURL=ContentLayout.js.map
