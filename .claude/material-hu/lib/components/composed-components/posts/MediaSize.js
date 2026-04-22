import { jsx as _jsx } from "react/jsx-runtime";
import { useFormContext } from 'react-hook-form';
import { Typography } from '@mui/material';
import { sumBy } from 'lodash';
import { bytesToMB, megabytesToGB } from '../../../utils/bytes';
export const MediaSize = ({ maxInMB = 100 }) => {
    const form = useFormContext();
    const { media, files } = form.watch();
    const size = Math.ceil(bytesToMB(sumBy([...media, ...files], f => f.file?.size || f.attachment.bytes)));
    const maxInGB = Math.ceil(megabytesToGB(maxInMB));
    const sizeInGB = Math.ceil(megabytesToGB(size));
    return (!!size && (_jsx(Typography, { variant: "globalS", sx: { color: ({ palette }) => palette.new.text.neutral.lighter }, children: maxInMB > 1024 ? `${sizeInGB}/${maxInGB}GB` : `${size}/${maxInMB}MB` })));
};
export default MediaSize;
