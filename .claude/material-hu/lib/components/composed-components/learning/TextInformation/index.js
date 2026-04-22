import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, useTheme } from '@mui/material';
import Title from '../../../design-system/Title';
import { adjustedDescription } from '../../../design-system/Title/constants';
import SeeMoreText from '../../SeeMoreText';
import TextInformationSkeleton from './skeleton';
const TextInformation = ({ copetin, title, description, variant = 'M', loading = false, slotProps = {}, sx = {}, }) => {
    const { palette } = useTheme();
    if (loading) {
        return (_jsx(TextInformationSkeleton, { variant: variant, sx: sx }));
    }
    return (_jsxs(Stack, { sx: sx, children: [_jsx(Title, { variant: variant, copetin: copetin, title: title, ...slotProps.title }), !!description && (_jsx(SeeMoreText, { text: description, ...slotProps.seeMoreText, typographyProps: {
                    variant: adjustedDescription[variant],
                    color: palette.new.text.neutral.lighter,
                    ...slotProps.seeMoreText?.typographyProps,
                } }))] }));
};
export default TextInformation;
