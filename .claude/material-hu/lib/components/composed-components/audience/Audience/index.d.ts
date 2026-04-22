import { type DefaultItemType } from '../../ConditionLine/types';
import { type AudienceProps } from './types';
declare const Audience: <FieldItemType extends DefaultItemType = DefaultItemType, ValueItemType extends DefaultItemType = DefaultItemType>({ title, description, segmentationDrawerProps, individualDrawerProps, selectedCollaboratorsDrawerProps, getSegmentationDescription, getIndividualDescription, useCount, onBeforeDelete, slotProps, sx, }: AudienceProps<FieldItemType, ValueItemType>) => import("react/jsx-runtime").JSX.Element;
export default Audience;
