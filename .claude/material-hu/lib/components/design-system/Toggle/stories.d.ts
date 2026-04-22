import { type Meta, type StoryObj } from '@storybook/react-vite';
import Toggle from '.';
declare const meta: Meta<typeof Toggle>;
export default meta;
type Story = StoryObj<typeof Toggle>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const CheckedDisabled: Story;
export declare const UncheckedDisabled: Story;
