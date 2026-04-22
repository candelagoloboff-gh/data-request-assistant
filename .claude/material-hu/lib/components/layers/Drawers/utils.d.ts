import { type DrawerRestoreSize } from '../../design-system/Drawer/types';
import { type CompositionDrawerProps, type OpenDrawerArgs } from './types';
/**
 * Type guard to check if config uses composition components
 */
export declare function isCompositionDrawer(config: OpenDrawerArgs): config is CompositionDrawerProps;
/**
 * Get size for a drawer config based on its type and layout
 */
export declare function getDrawerSize(config: OpenDrawerArgs): DrawerRestoreSize;
