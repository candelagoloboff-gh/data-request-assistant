import { type Meta, type StoryObj } from '@storybook/react';
import HTMLBody from './index';
declare const meta: Meta<typeof HTMLBody>;
export default meta;
type Story = StoryObj<typeof HTMLBody>;
export declare const Basic: Story;
export declare const WithLinks: Story;
export declare const WithImagesEmbedsAndVideos: Story;
export declare const WithVideosDisabledDownload: Story;
