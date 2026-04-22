import { Stack, styled } from '@mui/material';
const DisplayGroupItem = styled(Stack)(({ theme }) => ({
    border: '1px solid',
    borderColor: theme.palette.grey[300],
    flex: 1,
    justifyContent: 'center',
    '&:first-of-type': {
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
    },
    '&:last-of-type': {
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
        borderLeft: 'none',
    },
    '&:only-of-type': {
        borderLeft: 'none',
    },
    padding: 1,
}));
export default DisplayGroupItem;
