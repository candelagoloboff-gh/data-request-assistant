type Props = {
    type: 'Microsoft' | 'Google' | 'Okta';
    onClick: () => void;
};
declare const SSOButton: ({ type, onClick }: Props) => import("react/jsx-runtime").JSX.Element;
export default SSOButton;
