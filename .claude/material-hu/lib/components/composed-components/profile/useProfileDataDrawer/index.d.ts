import { type Texts } from './types';
declare const useProfileDataDrawer: (field: {
    name: string;
    value: string[] | string | number;
}, texts: Texts) => {
    openDrawer: (args?: import("../../../layers/Drawers/types").DrawerLevel["config"]) => void;
    closeDrawer: (immediate?: boolean) => void;
};
export default useProfileDataDrawer;
