import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, useMemo } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import CardContainer from '../../../design-system/CardContainer';
import FormInputSearch from '../../../design-system/Inputs/Search/form';
import ListItem from '../../../design-system/List/components/ListItem';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useDrawerLayerItem } from '../../../layers/Drawers';
const useProfileUsersDrawer = (field, texts) => {
    const id = useId();
    const form = useForm({
        defaultValues: {
            search: '',
        },
    });
    const search = useWatch({ name: 'search', control: form.control });
    // biome-ignore lint/correctness/useExhaustiveDependencies: prop never changes
    const filteredUsers = useMemo(() => {
        return field.value.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
    }, [search]);
    const drawer = useDrawerLayerItem(id, {
        title: texts.drawer_title,
        secondaryButtonProps: {
            children: texts.back,
            onClick: () => drawer.closeDrawer(),
            fullWidth: true,
        },
        children: (_jsxs(CardContainer, { fullWidth: true, sx: {
                backgroundColor: ({ palette }) => palette.new.background.elements.grey,
                overflow: 'auto',
                maxHeight: '100%',
            }, children: [_jsx(FormProvider, { ...form, children: _jsx(FormInputSearch, { name: "search" }) }), _jsx(Typography, { variant: "globalS", sx: {
                        color: ({ palette }) => palette.new.text.neutral.default,
                        my: 3,
                        display: 'block',
                    }, children: texts.items_total }), _jsxs(Stack, { divider: _jsx(Divider, { sx: { my: 1 } }), children: [filteredUsers.length === 0 && (_jsx(Typography, { variant: "globalS", sx: {
                                color: ({ palette }) => palette.new.text.neutral.default,
                            }, children: texts.no_items_found })), filteredUsers.map((user, index) => (_jsx(ListItem, { avatar: { src: user.profilePicture, alt: user.name }, slotProps: {
                                container: {
                                    sx: {
                                        pl: 0,
                                        py: 1,
                                    },
                                },
                            }, text: { title: user.name } }, `${user.name}|${index}`)))] })] })),
    });
    return { openDrawer: drawer.openDrawer, closeDrawer: drawer.closeDrawer };
};
export default useProfileUsersDrawer;
