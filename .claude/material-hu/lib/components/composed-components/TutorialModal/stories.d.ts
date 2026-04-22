import { type Meta, type StoryObj } from '@storybook/react-vite';
declare const meta: Meta;
export default meta;
type Story = StoryObj<{
    isCarousel: boolean;
}>;
export declare const Default: Story;
export declare const WithCarousel: Story;
