import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Title from '../../../../design-system/Title';
import Stack from '@mui/material/Stack';
import { fadeIn } from '../../../../../utils/animations';
const ResultsWrapper = ({ children, title, ...props }) => {
    return (_jsxs(Stack, { sx: {
            width: '100%',
            height: '100%',
            animation: `${fadeIn} 150ms ease-in-out backwards`,
            backgroundColor: theme => theme.palette.new.background.layout.default,
        }, ...props, children: [_jsx(Stack, { sx: {
                    backgroundColor: theme => theme.palette.new.background.elements.default,
                    px: 3,
                    py: 1.5,
                    boxShadow: '-1px 4px 8px 0px #DFE0E699',
                    zIndex: 1,
                }, children: _jsx(Title, { title: title, variant: "L" }) }), children] }));
};
export default ResultsWrapper;
