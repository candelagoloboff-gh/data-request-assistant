import { type CollapsibleInfoSidebarProps } from './types';
/**
 * CollapsibleInfoSidebar - A sidebar component that can be positioned on the left or right
 * and displays collapsible content items with icons.
 *
 * Features:
 * - Configurable position (left/right)
 * - Collapsible items with icon-only view when collapsed
 * - Customizable widths
 * - Support for controlled and uncontrolled states
 * - Optional always-expanded mode
 */
declare const CollapsibleInfoSidebar: ({ items, position, contentWidth, defaultExpandedIndex, alwaysExpanded, expandedIndex: controlledExpandedIndex, onExpandedIndexChange, sx, }: CollapsibleInfoSidebarProps) => import("react/jsx-runtime").JSX.Element;
export default CollapsibleInfoSidebar;
