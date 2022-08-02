import { FormFieldNameAndValueArray } from "./App.types";

export function findEmptyFields(data: FormFieldNameAndValueArray): string[] {

    const emptyFields = data.filter(field => {
        const fieldValue = field[1];

        if (typeof fieldValue === "string") {
            return fieldValue.length === 0;
        }
    });

    return emptyFields.map(emptyField => emptyField[0]);

}
export function isString(data: FormFieldNameAndValueArray): boolean {

    const isAString = data.find(entry => {
        const entryValue = entry[1];

        if (typeof entryValue === "string") {
            return entryValue.length > 0;
        }
    });

    return !!isAString;
}
