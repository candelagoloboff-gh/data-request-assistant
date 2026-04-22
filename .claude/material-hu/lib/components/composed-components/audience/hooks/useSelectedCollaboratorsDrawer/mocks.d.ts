import { type SelectedCollaboratorsDrawerContentProps } from './types';
type MockServiceOptions = {
    delay?: number;
    empty?: boolean;
};
export declare const createMockService: ({ delay, empty, }?: MockServiceOptions) => SelectedCollaboratorsDrawerContentProps["service"];
export {};
