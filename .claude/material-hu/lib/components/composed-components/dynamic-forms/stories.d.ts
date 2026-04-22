import { type Meta, type StoryObj } from '@storybook/react-vite';
declare const DynamicFormWithProviders: () => import("react/jsx-runtime").JSX.Element;
declare const meta: Meta<typeof DynamicFormWithProviders>;
export declare const Loading: Story;
export declare const DynamicFormResults: Story;
export default meta;
type Story = StoryObj<typeof DynamicFormWithProviders>;
export declare const Default: Story;
