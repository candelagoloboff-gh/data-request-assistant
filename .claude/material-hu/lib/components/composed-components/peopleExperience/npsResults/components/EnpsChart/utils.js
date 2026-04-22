import { alpha } from '@mui/material';
export const generateNullAnnotations = (data, theme, message) => {
    return data.reduce((acc, item, index) => {
        if (item.value === null) {
            acc[`null-label-${index}`] = {
                type: 'label',
                xValue: index,
                yValue: 0,
                backgroundColor: alpha(theme.palette.newBase.grey[200], 0.8),
                borderColor: theme.palette.new.border.neutral.default,
                borderWidth: 1,
                borderRadius: 4,
                content: [message],
                color: theme.palette.new.text.neutral.default,
                font: { size: 12 },
                padding: 8,
            };
        }
        return acc;
    }, {});
};
