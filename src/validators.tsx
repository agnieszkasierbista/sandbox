import { Validation } from "./App.types";

export function validateInputLengthEquals5(inputValue: string): Validation {
    if (inputValue.length === 5) {
        return {
            isValid: true,
            errors: []
        };
    } else {
        return {
            isValid: false,
            errors: ["The input has wrong length! Type exactly 5 characters!"]
        };
    }
}
export function validateInputLengthEquals16(inputValue: string): Validation {
    if (inputValue.length === 16) {
        return {
            isValid: true,
            errors: []
        };
    } else {
        return {
            isValid: false,
            errors: ["The input has wrong length! Type exactly 16 numbers!"]
        };
    }
}
function validateInputContentContainsAbcLowerCase(inputValue: string): Validation {
    if (inputValue.includes("abc")) {
        return {
            isValid: true,
            errors: []
        };
    } else {
        return {
            isValid: false,
            errors: ["You must type a word containing abc in this field!"]
        };
    }

}
export function validateIfInputContainsOnlyNumbers(inputValue: string): Validation {
    if (inputValue.match(/[A-Za-z]+/)) {
        console.log("Bang!");
        return {
            isValid: false,
            errors: ["You must type numbers only!"]
        };
    } else {
        return {
            isValid: true,
            errors: []
        };
    }

}
