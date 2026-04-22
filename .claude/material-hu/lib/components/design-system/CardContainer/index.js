import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Card, CardActionArea, CardContent, cardActionAreaClasses, useTheme, } from '@mui/material';
import { composeSx } from '../../../utils/components';
import CardContainerBadge from './components/CardContainerBadge';
import CardContainerFooter from './components/CardContainerFooter';
import CardContainerImage from './components/CardContainerImage';
import { getBackgroundColor, getBorderColor } from './utils';
const EmptyWrapper = ({ children }) => children;
const CardContainer = ({ badge = undefined, footer = undefined, hasShadow = false, fullWidth = false, children, sx, onClick, padding = 16, noHover = false, color = 'white', img, slotProps = {}, ...props }, ref) => {
    const theme = useTheme();
    const { shape } = theme;
    const OptionalCardArea = onClick ? CardActionArea : EmptyWrapper;
    const realPadding = padding / 8;
    return (_jsx(Card, { className: "CardContainer-root", ref: ref, sx: composeSx({
            borderRadius: shape.borderRadiusL,
            width: fullWidth ? '100%' : 328,
            border: '1px solid',
            boxShadow: hasShadow
                ? `-1px 4px 8px 0px ${theme.palette.new.shadows['4dp']}`
                : 'none',
            borderWidth: hasShadow ? '0px' : '1px',
            borderColor: getBorderColor(color, hasShadow, theme),
            backgroundColor: getBackgroundColor(color, theme),
            [`.${cardActionAreaClasses.focusHighlight}`]: {
                backgroundColor: noHover ? 'transparent' : '',
            },
            backgroundImage: 'unset',
        }, sx), ...props, children: _jsxs(OptionalCardArea, { onClick: onClick, ...slotProps.actionArea, children: [_jsx(CardContainerImage, { img: img }), _jsx(CardContent, { sx: {
                        p: realPadding,
                        ':last-child': {
                            pb: realPadding,
                        },
                    }, children: children }), _jsx(CardContainerFooter, { footer: footer, sx: { px: realPadding } }), _jsx(CardContainerBadge, { badge: badge })] }) }));
};
CardContainer.displayName = 'CardContainer';
export default forwardRef(CardContainer);
