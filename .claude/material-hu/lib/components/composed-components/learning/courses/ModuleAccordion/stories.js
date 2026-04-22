import { IconType } from '../../../../../types/icons';
import { TaskTypes } from '../types';
import ModuleAccordion from '.';
const meta = {
    component: ModuleAccordion,
    title: 'Composed Components/Learning/Courses/ModuleAccordion',
    tags: ['autodocs'],
    args: {
        module: {
            id: 1,
            title: 'Un modulo de prueba',
            icon: {
                value: '😀',
                type: IconType.EMOJI,
            },
            tasks: Object.values(TaskTypes).map((taskType, index) => ({
                id: index,
                type: taskType,
                title: `Lección de tipo ${taskType}`,
            })),
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Loading = {
    args: {
        loading: true,
    },
};
