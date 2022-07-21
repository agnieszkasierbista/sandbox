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