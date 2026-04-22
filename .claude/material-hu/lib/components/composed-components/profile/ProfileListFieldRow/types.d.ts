import { type Texts } from '../useProfileDataDrawer/types';
export type ProfileListFieldRowProps = {
    field: {
        name: string;
        value: string[];
    };
    texts: Texts;
};
