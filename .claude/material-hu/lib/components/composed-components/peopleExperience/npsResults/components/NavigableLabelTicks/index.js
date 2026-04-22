import { jsx as _jsx } from "react/jsx-runtime";
import Link from '../../../../../design-system/Link';
import Title from '../../../../../design-system/Title';
import Stack from '@mui/material/Stack';
import useTheme from '@mui/material/styles/useTheme';
const renderTitle = (title, onClick) => {
    if (!onClick)
        return title;
    return (_jsx(Link, { component: "button", underline: "hover", onClick: onClick, hasIcon: false, children: title }));
};
const NavigableLabelTicks = ({ items }) => {
    const theme = useTheme();
    return (_jsx(Stack, { sx: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            width: '100%',
        }, children: items.map((item, index) => (_jsx(Title, { title: item.title ? renderTitle(item.title, item.onClick) : undefined, description: item.description, variant: "S", fontWeight: "fontWeightRegular", sx: {
                flex: 1,
                width: '100%',
                minWidth: 114,
                paddingBottom: 2.5,
                borderBottom: item.highlighted ? '8px solid' : 'none',
                borderColor: theme.palette.newBase?.brand[200],
            }, centered: true }, index))) }));
};
export default NavigableLabelTicks;
