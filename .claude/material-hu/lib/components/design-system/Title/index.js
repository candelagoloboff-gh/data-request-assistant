import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import CopetinText from './components/CopetinText';
import DescriptionText from './components/DescriptionText';
import TitleText from './components/TitleText';
import { getJustifyContent, getTextAlign } from './utils';
export const Title = ({ id, centered = false, right = false, copetin = '', copetinTooltip = '', description = '', descriptionTooltip = '', date = '', title, variant = 'M', withEllipsis, overflow = 'hidden', disabled = false, fontWeight = 'fontWeightSemiBold', sx = {}, slotProps, }) => {
    return (_jsxs(Stack, { id: id, sx: {
            '& > .MuiStack-root': {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: getJustifyContent(centered, right),
                textAlign: getTextAlign(centered, right),
                gap: 0.5,
            },
            ...sx,
        }, children: [_jsx(CopetinText, { copetin: copetin, copetinTooltip: copetinTooltip, variant: variant, withEllipsis: withEllipsis, overflow: overflow, ...slotProps?.copetin }), _jsx(TitleText, { title: title, disabled: disabled, fontWeight: fontWeight, variant: variant, withEllipsis: withEllipsis, overflow: overflow, ...slotProps?.title }), _jsx(DescriptionText, { description: description, descriptionTooltip: descriptionTooltip, date: date, variant: variant, withEllipsis: withEllipsis, overflow: overflow, ...slotProps?.description })] }));
};
export default Title;
