import { type ReactNode } from 'react';
import { type MenuLayerContextValue } from './types';
export declare const useMenuLayer: () => MenuLayerContextValue;
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
export declare function MenuLayerProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
