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

export function getConfirmButton(props: any) {
    switch (props.confirmButton[1]) {
        case "confirm":
            return props.dispatchConfirm()
        case "save":
            return props.dispatchSave()
        case "confirmAndClose":
            return props.dispatchConfirmAndClose()
        default:
            return console.log("Confirm button clicked!")
    }
}

export function getCancelButton(props: any) {
    switch (props.cancelButton[1]) {
        case "cancel":
            return props.dispatchCancel()
        case "clear":
            return props.dispatchClear()
        case "cancelAndClose":
            return props.dispatchCancelAndClose()
        default:
            return console.log("Cancel button clicked!")
    }
}

export function getXbutton(props: any) {
    switch (props.xButton[1]) {
        case "close":
            return props.dispatchClose()
        case "cancelX":
            return props.dispatchCancelX()
        case "confirmX":
            return props.dispatchConfirmX()
        default:
            return console.log("X button clicked!")
    }
}
