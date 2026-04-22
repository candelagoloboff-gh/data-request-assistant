import { type SelectInstanceDrawerProps } from '../components/SelectInstanceDrawerContent';
type DrawerProps = SelectInstanceDrawerProps & {
    onClose?: () => void;
};
declare const useSelectIntanceDrawer: (props: DrawerProps) => {
    drawer: import("react/jsx-runtime").JSX.Element;
    showDrawer: (props: Partial<unknown>) => void;
    closeDrawer: () => void;
};
export default useSelectIntanceDrawer;
