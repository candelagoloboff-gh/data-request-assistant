import { type Meta, type StoryObj } from '@storybook/react-vite';
import TextInformation from '.';
declare const meta: Meta<typeof TextInformation>;
export default meta;
type Story = StoryObj<typeof TextInformation>;
export declare const Default: Story;
export declare const WithVariant: Story;
export declare const WithLoading: Story;
export declare const WithLoadingAndVariant: Story;
