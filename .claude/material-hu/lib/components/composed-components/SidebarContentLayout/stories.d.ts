import { type Meta, type StoryObj } from '@storybook/react';
import SidebarContentLayout from './index';
declare const meta: Meta<typeof SidebarContentLayout>;
export default meta;
type Story = StoryObj<typeof SidebarContentLayout>;
export declare const Default: Story;
export declare const Loading: Story;
export declare const WithCustomSidebarLabel: Story;
