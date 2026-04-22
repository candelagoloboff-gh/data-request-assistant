import { type Meta, type StoryObj } from '@storybook/react-vite';
import ProfileSingleFieldRow from '.';
declare const meta: Meta<typeof ProfileSingleFieldRow>;
export default meta;
type Story = StoryObj<typeof ProfileSingleFieldRow>;
export declare const Default: Story;
export declare const LongValue: Story;
export declare const ShortValue: Story;
