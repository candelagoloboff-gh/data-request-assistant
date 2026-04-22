import { DrawerSize, } from '../../design-system/Drawer/types';
/**
 * Type guard to check if config uses composition components
 */
export function isCompositionDrawer(config) {
    return 'content' in config;
}
/**
 * Get size for a drawer config based on its type and layout
 */
export function getDrawerSize(config) {
    if (isCompositionDrawer(config)) {
        return DrawerSize.SMALL;
    }
    const simpleConfig = config;
    const withDoubleLayout = !!simpleConfig.primaryContent || !!simpleConfig.secondaryContent;
    return withDoubleLayout
        ? DrawerSize.LARGE
        : simpleConfig.size || DrawerSize.SMALL;
}
