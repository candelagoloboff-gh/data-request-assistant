import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import CardContainer from '../../../../../design-system/CardContainer';
import Title from '../../../../../design-system/Title';
import Divider from '@mui/material/Divider/Divider';
import Stack from '@mui/material/Stack';
import times from 'lodash/times';
import StatItem from './components/StatItem';
import StatItemSkeleton from './components/StatItemSkeleton';
const SKELETON_ITEMS_COUNT = 3;
const DistributionStats = ({ title, stats, loading, sx, }) => {
    return (_jsxs(CardContainer, { fullWidth: true, sx: sx, children: [_jsx(Title, { title: title, variant: "L" }), _jsxs(Stack, { component: "ul", sx: { m: 0, p: 0 }, children: [loading &&
                        times(SKELETON_ITEMS_COUNT, index => (_jsxs(Fragment, { children: [_jsx(StatItemSkeleton, {}), index < SKELETON_ITEMS_COUNT - 1 && _jsx(Divider, {})] }, index))), !loading &&
                        stats.map((stat, index) => (_jsxs(Fragment, { children: [_jsx(StatItem, { type: stat.type, title: stat.title, value: stat.value, differenceIndicator: stat.differenceIndicator }), index < stats.length - 1 && _jsx(Divider, {})] }, stat.type)))] })] }));
};
export default DistributionStats;
