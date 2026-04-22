import { jsx as _jsx } from "react/jsx-runtime";
import { IconMoodEmpty, IconMoodSad, IconMoodSmile } from '@tabler/icons-react';
import { FilterOption } from './types';
export const getFilterColors = (filter, theme) => {
    if (filter === FilterOption.ALL) {
        return null;
    }
    const colorMap = {
        [FilterOption.ALL]: {
            backgroundColor: '',
            textColor: '',
            icon: null,
        },
        [FilterOption.PROMOTERS]: {
            backgroundColor: theme.palette.new.background.feedback.success,
            textColor: theme.palette.new.text.feedback.success,
            icon: _jsx(IconMoodSmile, { size: 20 }),
        },
        [FilterOption.DETRACTORS]: {
            backgroundColor: theme.palette.new.background.feedback.error,
            textColor: theme.palette.new.text.feedback.error,
            icon: _jsx(IconMoodSad, { size: 20 }),
        },
        [FilterOption.NEUTRALS]: {
            backgroundColor: theme.palette.new.background.feedback.warning,
            textColor: theme.palette.new.text.feedback.warning,
            icon: _jsx(IconMoodEmpty, { size: 20 }),
        },
    };
    return colorMap[filter];
};
