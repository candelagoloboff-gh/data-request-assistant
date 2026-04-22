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
const useProfileDataDrawer = (field, texts) => {
    const id = useId();
    const isArray = Array.isArray(field.value);
    const form = useForm({
        defaultValues: {
            search: '',
        },
    });
    const search = useWatch({ name: 'search', control: form.control });
    const items = isArray ? field.value : [];
    // biome-ignore lint/correctness/useExhaustiveDependencies: items never change
    const filteredItems = useMemo(() => {
        return items.filter((item) => item.toString().toLowerCase().includes(search.toLowerCase()));
    }, [search]);
    const { openDrawer, closeDrawer } = useDrawerLayerItem(id, {
        title: isArray ? texts.items_associated_to_field : field.name,
        secondaryButtonProps: {
            children: texts.back,
            onClick: () => closeDrawer(),
            fullWidth: true,
        },
        children: isArray ? (_jsxs(CardContainer, { fullWidth: true, sx: {
                backgroundColor: ({ palette }) => palette.new.background.elements.grey,
                overflow: 'auto',
                maxHeight: '100%',
            }, children: [_jsx(FormProvider, { ...form, children: _jsx(FormInputSearch, { name: "search" }) }), _jsx(Typography, { variant: "globalS", sx: {
                        color: ({ palette }) => palette.new.text.neutral.default,
                        my: 3,
                        display: 'block',
                    }, children: texts.items_total }), _jsxs(Stack, { divider: _jsx(Divider, { sx: { my: 1 } }), children: [filteredItems.length === 0 && (_jsx(Typography, { variant: "globalS", sx: {
                                color: ({ palette }) => palette.new.text.neutral.default,
                            }, children: texts.no_items_found })), filteredItems.map((item, index) => (_jsx(ListItem, { slotProps: {
                                container: {
                                    sx: {
                                        pl: 0,
                                        py: 1,
                                    },
                                },
                            }, text: { title: item } }, `${item}|${index}`)))] })] })) : (_jsx(Typography, { variant: "globalS", children: String(field.value) })),
    });
    return { openDrawer, closeDrawer };
};
export default useProfileDataDrawer;
