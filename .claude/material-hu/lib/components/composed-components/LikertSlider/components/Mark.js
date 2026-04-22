import { SliderMark, styled } from '@mui/material';
const Mark = styled(SliderMark)(({ theme }) => ({
    height: theme.spacing(2),
    width: 1,
    backgroundColor: theme.palette.base?.white,
}));
export default Mark;
