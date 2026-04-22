import { IconType } from '../../../types/icons';
export const DEMO_OPTIONS = [
    {
        id: 1,
        name: 'Star',
        source: 'https://cdn-icons-png.flaticon.com/128/1828/1828884.png',
    },
    {
        id: 2,
        name: 'Heart',
        source: 'https://cdn-icons-png.flaticon.com/128/833/833472.png',
    },
    {
        id: 3,
        name: 'Flag',
        source: 'https://cdn-icons-png.flaticon.com/128/3909/3909124.png',
    },
    {
        id: 4,
        name: 'Rocket',
        source: 'https://cdn-icons-png.flaticon.com/128/3480/3480719.png',
    },
    {
        id: 5,
        name: 'Lightning',
        source: 'https://cdn-icons-png.flaticon.com/128/1146/1146869.png',
    },
    {
        id: 6,
        name: 'Trophy',
        source: 'https://cdn-icons-png.flaticon.com/128/548/548481.png',
    },
];
export const DEFAULT_VALUE = {
    value: DEMO_OPTIONS[0].source,
    type: IconType.IMAGE,
};
export const EMOJI_DEFAULT_VALUE = {
    value: '🚀',
    type: IconType.EMOJI,
};
export const DEMO_TEXT = {
    iconsTab: 'Icons',
    emojisTab: 'Emojis',
    cropTitle: 'Crop icon',
    cropSave: 'Save',
    cropCancel: 'Cancel',
};
export const SPANISH_TEXT = {
    iconsTab: 'Íconos',
    emojisTab: 'Emojis',
    cropTitle: 'Recortar ícono',
    cropSave: 'Guardar',
    cropCancel: 'Cancelar',
};
