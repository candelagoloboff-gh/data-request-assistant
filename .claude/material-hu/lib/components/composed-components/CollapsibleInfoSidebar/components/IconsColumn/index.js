import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
const IconsColumn = ({ items, expandedIndex, onItemClick, position, }) => {
    const theme = useTheme();
    const isRightPosition = position === 'right';
    return (_jsx(Stack, { sx: {
            alignItems: 'center',
            p: 2,
            gap: 1,
            borderWidth: isRightPosition ? '0 0 0 1px' : '0 1px 0 0',
            borderStyle: 'solid',
            borderColor: theme.palette.new.border.neutral.default,
        }, children: items.map((item, index) => {
            const isActive = index === expandedIndex;
            const { Icon } = item;
            return (_jsx(IconButton, { onClick: () => onItemClick(index), "aria-label": `Item ${Icon.displayName || index + 1}`, sx: {
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    backgroundColor: isActive
                        ? theme.palette.new.background.layout.brand
                        : 'transparent',
                    '&:hover': {
                        backgroundColor: theme.palette.new.background.layout.brand,
                    },
                }, children: _jsx(Icon, { size: 24, color: isActive
                        ? theme.palette.new.text.neutral.default
                        : theme.palette.new.text.neutral.lighter }) }, `icon-column-button-${index}`));
        }) }));
};
export default IconsColumn;
