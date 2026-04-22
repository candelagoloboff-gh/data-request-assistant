import { darken, lighten } from '@mui/material';
import { buttonVariants, commonButtonRootStyle, primaryVariantStyle, secondaryVariantStyle, tertiaryVariantStyle, } from './button';
export const components = {
    MuiTypography: {
        styleOverrides: {
            root: ({ theme }) => ({
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.new.text.neutral.default,
            }),
        },
    },
    MuiBadge: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: theme.palette.newBase?.white,
            }),
            badge: ({ theme }) => ({
                variants: [
                    {
                        props: { color: 'primary' },
                        style: {
                            backgroundColor: theme.palette.newBase?.brand[500],
                        },
                    },
                    {
                        props: { color: 'success' },
                        style: {
                            backgroundColor: theme.palette.newBase?.green[500],
                        },
                    },
                    {
                        props: { color: 'error' },
                        style: {
                            backgroundColor: theme.palette.newBase?.red[500],
                        },
                    },
                    {
                        props: { color: 'warning' },
                        style: {
                            backgroundColor: theme.palette.newBase?.yellow[500],
                        },
                    },
                    {
                        props: { color: 'disabled' },
                        style: {
                            backgroundColor: theme.palette.newBase?.grey[500],
                        },
                    },
                ],
            }),
            dot: ({ theme }) => ({
                borderColor: theme.palette.newBase?.white,
                borderStyle: 'solid',
                borderWidth: 1,
            }),
            standard: ({ theme }) => ({
                // text style globalXXS/semibold to avoid a wrapper component
                fontFamily: 'Roboto',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.024px', // 0.2% of 12px
                // text style globalXXS/semibold
                paddingLeft: theme.spacing(0.25),
                paddingRight: theme.spacing(0.25),
                color: theme.palette.new.text.neutral.inverted,
            }),
        },
    },
    MuiButton: {
        defaultProps: {
            disableRipple: true,
            size: 'small',
            variant: 'tertiary',
        },
        styleOverrides: {
            root: ({ theme }) => ({
                textTransform: 'none',
                ...commonButtonRootStyle(),
                variants: buttonVariants(theme),
            }),
            /* TODO: remove when HuGo Button is applied ↓ */
            contained: ({ theme }) => primaryVariantStyle(theme),
            outlined: ({ theme }) => secondaryVariantStyle(theme),
            text: ({ theme }) => tertiaryVariantStyle(theme),
            /* TODO: remove when HuGo Button is applied */
            sizeLarge: ({ theme }) => ({
                minWidth: '200px',
                paddingTop: theme.spacing(1.5),
                paddingBottom: theme.spacing(1.5),
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                height: 46,
                fontSize: 16,
            }),
            sizeSmall: ({ theme }) => ({
                minWidth: '104px',
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1),
                paddingLeft: theme.spacing(1.5),
                paddingRight: theme.spacing(1.5),
                height: 36,
            }),
            startIcon: () => ({
                marginRight: '4px',
                '& > svg': {
                    height: 16,
                    width: 16,
                },
            }),
            endIcon: () => ({
                marginLeft: '4px',
                '& > svg': {
                    height: 16,
                    width: 16,
                },
            }),
        },
    },
    MuiFab: {
        defaultProps: {
            color: 'primary',
            disableRipple: true,
        },
        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                textTransform: 'capitalize',
                boxShadow: 'none',
                maxWidth: '224px',
                width: 'fit-content',
                height: 'fit-content',
                padding: theme.spacing(2),
                fontSize: '18px',
                lineHeight: 1,
                gap: 8,
                ...primaryVariantStyle(theme),
                ...(ownerState.size === 'large' && {
                    maxWidth: '224px',
                    padding: theme.spacing(2),
                    fontSize: '18px',
                    height: '52px',
                    '& > svg': {
                        height: 24,
                        width: 24,
                    },
                }),
            }),
            sizeSmall: ({ theme }) => ({
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1),
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                fontSize: '14px',
                height: '36px',
                '& > svg': {
                    height: 16,
                    width: 16,
                },
            }),
            circular: {
                borderRadius: '32px',
            },
            primary: ({ theme }) => primaryVariantStyle(theme),
        },
    },
    MuiIconButton: {
        defaultProps: {
            size: 'large',
            disableRipple: true,
            variant: 'tertiary',
        },
        styleOverrides: {
            root: ({ theme }) => ({
                ...commonButtonRootStyle(),
                variants: buttonVariants(theme, true),
            }),
            sizeLarge: ({ theme }) => ({
                padding: theme.spacing(1),
            }),
            sizeSmall: ({ theme }) => ({
                padding: theme.spacing(0.5),
                svg: {
                    width: '16px',
                    height: '16px',
                },
            }),
        },
    },
    MuiDivider: {
        styleOverrides: {
            root: ({ ownerState: { orientation }, theme }) => ({
                backgroundColor: theme.palette.new.border.neutral.divider,
                borderColor: theme.palette.new.border.neutral.divider,
                height: orientation === 'vertical' ? 'auto' : 0,
            }),
        },
    },
    MuiSkeleton: {
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: theme.palette.mode === 'light'
                    ? darken(theme.palette.new.background.layout.default, 0.05)
                    : lighten(theme.palette.new.background.layout.default, 0.05),
                '&:after': {
                    background: `linear-gradient(90deg, transparent, 10% ${theme.palette.mode === 'light'
                        ? darken(theme.palette.new.background.layout.default, 0.1)
                        : lighten(theme.palette.new.background.layout.default, 0.1)}, transparent)`,
                },
            }),
        },
    },
};
