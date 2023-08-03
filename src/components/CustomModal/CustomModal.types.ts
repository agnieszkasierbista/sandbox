export type Color = ["modalColor", string];
export type Blur = ["modalBlur", string, "modalBlur", string];
export type Background = ["modalBackground", string][];
export type Creator = ["modalCreator", string];
export type XButton = ["actionForX", string];
export type CancelButton = ["actionForCancel", string];
export type ConfirmButton = ["actionForConfirm", string];

export interface CustomModalProps {
    isModalVisible: boolean;
    creator: Creator;
    dispatchToggleModalVisibility: () => void;
    color: Color;
    background: Background;
    blur: Blur;
    xButton: XButton;
    dispatchClose: () => void;
    dispatchCancelX: () => void;
    dispatchConfirmX: () => void;
    cancelButton: CancelButton;
    dispatchCancel: () => void;
    dispatchClear: () => void;
    dispatchCancelAndClose: () => void;
    confirmButton: ConfirmButton;
    dispatchConfirm: () => void;
    dispatchSave: () => void;
    dispatchConfirmAndClose: () => void;
}