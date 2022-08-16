export type FormFieldNameAndValueArray = [string, FormDataEntryValue][];

export interface FieldState extends Validation, Format {
}

export interface Validation {
    isValid: boolean | undefined,
    errors: string[],
}

export interface Format {
    value: string,
    isFormatted: boolean
}

export interface LoadingStarsState {
    isLoading: boolean,
}

export interface FetchingState {
    values: string[],
    isFetching: boolean,
}

export interface AutoValidateInputType {
    validate: ((value: string) => Validation)[];
    formatTo?: (value: string) => Format;
    formatFrom?: (formattedValue: string) => string;
    observe?: (inputValue: string) => void
}

export interface ModalState {
    isModalVisible: boolean,
}

export interface State {
    reducerA: FetchingState,
    reducerB: ModalState,
    reducerC: LoadingStarsState
}