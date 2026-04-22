import { jsx as _jsx } from "react/jsx-runtime";
import CardContainer from '../../../../../../design-system/CardContainer';
import Title from '../../../../../../design-system/Title';
import { typographyClasses } from '@mui/material';
const TableHeaderDecorator = ({ backgroundColor, textColor, title, description, }) => {
    return (_jsx(CardContainer, { color: "grey", fullWidth: true, sx: { backgroundColor }, children: _jsx(Title, { title: title, description: description, slotProps: {
                title: { sx: { color: textColor } },
                description: {
                    sx: {
                        [`.${typographyClasses.root}`]: {
                            color: textColor,
                        },
                    },
                },
            }, variant: "S" }) }));
};
export default TableHeaderDecorator;
