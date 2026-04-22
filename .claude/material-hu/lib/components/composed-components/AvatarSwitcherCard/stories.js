import { jsx as _jsx } from "react/jsx-runtime";
import { IconDoor, IconSettings } from '@tabler/icons-react';
import AvatarSwitcherCard from './index';
const meta = {
    component: AvatarSwitcherCard,
    title: 'Composed Components/Cards/AvatarSwitcherCard',
    tags: ['autodocs'],
    args: {
        title: 'Onboarding',
        description: 'Crea procesos para darle la bienvenida a tus colaboradores.',
        icon: IconDoor,
        checked: false,
        pills: [
            {
                label: 'New',
                type: 'success',
                hasIcon: false,
            },
            {
                label: 'Beta',
                type: 'highlight',
                hasIcon: false,
            },
        ],
        actions: [
            {
                children: _jsx(IconSettings, {}),
                onClick: () => alert('Settings'),
            },
        ],
        onChange: (checked) => {
            // eslint-disable-next-line no-console
            console.log('Switcher changed:', checked);
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
