import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DesignSystemDrawer from '../../design-system/Drawer';
import { useLayerStack } from '../common/useLayerStack';
import { DrawerLayerContext, useDrawerLayer, useDrawerLayerItem, } from './hooks';
import { getDrawerSize, isCompositionDrawer } from './utils';
export { useDrawerLayer, useDrawerLayerItem };
/**
 * Context provider for managing drawers globally.
 *
 * Manages a stack of drawers that can be opened from anywhere in the app.
 * Supports Simple API (props-based) and Composition Components API (custom layouts).
 *
 * @see README.md for full documentation and examples
 */
export function DrawerLayerProvider({ children }) {
    const { stack, open: openDrawer, close: closeDrawer, handleTransitionEnd, getStack: getDrawers, updateConfig: updateDrawerConfig, } = useLayerStack({
        prepareConfig: (config, _id, closeById) => ({
            onClose: closeById,
            ...config,
        }),
    });
    return (_jsxs(DrawerLayerContext.Provider, { value: {
            openDrawer,
            closeDrawer,
            getDrawers,
            updateDrawerConfig,
        }, children: [children, stack.map((level, index) => {
                const isLast = index === stack.length - 1;
                const config = level.config;
                const handleClose = (reason) => {
                    level.config.onClose?.(reason);
                };
                const simpleConfig = isCompositionDrawer(config)
                    ? undefined
                    : config;
                return (_jsx(DesignSystemDrawer.Wrapper, { open: level.isOpen, disableEscapeKeyDown: false, onClose: isLast
                        ? reason => {
                            handleClose(reason);
                        }
                        : undefined, size: getDrawerSize(config), enableTaskFocus: simpleConfig?.enableTaskFocus, SlideProps: {
                        ...config.wrapperProps?.SlideProps,
                        onExited: () => handleTransitionEnd(level.id),
                    }, ...config.wrapperProps, children: isCompositionDrawer(level.config) ? (level.config.content) : (_jsx(DesignSystemDrawer.Content, { ...level.config, onClose: handleClose })) }, level.id));
            })] }));
}
/**
 * Re-export Drawer composition components from design-system
 */
export const Drawer = {
    Header: DesignSystemDrawer.Header,
    Body: DesignSystemDrawer.Body,
    DoubleLayout: DesignSystemDrawer.DoubleLayout,
    Footer: DesignSystemDrawer.Footer,
    Actions: DesignSystemDrawer.Actions,
    Content: DesignSystemDrawer.Content,
};
