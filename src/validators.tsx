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
        // console.log("Bang!");
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
export function validateIfInputContainsAtLeastOneUppercaseLetter(inputValue: string): Validation {
    if (inputValue.match(/[A-Z]+/)) {
        return {
            isValid: true,
            errors: []
        };
    } else {
        return {
            isValid: false,
            errors: ["Your password must contain at least one uppercase letter!"]
        }
    }
}

export function validateIfInputContainsAtLeastOneLowercaseLetter(inputValue: string): Validation {
    if (inputValue.match(/[a-z]+/)) {
        return {
            isValid: true,
            errors: []
        };
    } else {
        return {
            isValid: false,
            errors: ["Your password must contain at least one lowercase letter!"]
        }
    }
}

export function validateIfInputContainsAtLeastOneNumber(inputValue: string): Validation {
    if (inputValue.match(/[0-9]+/)) {
        return {
            isValid: true,
            errors: []
        };
    } else {
        return {
            isValid: false,
            errors: ["Your password must contain at least one number!"]
        }
    }
}

export function validateIfInputContainsAtLeastOneSpecialCharacter(inputValue: string): Validation {
    if (inputValue.match(/[.,!@#$%]+/)) {
        return {
            isValid: true,
            errors: []
        };
    } else {
        return {
            isValid: false,
            errors: ["Your password must contain at least one special character from .,!@#$% !"]
        }
    }
}
