import { TagColorVariant } from './types';
export const getTagColors = (variant, theme) => {
    const defaultColor = theme.palette.newBase?.brand[900] ?? '#29317F';
    const defaultHoverColor = theme.palette.newBase?.brand[200] ?? '#C5D4F8';
    const defaultBackgroundColor = theme.palette.newBase?.brand[50] ?? '#F1F4FD';
    const defaultColors = {
        backgroundColor: defaultBackgroundColor,
        hoverColor: defaultHoverColor,
        color: defaultColor,
    };
    if (!variant || !theme) {
        return defaultColors;
    }
    switch (variant) {
        case TagColorVariant.BRAND:
            return {
                backgroundColor: theme.palette.newBase?.brand[50],
                hoverColor: theme.palette.newBase?.brand[200],
                color: theme.palette.newBase?.brand[900],
            };
        case TagColorVariant.PURPLE:
            return {
                backgroundColor: theme.palette.newBase?.purple[50],
                hoverColor: theme.palette.newBase?.purple[200],
                color: theme.palette.newBase?.purple[900],
            };
        case TagColorVariant.MULBERRY:
            return {
                backgroundColor: theme.palette.newBase?.mulberry[50],
                hoverColor: theme.palette.newBase?.mulberry[200],
                color: theme.palette.newBase?.mulberry[900],
            };
        case TagColorVariant.PINK:
            return {
                backgroundColor: theme.palette.newBase?.pink[50],
                hoverColor: theme.palette.newBase?.pink[200],
                color: theme.palette.newBase?.pink[900],
            };
        case TagColorVariant.SALMON:
            return {
                backgroundColor: theme.palette.newBase?.salmon[50],
                hoverColor: theme.palette.newBase?.salmon[200],
                color: theme.palette.newBase?.salmon[900],
            };
        case TagColorVariant.ERROR:
            return {
                backgroundColor: theme.palette.newBase?.red[50],
                hoverColor: theme.palette.newBase?.red[200],
                color: theme.palette.newBase?.red[900],
            };
        case TagColorVariant.TAN:
            return {
                backgroundColor: theme.palette.newBase?.tan[50],
                hoverColor: theme.palette.newBase?.tan[200],
                color: theme.palette.newBase?.tan[900],
            };
        case TagColorVariant.FLAMINGO:
            return {
                backgroundColor: theme.palette.newBase?.flamingo[50],
                hoverColor: theme.palette.newBase?.flamingo[200],
                color: theme.palette.newBase?.flamingo[900],
            };
        case TagColorVariant.SUNSHINE:
            return {
                backgroundColor: theme.palette.newBase?.sunshine[50],
                hoverColor: theme.palette.newBase?.sunshine[200],
                color: theme.palette.newBase?.sunshine[900],
            };
        case TagColorVariant.LIME:
            return {
                backgroundColor: theme.palette.newBase?.lime[50],
                hoverColor: theme.palette.newBase?.lime[200],
                color: theme.palette.newBase?.lime[900],
            };
        case TagColorVariant.GREEN:
            return {
                backgroundColor: theme.palette.newBase?.green[50],
                hoverColor: theme.palette.newBase?.green[200],
                color: theme.palette.newBase?.green[900],
            };
        case TagColorVariant.LIGHT_BLUE:
            return {
                backgroundColor: theme.palette.newBase?.skyBlue[50],
                hoverColor: theme.palette.newBase?.skyBlue[200],
                color: theme.palette.newBase?.skyBlue[900],
            };
        case TagColorVariant.INK:
            return {
                backgroundColor: theme.palette.newBase?.blackInk[50],
                hoverColor: theme.palette.newBase?.blackInk[200],
                color: theme.palette.newBase?.blackInk[900],
            };
        default:
            return defaultColors;
    }
};
