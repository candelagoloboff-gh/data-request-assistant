import { type AvatarProps } from '../../../design-system/Avatar';
export type FileIconProps = AvatarProps & {
    file: {
        type?: string | null;
        extension?: string | null;
    };
};
