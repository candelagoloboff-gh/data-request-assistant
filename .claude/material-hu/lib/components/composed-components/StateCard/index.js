import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Avatar from '../../design-system/Avatar';
import CardContainer from '../../design-system/CardContainer';
import Title from '../../design-system/Title';
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
/*
 @deprecated Please use the `NewStateCard` component instead.
*/
export const StateCard = ({ sx, slotProps = {}, cardContained = true, 
/** @deprecated Use slotProps.avatar instead */
color, 
/** @deprecated Use slotProps.avatar instead */
Icon, 
/** @deprecated Use slotProps.button instead */
action = {}, 
/** @deprecated Use slotProps.title instead */
variant = 'S', 
/** @deprecated Use slotProps.title instead */
title, 
/** @deprecated Use slotProps.title instead */
description, }) => {
    const MainContainer = cardContained ? CardContainer : Stack;
    const mainContainerSxProps = cardContained
        ? {
            width: '100%',
            '& .MuiCardContent-root': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
            },
            ...sx,
            ...slotProps.root?.sx,
        }
        : {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 2,
            gap: 2,
            p: 2,
            ...sx,
            ...slotProps.root?.sx,
        };
    const showButton = slotProps?.button || Object.keys(action).length > 0;
    const showAvatar = slotProps?.avatar?.Icon || Icon;
    return (_jsxs(MainContainer, { ...slotProps.root, sx: mainContainerSxProps, children: [showAvatar && (_jsx(Avatar, { size: "large", Icon: slotProps.avatar?.Icon || Icon, color: slotProps.avatar?.color || color, ...slotProps.avatar })), _jsx(Title, { variant: variant, title: slotProps?.title?.title || title, description: slotProps?.title?.description || description, centered: true, ...slotProps.title }), showButton && (_jsx(LoadingButton, { variant: "outlined", ...action, ...slotProps.button }))] }));
};
export default StateCard;
