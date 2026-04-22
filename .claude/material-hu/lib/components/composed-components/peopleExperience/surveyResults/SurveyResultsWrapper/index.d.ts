import { type StackProps } from '@mui/material/Stack';
type ResultsWrapperProps = Omit<StackProps, 'children' | 'ref'> & {
    children: React.ReactNode;
    title: string;
};
declare const ResultsWrapper: ({ children, title, ...props }: ResultsWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default ResultsWrapper;
