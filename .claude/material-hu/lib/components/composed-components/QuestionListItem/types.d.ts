import { type ItemComponentProps } from '../SortableList/types';
import { type PillsProps } from '../../design-system/Pills/types';
export type BaseQuestionType = {
    id: number;
    statement: string;
};
export type ItemAction = {
    name: string;
    onClick: () => void;
    icon: React.ReactNode;
};
export type SlotProps = {
    pill?: Omit<PillsProps, 'label'>;
};
export type QuestionListItemProps<TQuestion extends BaseQuestionType> = ItemComponentProps<TQuestion> & {
    actions?: ItemAction[];
    pillLabel?: string;
    getTypeDescription?: (question: TQuestion) => string;
    slotProps?: SlotProps;
    showIndex?: boolean;
};
