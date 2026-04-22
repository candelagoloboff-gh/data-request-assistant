export const colors = [
    {
        color: '#BFEDD2',
        label: 'COLOR_PICKER_SWATCHES__LIGHT_GREEN',
    },
    {
        color: '#FBEEB8',
        label: 'COLOR_PICKER_SWATCHES__LIGHT_YELLOW',
    },
    {
        color: '#F8CAC6',
        label: 'COLOR_PICKER_SWATCHES__LIGHT_RED',
    },
    {
        color: '#ECCAFA',
        label: 'COLOR_PICKER_SWATCHES__LIGHT_PURPLE',
    },
    {
        color: '#C2E0F4',
        label: 'COLOR_PICKER_SWATCHES__LIGHT_BLUE',
    },
    {
        color: '#2DC26B',
        label: 'COLOR_PICKER_SWATCHES__GREEN',
    },
    {
        color: '#F1C40F',
        label: 'COLOR_PICKER_SWATCHES__YELLOW',
    },
    {
        color: '#E03E2D',
        label: 'COLOR_PICKER_SWATCHES__RED',
    },
    {
        color: '#B96AD9',
        label: 'COLOR_PICKER_SWATCHES__PURPLE',
    },
    {
        color: '#3598DB',
        label: 'COLOR_PICKER_SWATCHES__BLUE',
    },
    {
        color: '#169179',
        label: 'COLOR_PICKER_SWATCHES__DARK_GREEN',
    },
    {
        color: '#E67E23',
        label: 'COLOR_PICKER_SWATCHES__DARK_YELLOW',
    },
    {
        color: '#BA372A',
        label: 'COLOR_PICKER_SWATCHES__DARK_RED',
    },
    {
        color: '#843FA1',
        label: 'COLOR_PICKER_SWATCHES__DARK_PURPLE',
    },
    {
        color: '#236FA1',
        label: 'COLOR_PICKER_SWATCHES__DARK_BLUE',
    },
    {
        color: '#ECF0F1',
        label: 'COLOR_PICKER_SWATCHES__LIGHTEST_GREY',
    },
    {
        color: '#CED4D9',
        label: 'COLOR_PICKER_SWATCHES__LIGHTER_GREY',
    },
    {
        color: '#95A5A6',
        label: 'COLOR_PICKER_SWATCHES__GREY',
    },
    {
        color: '#7E8C8D',
        label: 'COLOR_PICKER_SWATCHES__DARKER_GREY',
    },
    {
        color: '#34495E',
        label: 'COLOR_PICKER_SWATCHES__DARKEST_GREY',
    },
    {
        color: '#000000',
        label: 'COLOR_PICKER_SWATCHES__BLACK',
    },
    {
        color: '#FFFFFF',
        label: 'COLOR_PICKER_SWATCHES__WHITE',
    },
];
export const baseSwatchStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    minWidth: 32,
    minHeight: 32,
    borderRadius: 0.5,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.125s ease-in-out',
    backgroundColor: 'currentColor',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05) inset',
    '&:hover': {
        transform: 'scale(0.9)',
        backgroundColor: 'currentColor',
    },
    '&:active': {
        transform: 'scale(0.8)',
    },
};
