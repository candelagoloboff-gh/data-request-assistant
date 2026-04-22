import { jsx as _jsx } from "react/jsx-runtime";
import { Stack, useTheme } from '@mui/material';
import Accordion from '../../../../design-system/Accordion';
import ListItem from '../../../../design-system/List/components/ListItem';
import { TASKS_ICONS } from '../constants';
import ModuleAccordionSkeleton from './skeleton';
const ModuleAccordion = ({ module, loading = false }) => {
    const { spacing } = useTheme();
    if (loading)
        return _jsx(ModuleAccordionSkeleton, {});
    if (!module)
        return null;
    return (_jsx(Accordion, { elevation: 1, title: module.title, avatar: {
            text: module.icon.value ?? null,
            src: module.icon.value ?? null,
            sx: {
                borderRadius: 1,
                '& span': {
                    mt: 0.5,
                },
                '& img': {
                    maxWidth: spacing(2.5),
                    maxHeight: spacing(2.5),
                },
            },
        }, customDetail: _jsx(Stack, { sx: { gap: 2 }, children: module.tasks.map(task => (_jsx(ListItem, { avatar: { Icon: TASKS_ICONS[task.type] }, text: { title: task.title }, sx: { '& .MuiListItem-root': { p: 0 } } }, task.id))) }) }));
};
export default ModuleAccordion;
