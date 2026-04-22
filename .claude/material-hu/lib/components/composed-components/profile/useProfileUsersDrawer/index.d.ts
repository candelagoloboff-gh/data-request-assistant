import { type Texts, type User } from './types';
declare const useProfileUsersDrawer: (field: {
    name: string;
    value: User[];
}, texts: Texts) => {
    openDrawer: (args?: import("../../../layers/Drawers/types").DrawerLevel["config"]) => void;
    closeDrawer: (immediate?: boolean) => void;
};
export default useProfileUsersDrawer;
