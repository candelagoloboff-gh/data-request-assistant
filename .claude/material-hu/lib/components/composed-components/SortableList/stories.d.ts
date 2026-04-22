import { type Meta, type StoryObj } from '@storybook/react-vite';
import { type BaseSortableItem } from './types';
import SortableList from '.';
type SimpleItem = BaseSortableItem & {
    title: string;
};
type FormItem = BaseSortableItem & {
    title: string;
    description: string;
    email: string;
};
declare const meta: Meta<typeof SortableList>;
export default meta;
export declare const VerticalList: StoryObj<typeof SortableList<SimpleItem>>;
export declare const VerticalListWithHandle: StoryObj<typeof SortableList<SimpleItem>>;
export declare const HorizontalList: StoryObj<typeof SortableList<SimpleItem>>;
export declare const HorizontalListWithHandle: StoryObj<typeof SortableList<SimpleItem>>;
export declare const VerticalFormList: StoryObj<typeof SortableList<FormItem>>;
export declare const HorizontalFormList: StoryObj<typeof SortableList<FormItem>>;
