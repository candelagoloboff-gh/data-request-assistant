import { jsx as _jsx } from "react/jsx-runtime";
import { Paper, Stack } from '@mui/material';
import ListItem from '../../../../design-system/List/components/ListItem';
const ModuleAccordionSkeleton = () => {
    return (_jsx(Stack, { elevation: 1, component: Paper, sx: {
            backgroundColor: 'white',
            borderRadius: 1,
        }, children: _jsx(ListItem, { loading: true, sx: { '& .MuiListItem-root': { p: 0 } } }) }));
};
export default ModuleAccordionSkeleton;
