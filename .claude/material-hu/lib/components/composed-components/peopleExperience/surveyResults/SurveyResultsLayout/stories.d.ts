import { type Meta, type StoryObj } from '@storybook/react';
import SurveyResultsLayout from './index';
declare const meta: Meta<typeof SurveyResultsLayout>;
export default meta;
type Story = StoryObj<typeof SurveyResultsLayout>;
export declare const Default: Story;
export declare const WithNoFilters: Story;
export declare const CustomLabelsAndCount: Story;
export declare const Loading: Story;
