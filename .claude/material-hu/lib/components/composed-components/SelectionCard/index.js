import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material';
import CardContainer from '../../design-system/CardContainer';
const SelectionCard = props => {
    const { onClick, children, checked = false, sx, disabled = false, fullWidth = false, ...rest } = props;
    const theme = useTheme();
    const handleOnClick = () => onClick?.(!checked);
    return (_jsx(CardContainer, { onClick: onClick && !disabled ? handleOnClick : undefined, sx: {
            '&': {
                cursor: 'pointer',
                backgroundColor: checked
                    ? theme.palette.new.background.layout.brand
                    : theme.palette.new.background.elements.default,
                borderColor: checked
                    ? theme.palette.base?.blueBrand[400]
                    : theme.palette.new.border.neutral.default,
                transition: 'border-color 100ms ease-in-out, box-shadow 100ms ease-in-out, background-color 100ms ease-in-out',
            },
            ...(!checked && {
                '&:hover': {
                    backgroundColor: theme.palette.new.background.elements.default,
                    borderColor: theme.palette.new.border.neutral.brand,
                    boxShadow: `0px 4px 8px ${theme.palette.new.shadows['4dp']}`,
                    zIndex: 1,
                },
            }),
            ...(disabled && {
                '&, &:hover': {
                    cursor: 'not-allowed',
                    backgroundColor: theme.palette.new.action.background.brand.disabled,
                    borderColor: theme.palette.new.action.background.brand.disabled,
                    boxShadow: 'none',
                },
            }),
            ...sx,
        }, ...rest, fullWidth: fullWidth, noHover: true, children: children }));
};
export default SelectionCard;
