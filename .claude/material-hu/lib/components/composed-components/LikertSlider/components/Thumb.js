import { SliderThumb, styled } from '@mui/material';
const Thumb = styled(SliderThumb)(({ theme }) => ({
    '&.MuiSlider-thumb::before': {
        boxShadow: 'none',
        border: `1px solid ${theme.palette.border?.primaryBorder}`,
    },
    width: theme.spacing(2),
    height: theme.spacing(4),
    borderRadius: theme.spacing(theme.shape.borderRadiusS),
    boxShadow: 'none',
    backgroundColor: theme.palette.new.background.elements.default,
    '&.Mui-focusVisible, &.Mui-active, &:hover': {
        boxShadow: 'none',
    },
}));
export default Thumb;
