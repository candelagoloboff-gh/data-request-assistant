import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Grid, Stack, Typography } from '@mui/material';
import { IconAlertCircle } from '@tabler/icons-react';
import Search from '../../../../design-system/Inputs/Search';
import SelectionCard from '../../../SelectionCard';
import StateCard from '../../../StateCard';
import SelectInstanceDrawerSkeleton from './SelectInstanceDrawerSkeleton';
const SelectInstanceDrawerContent = ({ loading, instances, onSelectInstance, searchProps, showSearch = true, }) => {
    const { t } = useTranslation('material_hu_only');
    const showEmptyState = !loading && !instances.length;
    return (_jsxs(Stack, { sx: { gap: 2, height: '100%' }, children: [showSearch && (_jsx(Search, { placeholder: t('login.search_placeholder'), value: searchProps?.query, onChange: searchProps?.setQuery })), _jsxs(Grid, { container: true, sx: {
                    backgroundColor: theme => theme.palette.new.background.elements.default,
                    p: 2,
                    borderRadius: theme => theme.shape.borderRadiusL,
                    overflowY: 'auto',
                    maxHeight: 'calc(100vh - 200px)',
                    display: showEmptyState ? 'none' : 'flex',
                }, children: [loading && _jsx(SelectInstanceDrawerSkeleton, {}), !loading &&
                        instances.map(instance => (_jsx(Grid, { item: true, xs: 12, sm: 6, sx: { justifyContent: 'center', display: 'flex', my: 1 }, children: _jsxs(SelectionCard, { onClick: () => onSelectInstance(instance), checked: false, sx: {
                                    width: '95%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }, children: [_jsx(Stack, { sx: { width: '100%', alignItems: 'center' }, children: _jsx("img", { src: instance.logo, style: {
                                                height: '32px',
                                                width: '130px',
                                                objectFit: 'contain',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }, alt: "" }) }), _jsx(Stack, { sx: { width: '100%', mt: 0.5 }, children: _jsx(Typography, { variant: "globalXXS", title: instance.name, textAlign: "center", sx: {
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                color: theme => theme.palette.new.text.neutral.lighter,
                                            }, children: instance.name }) })] }, instance.id) }, instance.id)))] }), showEmptyState && (_jsx(StateCard, { slotProps: {
                    avatar: {
                        Icon: IconAlertCircle,
                    },
                    title: {
                        title: t('login.no_community_found'),
                        description: t('login.no_community_found_description'),
                    },
                }, sx: {
                    flex: 1,
                    p: 10,
                    '& .MuiCardContent-root': {
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        gap: 2,
                    },
                } }))] }));
};
export default SelectInstanceDrawerContent;
