import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IconArrowBigLeftLine, IconArrowBigRightLine, } from '@tabler/icons-react';
import { fadeIn } from '../../../../../utils/animations';
const ExpandibleContent = ({ isExpanded, contentWidth, position, activeItem, expandedIndex, alwaysExpanded, onCollapseClick, }) => {
    const theme = useTheme();
    const { t } = useTranslation('material_hu_only');
    const isRightPosition = position === 'right';
    const CollapseIcon = isRightPosition
        ? IconArrowBigRightLine
        : IconArrowBigLeftLine;
    return (_jsx(Collapse, { in: isExpanded, orientation: "horizontal", timeout: "auto", children: _jsxs(Stack, { sx: {
                height: '100%',
                width: contentWidth,
                minWidth: contentWidth,
                borderWidth: isRightPosition ? '0 0 0 1px' : '0 1px 0 0',
                borderStyle: 'solid',
                borderColor: theme.palette.new.border.neutral.default,
            }, children: [!alwaysExpanded && (_jsxs(ButtonBase, { onClick: onCollapseClick, sx: {
                        display: 'flex',
                        flexDirection: isRightPosition ? 'row' : 'row-reverse',
                        alignItems: 'center',
                        justifyContent: isRightPosition ? 'flex-start' : 'space-between',
                        gap: 1,
                        py: 2.5,
                        px: 2.5,
                        backgroundColor: theme.palette.new.background.layout.brand,
                        '&:hover': {
                            opacity: 0.9,
                        },
                    }, children: [_jsx(CollapseIcon, { size: 24, color: theme.palette.new.text.neutral.brand }), _jsx(Typography, { variant: "globalS", sx: {
                                color: theme.palette.new.text.neutral.brand,
                                textAlign: 'left',
                                fontWeight: 600,
                            }, children: activeItem?.collapseButtonText ??
                                t('collapsible_info_sidebar.collapse') })] })), _jsx(Stack, { sx: { flex: 1, overflow: 'auto' }, children: activeItem && (_jsx(Stack, { sx: { height: '100%', animation: `${fadeIn} 200ms ease-in-out` }, children: activeItem.content }, expandedIndex)) })] }) }));
};
export default ExpandibleContent;
