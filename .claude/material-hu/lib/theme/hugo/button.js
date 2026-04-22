import { loadingButtonClasses } from '@mui/lab';
import { buttonClasses } from '@mui/material';
const customShadow = {
    outlinedFocusedVisible: '0px -4px 4px 0px #AAAABA73 inset',
    containedFocusedVisible: '0px -4px 4px 0px #00000040 inset',
};
const commonButtonRootStyle = () => ({
    // text style globalXS/semiBold to avoid a wrapper component
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: '140%',
    fontWeight: 600,
    letterSpacing: 0.2,
    // text style globalS/semiBold
    boxShadow: 'none',
    borderRadius: '8px',
    borderColor: 'transparent',
    '&:hover': {
        boxShadow: 'none',
    },
});
const primaryVariantStyle = (theme) => ({
    color: theme.palette.new.text.neutral.inverted,
    backgroundColor: theme.palette.new.action.button.background.primary.default,
    svg: {
        stroke: theme.palette.new.text.neutral.inverted,
    },
    '&:hover': {
        backgroundColor: theme.palette.new.action.button.background.primary.hover,
        color: theme.palette.new.text.neutral.inverted,
        svg: {
            stroke: theme.palette.new.text.neutral.inverted,
        },
    },
    [`&.${loadingButtonClasses.loading}`]: {
        backgroundColor: theme.palette.new.action.button.background.primary.hover,
        color: theme.palette.new.text.neutral.inverted,
        svg: {
            stroke: theme.palette.new.text.neutral.inverted,
        },
        [`& .${loadingButtonClasses.loadingIndicator}`]: {
            color: theme.palette.new.text.neutral.inverted,
        },
    },
    [`&.${buttonClasses.disabled}`]: {
        color: theme.palette.new.action.button.text.disabled.darker,
        backgroundColor: theme.palette.new.action.button.background.primary.disabled,
        svg: {
            stroke: theme.palette.new.action.button.text.disabled.darker,
        },
    },
    [`&.${buttonClasses.focusVisible}`]: {
        backgroundColor: theme.palette.new.action.button.background.primary.focus,
        boxShadow: customShadow.containedFocusedVisible,
        color: theme.palette.new.text.neutral.inverted,
        svg: {
            stroke: theme.palette.new.text.neutral.inverted,
        },
    },
});
const secondaryVariantStyle = (theme) => ({
    border: '1px solid',
    color: theme.palette.new.text.neutral.brand,
    borderColor: theme.palette.new.border.neutral.brand,
    backgroundColor: theme.palette.new.action.button.background.secondary.default,
    svg: {
        stroke: theme.palette.new.text.neutral.brand,
    },
    '&:hover': {
        backgroundColor: theme.palette.new.action.button.background.secondary.hover,
        color: theme.palette.new.text.neutral.brand,
        borderColor: theme.palette.new.border.neutral.brand,
        svg: {
            stroke: theme.palette.new.text.neutral.brand,
        },
    },
    [`&.${loadingButtonClasses.loading}`]: {
        backgroundColor: theme.palette.new.action.button.background.secondary.hover,
        color: theme.palette.new.text.neutral.brand,
        borderColor: theme.palette.new.border.neutral.brand,
        svg: {
            stroke: theme.palette.new.text.neutral.brand,
        },
        [`& .${loadingButtonClasses.loadingIndicator}`]: {
            color: theme.palette.new.text.neutral.brand,
        },
    },
    [`&.${buttonClasses.disabled}`]: {
        color: theme.palette.new.action.button.text.disabled.darker,
        backgroundColor: theme.palette.new.action.button.background.secondary.default,
        borderColor: theme.palette.new.border.neutral.default,
        svg: {
            stroke: theme.palette.new.action.button.text.disabled.darker,
        },
    },
    [`&.${buttonClasses.focusVisible}`]: {
        boxShadow: customShadow.outlinedFocusedVisible,
        backgroundColor: theme.palette.new.action.button.background.secondary.focus,
        color: theme.palette.new.text.neutral.brand,
        borderColor: theme.palette.new.border.neutral.brand,
        svg: {
            stroke: theme.palette.new.text.neutral.brand,
        },
    },
});
const tertiaryVariantStyle = (theme, isIconButton = false) => ({
    color: theme.palette.new.text.neutral.brand,
    backgroundColor: 'transparent',
    border: 'none',
    svg: {
        stroke: isIconButton
            ? theme.palette.new.text.neutral.default
            : theme.palette.new.text.neutral.brand,
    },
    '&:hover': {
        backgroundColor: theme.palette.new.action.button.background.tertiary.hover,
        color: theme.palette.new.text.neutral.brand,
        border: 'none',
        svg: {
            stroke: isIconButton
                ? theme.palette.new.text.neutral.default
                : theme.palette.new.text.neutral.brand,
        },
    },
    [`&.${loadingButtonClasses.loading}`]: {
        backgroundColor: theme.palette.new.action.button.background.tertiary.hover,
        color: theme.palette.new.text.neutral.brand,
        border: 'none',
        svg: {
            stroke: isIconButton
                ? theme.palette.new.text.neutral.default
                : theme.palette.new.text.neutral.brand,
        },
        [`& .${loadingButtonClasses.loadingIndicator}`]: {
            color: theme.palette.new.text.neutral.brand,
        },
    },
    [`&.${buttonClasses.disabled}`]: {
        backgroundColor: 'transparent',
        color: theme.palette.new.action.button.text.disabled.darker,
        border: 'none',
        svg: {
            stroke: theme.palette.new.action.button.text.disabled.darker,
        },
    },
    [`&.${buttonClasses.focusVisible}`]: {
        boxShadow: customShadow.outlinedFocusedVisible,
        backgroundColor: theme.palette.new.action.button.background.tertiary.focus,
        color: theme.palette.new.text.neutral.brand,
        border: 'none',
        svg: {
            stroke: isIconButton
                ? theme.palette.new.text.neutral.default
                : theme.palette.new.text.neutral.brand,
        },
    },
});
const tertiaryFilledVariantStyle = (theme) => ({
    color: theme.palette.new.text.neutral.brand,
    backgroundColor: theme.palette.new.action.background.neutral.hover,
    border: 'none',
    svg: {
        stroke: theme.palette.new.text.neutral.brand,
    },
    '&:hover': {
        backgroundColor: theme.palette.new.action.button.background.tertiary.hover,
        color: theme.palette.new.text.neutral.brand,
        border: 'none',
        svg: {
            stroke: theme.palette.new.text.neutral.brand,
        },
    },
    [`&.${loadingButtonClasses.loading}`]: {
        backgroundColor: theme.palette.new.action.button.background.tertiary.hover,
        color: theme.palette.new.text.neutral.brand,
        border: 'none',
        svg: {
            stroke: theme.palette.new.text.neutral.brand,
        },
        [`& .${loadingButtonClasses.loadingIndicator}`]: {
            color: theme.palette.new.text.neutral.brand,
        },
    },
    [`&.${buttonClasses.disabled}`]: {
        backgroundColor: theme.palette.new.action.background.neutral.hover,
        color: theme.palette.new.action.button.text.disabled.darker,
        border: 'none',
        svg: {
            stroke: theme.palette.new.action.button.text.disabled.darker,
        },
    },
    [`&.${buttonClasses.focusVisible}`]: {
        boxShadow: customShadow.outlinedFocusedVisible,
        backgroundColor: theme.palette.new.action.button.background.tertiary.focus,
        color: theme.palette.new.text.neutral.brand,
        border: 'none',
        svg: {
            stroke: theme.palette.new.text.neutral.brand,
        },
    },
});
const successVariantStyle = (theme) => ({
    color: theme.palette.new.text.neutral.inverted,
    backgroundColor: theme.palette.new.action.button.background.success.default,
    border: 'none',
    svg: {
        stroke: theme.palette.new.text.neutral.inverted,
    },
    '&:hover': {
        backgroundColor: theme.palette.new.action.button.background.success.hover,
        color: theme.palette.new.text.neutral.inverted,
        border: 'none',
        svg: {
            stroke: theme.palette.new.text.neutral.inverted,
        },
    },
    [`&.${loadingButtonClasses.loading}`]: {
        backgroundColor: theme.palette.new.action.button.background.success.hover,
        color: theme.palette.new.text.neutral.inverted,
        border: 'none',
        svg: {
            stroke: theme.palette.new.text.neutral.inverted,
        },
        [`& .${loadingButtonClasses.loadingIndicator}`]: {
            color: theme.palette.new.text.neutral.inverted,
        },
    },
    [`&.${buttonClasses.disabled}`]: {
        backgroundColor: theme.palette.new.action.button.background.success.disabled,
        color: theme.palette.new.text.neutral.inverted,
        border: 'none',
        svg: {
            stroke: theme.palette.new.text.neutral.inverted,
        },
    },
    [`&.${buttonClasses.focusVisible}`]: {
        backgroundColor: theme.palette.new.action.button.background.success.focus,
        boxShadow: customShadow.containedFocusedVisible,
        color: theme.palette.new.text.neutral.inverted,
        border: 'none',
        svg: {
            stroke: theme.palette.new.text.neutral.inverted,
        },
    },
});
const errorVariantStyle = (theme) => ({
    color: theme.palette.new.text.neutral.inverted,
    backgroundColor: theme.palette.new.action.button.background.error.default,
    border: 'none',
    svg: {
        stroke: theme.palette.new.text.neutral.inverted,
    },
    '&:hover': {
        backgroundColor: theme.palette.new.action.button.background.error.hover,
        color: theme.palette.new.text.neutral.inverted,
        border: 'none',
        svg: {
            stroke: theme.palette.new.text.neutral.inverted,
        },
    },
    [`&.${loadingButtonClasses.loading}`]: {
        backgroundColor: theme.palette.new.action.button.background.error.hover,
        color: theme.palette.new.text.neutral.inverted,
        border: 'none',
        svg: {
            stroke: theme.palette.new.text.neutral.inverted,
        },
        [`& .${loadingButtonClasses.loadingIndicator}`]: {
            color: theme.palette.new.text.neutral.inverted,
        },
    },
    [`&.${buttonClasses.disabled}`]: {
        backgroundColor: theme.palette.new.action.button.background.error.disabled,
        color: theme.palette.new.text.neutral.inverted,
        border: 'none',
        svg: {
            stroke: theme.palette.new.text.neutral.inverted,
        },
    },
    [`&.${buttonClasses.focusVisible}`]: {
        backgroundColor: theme.palette.new.action.button.background.error.focus,
        boxShadow: customShadow.containedFocusedVisible,
        color: theme.palette.new.text.neutral.inverted,
        border: 'none',
        svg: {
            stroke: theme.palette.new.text.neutral.inverted,
        },
    },
});
const buttonVariants = (theme, isIconButton = false) => [
    {
        props: { variant: 'primary' },
        style: primaryVariantStyle(theme),
    },
    {
        props: { variant: 'secondary' },
        style: secondaryVariantStyle(theme),
    },
    {
        props: { variant: 'tertiary' },
        style: tertiaryVariantStyle(theme, isIconButton),
    },
    {
        props: { variant: 'tertiary-filled' },
        style: tertiaryFilledVariantStyle(theme),
    },
    {
        props: { variant: 'success' },
        style: successVariantStyle(theme),
    },
    {
        props: { variant: 'error' },
        style: errorVariantStyle(theme),
    },
];
export { buttonVariants, commonButtonRootStyle, customShadow, primaryVariantStyle, secondaryVariantStyle, tertiaryVariantStyle, successVariantStyle, errorVariantStyle, };
