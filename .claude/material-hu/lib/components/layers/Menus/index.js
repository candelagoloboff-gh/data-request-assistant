import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useState, } from 'react';
import ListItem from '../../design-system/List/components/ListItem';
import Menu from '../../design-system/Menu';
import MenuItem from '../../design-system/Menu/components/MenuItem';
import Stack from '@mui/material/Stack';
import { IconChevronRight } from '@tabler/icons-react';
const MenuLayerContext = createContext(null);
export const useMenuLayer = () => {
    const context = useContext(MenuLayerContext);
    if (!context) {
        throw new Error('useMenuLayer must be used inside MenuLayerProvider');
    }
    return context;
};
/**
 * MenuLayerProvider - Context provider for managing nested contextual menus
 *
 * This provider manages a stack-based menu system that supports:
 * - Opening contextual menus from any component
 * - Nested submenus (infinite depth)
 * - Smooth open/close transitions
 * - Multiple menu instances without conflicts
 *
 * ## How it works:
 *
 * ### 1. Menu Stack
 * Menus are stored in a stack array where:
 * - Index 0 = root menu
 * - Index 1+ = nested submenus
 * Each level maintains its own anchor element and menu items
 *
 * ### 2. Session Management
 * Each menu session has a unique `sessionId` (timestamp-based) to prevent conflicts:
 * - When opening a new menu → new sessionId is generated
 * - When closing → only closes if sessionId matches current session
 * - This prevents old menus from closing new ones during transitions
 *
 * ### 3. Transition Handling
 * - `isOpen` controls the open/close animation state
 * - When closing: `isOpen` becomes false but stack remains intact (for animation)
 * - After transition completes: stack is cleared via `onTransitionEnd`
 *
 * ### 4. Close Behavior
 * - Only the last (deepest) menu in the stack handles backdrop clicks
 * - Parent menus don't respond to close events (prevents conflicts)
 * - Clicking an item without subitems closes all menus
 *
 * ## Usage:
 *
 * @example
 * ```tsx
 * // 1. Wrap app with provider
 * <MenuLayerProvider>
 *   <YourApp />
 * </MenuLayerProvider>
 *
 * // 2. Use the hook in any component
 * function MyComponent() {
 *   const { openMenu, closeMenu } = useMenuLayer();
 *
 *   const handleClick = (e: React.MouseEvent<HTMLElement>) => {
 *     openMenu({
 *       anchorEl: e.currentTarget,
 *       items: [
 *         {
 *           id: 'copy',
 *           title: 'Copy',
 *           onSelect: () => console.log('copied'),
 *         },
 *         {
 *           id: 'navigate',
 *           title: 'Go to page',
 *           closeImmediate: true, // Close immediately (no animation)
 *           onSelect: () => navigate('/some-page'),
 *         },
 *         {
 *           id: 'more',
 *           title: 'More options',
 *           items: [ // Nested submenu
 *             { id: 'delete', title: 'Delete', onSelect: () => {} },
 *           ],
 *         },
 *       ],
 *     });
 *   };
 *
 *   return <button onClick={handleClick}>Open Menu</button>;
 * }
 * ```
 */
export function MenuLayerProvider({ children }) {
    const [stack, setStack] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [sessionId, setSessionId] = useState(0); // Unique sessionId for each menu session
    const [menuProps, setMenuProps] = useState(undefined);
    const openMenu = useCallback((args) => {
        // Generate a unique sessionId for this session
        const newSessionId = Date.now();
        setSessionId(newSessionId);
        setStack([{ anchorEl: args.anchorEl, items: args.items }]);
        setMenuProps(args.menuProps);
        setIsOpen(true);
    }, []);
    const openSubMenu = useCallback((anchorEl, items) => {
        setStack(prev => {
            // Prevent opening the same submenu multiple times
            const lastLevel = prev[prev.length - 1];
            if (lastLevel && lastLevel.items === items) {
                return prev; // Don't add if it's the same items array
            }
            return [...prev, { anchorEl, items }];
        });
    }, []);
    const closeMenu = useCallback((closingSessionId, immediate) => {
        // Close if the sessionId matches (i.e. if it is the current menu)
        setSessionId(currentId => {
            if (currentId === closingSessionId) {
                setIsOpen(false);
                // If immediate, clear the stack right away without waiting for animation
                if (immediate) {
                    setStack([]);
                    setMenuProps(undefined);
                }
            }
            return currentId;
        });
    }, []);
    return (_jsxs(MenuLayerContext.Provider, { value: {
            openMenu,
            closeMenu: (immediate) => closeMenu(sessionId, immediate),
        }, children: [children, stack.map((level, index) => {
                const isLast = index === stack.length - 1;
                // Captures the sessionId of this render
                const menuSessionId = sessionId;
                return (_jsx(Menu
                // Unique key by session
                , { anchorEl: level.anchorEl, open: isOpen, onClose: isLast
                        ? // Pass the sessionId to close the menu
                            () => closeMenu(menuSessionId)
                        : undefined, onTransitionEnd: () => {
                        // Clean up if closed, is the last and belongs to this session
                        if (!isOpen && isLast && menuSessionId === sessionId) {
                            setStack([]);
                            setMenuProps(undefined);
                        }
                    }, position: "top-right", ...menuProps, children: level.items.map(item => (_jsxs(MenuItem, { disabled: item.disabled, onClick: e => {
                            if (item.items) {
                                openSubMenu(e.currentTarget, item.items);
                            }
                            else {
                                item.onSelect?.();
                                closeMenu(menuSessionId, item.closeImmediate);
                            }
                        }, children: [_jsx(ListItem, { component: "div", text: {
                                    title: item.title,
                                    description: item.description,
                                }, sx: {
                                    '.MuiListItem-root': { p: 0 },
                                }, slotProps: {
                                    title: {
                                        slotProps: {
                                            description: {
                                                withEllipsis: true,
                                                sx: {
                                                    '& > .MuiTypography-root': {
                                                        whiteSpace: 'normal',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                }, avatar: item.icon && { Icon: item.icon } }), item.items && (_jsx(Stack, { sx: { ml: 2 }, children: _jsx(IconChevronRight, { size: 24, color: "currentColor" }) }))] }, item.id))) }, `${menuSessionId}-${index}`));
            })] }));
}
