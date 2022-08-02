import { Format } from "./App.types";

export function formatToPostalCode(inputValue: string): Format {
    return {
        value: inputValue.slice(0, 2) + "-" + inputValue.slice(2, 5),
        isFormatted: true
    };
}
export function formatFromPostalCode(formattedValue: string): string {
    return formattedValue.slice(0, 2) + formattedValue.slice(3, 6);
}
export function formatToCreditCardNumber(inputValue: string): Format {
    return {
        value: inputValue.slice(0, 4) + "-" + inputValue.slice(4, 8) + "-" + inputValue.slice(8, 12) + "-" + inputValue.slice(12, 16),
        isFormatted: true
    };
}
export function formatFromCreditCardNumber(formattedValue: string): string {
    return formattedValue.slice(0, 4) + formattedValue.slice(5, 9) + formattedValue.slice(10, 14) + formattedValue.slice(15, 19);
}
