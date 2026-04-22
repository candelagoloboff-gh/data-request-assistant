import { type DecoratorType } from '../Decorator/types';
export type StatItemProps = {
    type: DecoratorType;
    title: string;
    value: React.ReactNode;
    differenceIndicator?: React.ReactNode;
};
