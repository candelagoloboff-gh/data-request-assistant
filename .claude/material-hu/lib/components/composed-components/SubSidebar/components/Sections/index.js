import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import Title from '../../../../design-system/Title';
import SubSidebarCollapsableItem from './SubSidebarCollapsableItem';
const SubSidebarSections = ({ sections, id, value, handleClickItem, }) => {
    if (!sections)
        return null;
    return (_jsx(_Fragment, { children: sections.map(section => (_jsxs(Stack, { id: `${id}-section-${section.value}`, sx: { gap: 3 }, children: [section.title && (_jsx(Title, { variant: "M", title: section.title, sx: { px: 1 } })), _jsx(Stack, { sx: { gap: 1.5 }, children: section.items.map(item => (_jsx(SubSidebarCollapsableItem, { id: `${id}-section-${section.value}-item-${item.value}`, ...item, currentValue: value, handleClickItem: handleClickItem }, `${id}-section-${section.value}-item-${item.value}`))) })] }, `${id}-section-${section.value}`))) }));
};
export default SubSidebarSections;
