import { type LinearProgressProps, type StackProps } from '@mui/material';
export type LinearProgressWithLabelProps = StackProps & {
    value: LinearProgressProps['value'];
    linearProgressProps?: LinearProgressProps;
};
declare const LinearProgressWithLabel: ({ linearProgressProps, value, ...other }: LinearProgressWithLabelProps) => import("react/jsx-runtime").JSX.Element;
export default LinearProgressWithLabel;
