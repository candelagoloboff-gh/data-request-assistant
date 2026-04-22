import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BadgeCountButton from '../../../BadgeCountButton';
import Button from '../../../../design-system/Buttons/Button';
import Title from '../../../../design-system/Title';
import { Skeleton } from '@mui/material';
import Stack from '@mui/material/Stack';
import { IconFilter } from '@tabler/icons-react';
import { fadeIn } from '../../../../../utils/animations';
const SurveyResultsLayout = ({ children, title, disableFilters = false, filtersLabel = 'Filters', clearFiltersLabel = 'Clear Filters', onClearFilters, filtersCount = 0, onClickFilters, loading = false, extraActions, ...props }) => {
    return (_jsxs(Stack, { ...props, sx: {
            width: '100%',
            height: '100%',
            animation: `${fadeIn} 150ms ease-in-out backwards`,
            backgroundColor: theme => theme.palette.new.background.layout.default,
            ...props.sx,
        }, children: [_jsxs(Stack, { sx: {
                    backgroundColor: theme => theme.palette.new.background.elements.default,
                    px: 3,
                    py: 1.5,
                    boxShadow: theme => `-1px 4px 8px 0px ${theme.palette.new.shadows['8dp']}`,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1,
                    zIndex: 1,
                    height: 64,
                    boxSizing: 'border-box',
                }, children: [loading && (_jsxs(_Fragment, { children: [_jsx(Skeleton, { width: 280, height: 34, variant: "rounded" }), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 1 }, children: [_jsx(Skeleton, { width: 140, height: 34, variant: "rounded" }), _jsx(Skeleton, { width: 140, height: 34, variant: "rounded" })] })] })), !loading && (_jsxs(_Fragment, { children: [_jsx(Title, { title: title, variant: "L", sx: { flex: 1 } }), extraActions, !disableFilters && (_jsxs(_Fragment, { children: [_jsx(BadgeCountButton, { count: filtersCount, buttonProps: {
                                            variant: 'secondary',
                                            startIcon: _jsx(IconFilter, {}),
                                            onClick: onClickFilters,
                                        }, children: filtersLabel }), _jsx(Button, { variant: "tertiary", onClick: onClearFilters, disabled: filtersCount === 0, children: clearFiltersLabel })] }))] }))] }), children] }));
};
export default SurveyResultsLayout;
