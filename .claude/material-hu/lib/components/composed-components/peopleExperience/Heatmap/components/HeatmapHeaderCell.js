import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import Link from '../../../../design-system/Link';
import TableCell from '../../../../design-system/Table/components/TableCell';
import Tooltip from '../../../../design-system/Tooltip';
import { linkClasses, Stack, Typography, useTheme, } from '@mui/material';
import { IconUsers } from '@tabler/icons-react';
import useOverflowed from '../../../../../hooks/useOverflowed';
import { typography } from '../../../../../theme/hugo/typography';
const HeatmapHeaderCell = ({ title, subtitle, participantsAmount, onClick, ...props }) => {
    const { i18n } = useTranslation();
    const theme = useTheme();
    const { ref: subtitleRef, overflowed: isSubtitleOverflowed } = useOverflowed();
    const { ref: titleRef, overflowed: isTitleOverflowed } = useOverflowed();
    return (_jsx(TableCell, { ...props, children: _jsxs(Stack, { sx: { textAlign: 'inherit', '& > *': { textAlign: 'inherit' } }, children: [!!subtitle && (_jsx(Tooltip, { disableTooltip: !isSubtitleOverflowed, title: subtitle, children: _jsx(Typography, { ref: subtitleRef, variant: "globalXXS", sx: {
                            color: theme.palette.new.text.neutral.lighter,
                            gap: 1,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        }, children: subtitle }) })), _jsxs(Tooltip, { disableTooltip: !isTitleOverflowed, title: title, children: [onClick && (_jsx(Link, { ref: titleRef, component: "button", underline: "hover", onClick: onClick, hasIcon: false, sx: {
                                textAlign: 'inherit',
                                [`.${linkClasses.button}`]: {
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    fontWeight: 'fontWeightSemiBold',
                                    fontSize: typography.globalS.fontSize,
                                },
                            }, children: title })), !onClick && (_jsx(Typography, { ref: titleRef, variant: "globalS", sx: {
                                color: theme.palette.new.text.neutral.default,
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                width: '100%',
                                display: 'block',
                            }, children: title }))] }), !!participantsAmount && (_jsxs(Stack, { direction: "row", alignItems: "center", gap: 1, children: [_jsx(IconUsers, { size: 16, color: theme.palette.new.text.neutral.lighter }), _jsx(Typography, { variant: "globalXS", sx: {
                                color: theme.palette.new.text.neutral.lighter,
                            }, children: Intl.NumberFormat(i18n.language).format(participantsAmount) })] }))] }) }));
};
export default HeatmapHeaderCell;
