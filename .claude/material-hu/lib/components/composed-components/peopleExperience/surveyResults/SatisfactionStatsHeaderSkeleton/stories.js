import { jsx as _jsx } from "react/jsx-runtime";
import SatisfactionStatsHeaderSkeleton from './index';
const meta = {
    title: 'Composed Components/peopleExperience/SatisfactionStatsHeaderSkeleton',
    component: SatisfactionStatsHeaderSkeleton,
    parameters: {
        layout: 'centered',
    },
    args: {
        slotProps: {
            root: {
                sx: {
                    width: 1024,
                },
            },
        },
    },
};
export default meta;
export const Default = {
    render: args => _jsx(SatisfactionStatsHeaderSkeleton, { ...args }),
};
