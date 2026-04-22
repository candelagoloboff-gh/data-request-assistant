import { type Meta, type StoryObj } from '@storybook/react';
import TaskFocusLayout from './index';
declare const meta: Meta<typeof TaskFocusLayout>;
export default meta;
type Story = StoryObj<typeof TaskFocusLayout>;
export declare const Default: Story;
export declare const WithCustomHeader: Story;
