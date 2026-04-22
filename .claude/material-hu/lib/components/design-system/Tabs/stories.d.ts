import { type Meta, type StoryObj } from '@storybook/react-vite';
import { type TabsProps } from './types';
type StoryArgs = TabsProps & {
    count: number;
    badgeOnLast: boolean;
};
declare const meta: Meta<StoryArgs>;
export default meta;
type Story = StoryObj<StoryArgs>;
export declare const Default: Story;
export declare const BadgeWithContent: Story;
export declare const ControlledValueStory: Story;
