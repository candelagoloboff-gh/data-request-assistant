import { type Meta, type StoryObj } from '@storybook/react-vite';
declare const meta: Meta;
export default meta;
type Story = StoryObj;
/**
 * The simplest way to use the Drawer layer.
 * Uses `useDrawerLayer` hook with the Simple API (props-based).
 */
export declare const Simple: Story;
/**
 * Drawer with reactive state using `useDrawerLayerItem`.
 * The drawer configuration automatically stays in sync with component state.
 */
export declare const ReactiveState: Story;
/**
 * Demonstrates the Task Focus toggle in a drawer opened via the Drawer Layer.
 * Pass `enableTaskFocus: true` to show the maximize/restore button in the header;
 * clicking it toggles fullscreen (task focus) mode.
 */
export declare const TaskFocusEnabled: Story;
/**
 * Demonstrates nested drawers combining all patterns:
 * - First drawer: Simple API with `useDrawerLayer`
 * - Second drawer: Reactive state with `useDrawerLayerItem`
 * - Third drawer: Composition API with custom layout
 * - Dialog confirmation on close
 */
export declare const NestedMixed: Story;
