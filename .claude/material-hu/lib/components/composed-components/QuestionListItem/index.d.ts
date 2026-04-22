import { type BaseQuestionType, type QuestionListItemProps } from './types';
declare const QuestionListItem: <TQuestion extends BaseQuestionType>({ item: question, dragHandleButton, actions, pillLabel, slotProps: receivedSlotProps, getTypeDescription, showIndex, index, }: QuestionListItemProps<TQuestion>) => import("react/jsx-runtime").JSX.Element;
export default QuestionListItem;
