export type FormFieldNameAndValueArray = [string, FormDataEntryValue][];

export interface Validation {
    isValid: boolean | undefined,
    errors: string[],
}

export interface FieldState extends Validation {
    value: string,
}