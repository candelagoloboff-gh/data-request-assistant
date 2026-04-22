import { useTheme } from '@mui/material/styles';
export const useSidebarColors = () => {
    const { palette } = useTheme();
    const getColors = (palette) => {
        return {
            MAIN_WHITE: palette.new.background.elements.default,
            MAIN_LIGHT_GREY: palette.new.background.layout.default,
            TITLE_COLOR: palette.new.text.neutral.lighter,
            ROW_HOVER: palette.new.action.background.neutral.hover,
            NESTED_ROW_HOVER: `color-mix(
        in srgb,
        ${palette.new.action.background.neutral.focus} 80%,
        ${palette.new.action.background.brand.selected}
      )`,
            NESTED_ROW: palette.new.background.elements.grey,
            EXPANDED_ROW: palette.new.action.background.neutral.focus,
        };
    };
    return getColors(palette);
};
