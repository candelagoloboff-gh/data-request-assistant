import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import CollapsibleSelectionList from '../../CollapsibleSelectionList';
import Search from '../../../design-system/Inputs/Search';
import Skeleton from '../../../design-system/Skeleton';
import StateCard from '../../../design-system/StateCard';
import Title from '../../../design-system/Title';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IconZoomExclamation } from '@tabler/icons-react';
import { appearFromBottom } from '../../../../utils/animations';
const SegmentationGroupItemsSelection = ({ segmentationsQuery, segmentationsQueryDataParser = data => data, value, onChange, excludedGroupsIds = new Set(), allowSelectAll, slotProps, error, sx, }) => {
    const [search, setSearch] = useState('');
    const segmentationGroups = useMemo(() => segmentationsQueryDataParser(segmentationsQuery?.data), [segmentationsQuery?.data]);
    const filteredSegmentationGroups = segmentationGroups
        ?.map(group => ({
        ...group,
        items: group.items.filter(item => !excludedGroupsIds?.has(item.id)),
    }))
        .filter(({ items, name: groupName }) => items.length &&
        groupName.toLocaleLowerCase().includes(search.toLowerCase()));
    return (_jsxs(Stack, { sx: { gap: 2, ...sx }, children: [slotProps?.title?.title && (_jsx(Title, { variant: "M", title: slotProps.title?.title, ...slotProps.title })), slotProps?.search && (_jsx(Search, { value: search, disabled: segmentationsQuery.isLoading, onChange: setSearch, ...slotProps.search })), segmentationsQuery.isLoading && (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(Skeleton, { sx: { height: 48 } }), _jsx(Skeleton, { sx: { height: 48 } }), _jsx(Skeleton, { sx: { height: 48 } })] })), !filteredSegmentationGroups?.length &&
                !segmentationsQuery.isLoading &&
                !!search &&
                slotProps?.stateCard?.title && (_jsx(StateCard, { icon: IconZoomExclamation, slotProps: {
                    card: {
                        sx: {
                            border: 'none',
                            animation: `${appearFromBottom} 0.1s ease-in-out backwards`,
                        },
                    },
                    ...slotProps.stateCard.slotProps,
                }, ...slotProps.stateCard })), !segmentationsQuery.isLoading &&
                filteredSegmentationGroups?.map((segmentationGroup, index) => {
                    const currentSelectionSet = new Set(value?.[segmentationGroup.id] || []);
                    return (_createElement(CollapsibleSelectionList, { ...slotProps?.collapsibleSelectionList, key: segmentationGroup.id, selected: currentSelectionSet, items: segmentationGroup.items, title: segmentationGroup.name, allowSelectAll: allowSelectAll ?? false, itemRenderer: item => (_jsx(Typography, { variant: "globalS", color: theme => theme.palette.new.text.neutral.default, children: item.name })), onChange: _value => {
                            onChange?.({
                                selectedSegmentationIds: {
                                    ...value,
                                    [segmentationGroup.id]: new Set(_value),
                                },
                            });
                        }, sx: {
                            animation: `${appearFromBottom} 125ms ease-in-out backwards`,
                            animationDelay: `${32 * index}ms`,
                        } }));
                }), error && _jsx(FormHelperText, { error: true, children: error?.message })] }));
};
export default SegmentationGroupItemsSelection;
