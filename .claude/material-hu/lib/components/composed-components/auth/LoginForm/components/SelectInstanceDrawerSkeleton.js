import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid } from '@mui/material';
import Skeleton from '../../../../design-system/Skeleton';
import SelectionCard from '../../../SelectionCard';
const SelectInstanceDrawerSkeleton = () => {
    return (_jsx(Grid, { container: true, children: Array.from({ length: 10 }).map((_, index) => (_jsx(Grid, { item: true, xs: 12, sm: 6, sx: { justifyContent: 'center', display: 'flex', my: 1 }, children: _jsxs(SelectionCard, { onClick: () => { }, checked: false, sx: {
                    width: '95%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                }, children: [_jsx(Skeleton, { variant: "rounded", height: 32, width: "80%", sx: {
                            mx: 'auto',
                        } }), _jsx(Skeleton, { variant: "text", height: 16 })] }) }, index))) }));
};
export default SelectInstanceDrawerSkeleton;
