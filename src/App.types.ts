export type FormFieldNameAndValueArray = [string, FormDataEntryValue][];

export interface Validation {
    isValid: boolean,
    errors: string[],
}

export interface StateOnBlur extends Validation {
    rawData: string,
    formattedData: string,
}