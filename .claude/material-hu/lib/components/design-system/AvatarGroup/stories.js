import ImgAvatar1 from '../../../../static/avatar1.png';
import AvatarGroup from '.';
const meta = {
    component: AvatarGroup,
    title: 'Design System/Avatars/AvatarGroup',
    tags: ['autodocs'],
    args: {
        avatars: [
            { src: ImgAvatar1, alt: 'Avatar Alt' },
            {
                src: 'https://example.com/nonexistent-image.png',
                alt: 'Avatar Alt',
                text: 'OP',
                color: 'success',
            },
            {
                src: 'https://example.com/nonexistent-image.png',
                alt: 'Avatar Alt',
                color: 'error',
            },
            { src: '', alt: '' },
            { src: '', alt: '' },
        ],
    },
};
export default meta;
export const Default = { args: {} };
export const CustomTotalAvatars = {
    args: {
        totalAvatars: 2000,
    },
};
