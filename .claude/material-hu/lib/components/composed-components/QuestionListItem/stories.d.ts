import { type Meta, type StoryObj } from '@storybook/react-vite';
import { type BaseQuestionType } from './types';
import QuestionListItem from '.';
declare const meta: Meta<typeof QuestionListItem<Question>>;
export default meta;
type Question = BaseQuestionType & {
    type: string;
    required: boolean;
    statement: string;
    allowComments: boolean;
    category: string;
};
export declare const Default: StoryObj<typeof QuestionListItem<BaseQuestionType>>;
export declare const WithPillLabel: StoryObj<typeof QuestionListItem<BaseQuestionType>>;
export declare const NoActionsWithCustomPill: StoryObj<typeof QuestionListItem<BaseQuestionType>>;
export declare const WithIndex: StoryObj<typeof QuestionListItem<BaseQuestionType>>;
export declare const SortableQuestionList: StoryObj;
