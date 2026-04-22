import { IconBrandYoutube, IconListCheck, IconNotes, IconPuzzle, IconTemplate, } from '@tabler/icons-react';
import { TaskTypes } from './types';
export const TASKS_ICONS = {
    [TaskTypes.BLANK]: IconTemplate,
    [TaskTypes.TASK]: IconTemplate,
    [TaskTypes.NEW]: IconTemplate,
    [TaskTypes.VIDEO]: IconBrandYoutube,
    [TaskTypes.READING]: IconNotes,
    [TaskTypes.EVALUATION]: IconListCheck,
    [TaskTypes.SCORM]: IconPuzzle,
};
