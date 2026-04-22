import { type Meta, type StoryObj } from '@storybook/react-vite';
declare const meta: Meta;
export default meta;
type Story = StoryObj;
/**
 * The simplest way to use the Dialog layer.
 * Uses `useDialogLayer` hook with the Simple API (props-based).
 */
export declare const Simple: Story;
/**
 * Dialog with reactive state using `useDialogLayerItem`.
 * The dialog configuration automatically stays in sync with component state.
 */
export declare const ReactiveState: Story;
/**
 * Demonstrates nested dialogs combining all patterns:
 * - First dialog: Simple API with `useDialogLayer`
 * - Second dialog: Reactive state with `useDialogLayerItem`
 * - Third dialog: Composition API with custom layout
 */
export declare const NestedMixed: Story;
