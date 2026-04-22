import { type IconInterface } from '../../../../types/icons';
export declare enum TaskTypes {
    NEW = "NEW",
    TASK = "TASK",
    VIDEO = "VIDEO",
    READING = "READING",
    EVALUATION = "EVALUATION",
    BLANK = "LESSON",
    SCORM = "SCORM"
}
export type Task = {
    id: number;
    title: string;
    type: TaskTypes;
};
export type Module = {
    id: number;
    title: string;
    icon: IconInterface;
    tasks: Task[];
};
export type ModuleAccordionProps = {
    module?: Module;
    loading?: boolean;
};
