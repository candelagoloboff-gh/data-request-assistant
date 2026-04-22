import { jsx as _jsx } from "react/jsx-runtime";
import Title from '../../../../design-system/Title';
import ContentSwitcher from './index';
export default {
    title: 'Composed Components/peopleExperience/ContentSwitcher',
    component: ContentSwitcher,
};
const options = [
    {
        id: 'dimensions',
        label: 'Dimensions',
        content: (_jsx(Title, { title: "Dimensions", description: "Content goes here" })),
    },
    {
        id: 'questions',
        label: 'Questions',
        content: (_jsx(Title, { title: "Questions", description: "Content goes here" })),
    },
];
export const Default = (args) => (_jsx(ContentSwitcher, { ...args }));
Default.args = {
    title: 'Survey Sections',
    options,
};
