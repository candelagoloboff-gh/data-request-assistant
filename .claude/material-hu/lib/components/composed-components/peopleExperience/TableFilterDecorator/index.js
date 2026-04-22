import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardContainer from '../../../design-system/CardContainer';
import Title from '../../../design-system/Title';
import { Stack, typographyClasses } from '@mui/material';
const TableFilterDecorator = ({ backgroundColor, textColor, title, description, icon, }) => {
    return (_jsx(CardContainer, { color: "grey", fullWidth: true, sx: { backgroundColor }, children: _jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1.5 }, children: [icon && (_jsx(Stack, { sx: {
                        color: textColor,
                    }, children: icon })), _jsx(Title, { title: title, description: description, slotProps: {
                        title: { sx: { color: textColor } },
                        description: {
                            sx: {
                                [`.${typographyClasses.root}`]: {
                                    color: textColor,
                                },
                            },
                        },
                    }, variant: "S" })] }) }));
};
export default TableFilterDecorator;
