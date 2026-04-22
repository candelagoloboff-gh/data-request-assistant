import { type CompleteFile } from '../../../types/attachments';
import { type CardContainerProps } from '../../design-system/CardContainer/types';
export type PostProps = {
    profilePicture?: string;
    fullName: string;
    body: string;
    publicationDatetime: string;
    sx?: CardContainerProps['sx'];
    actions?: {
        onEdit?: () => void;
        onDelete?: () => void;
    };
    media?: CompleteFile[];
    files?: CompleteFile[];
};
