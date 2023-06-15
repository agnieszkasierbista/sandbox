import {Meta, StoryObj} from "@storybook/react";
import {AutoValidateInput} from "../components/AutoValidateInput/AutoValidateInput";
import {
    validateIfInputContainsAtLeastOneLowercaseLetter,
    validateIfInputContainsAtLeastOneNumber,
    validateIfInputContainsAtLeastOneSpecialCharacter,
    validateIfInputContainsAtLeastOneUppercaseLetter,
    validateIfInputContainsOnlyNumbers,
    validateInputContentContainsAbcLowerCase,
    validateInputLengthEquals16,
    validateInputLengthEquals5
} from "../components/helpers/validators";
import {
    formatFromCreditCardNumber,
    formatFromPostalCode,
    formatToCreditCardNumber,
    formatToPostalCode
} from "../components/helpers/formatters";

const validatingFunctions = {
    validateIfInputContainsAtLeastOneLowercaseLetter,
    validateIfInputContainsAtLeastOneNumber,
    validateIfInputContainsAtLeastOneSpecialCharacter,
    validateIfInputContainsAtLeastOneUppercaseLetter,
    validateIfInputContainsOnlyNumbers,
    validateInputLengthEquals16,
    validateInputLengthEquals5,
    validateInputContentContainsAbcLowerCase
}

const formattingFunctions = {
    formatToPostalCode,
    formatToCreditCardNumber
}

const reformattingFunctions = {
    formatFromPostalCode,
    formatFromCreditCardNumber
}

const meta: Meta<typeof AutoValidateInput> = {
    title: 'AutoValidateInput',
    component: AutoValidateInput,
    tags: ['autodocs'],
    argTypes: {
        validate: {
            description: "Validating functions",
            options: Object.values(validatingFunctions), // An array of serializable values
            mapping: validatingFunctions, // Maps serializable option values to complex arg values
            control: {
                type: 'check', // Type 'select' is automatically inferred when 'options' is defined
                labels: {
                    [validateIfInputContainsAtLeastOneLowercaseLetter.toString()]: "At Least One Lowercase Letter",
                    [validateIfInputContainsAtLeastOneNumber.toString()]: "At Least One Number",
                    [validateIfInputContainsAtLeastOneSpecialCharacter.toString()]: "At Least One Special Character ",
                    [validateIfInputContainsAtLeastOneUppercaseLetter.toString()]: "At Least One Uppercase Letter",
                    [validateIfInputContainsOnlyNumbers.toString()]: "Only Numbers",
                    [validateInputLengthEquals16.toString()]: "Length Equals 16",
                    [validateInputLengthEquals5.toString()]: "Length Equals 5",
                    [validateInputContentContainsAbcLowerCase.toString()]: "ContainsAbcLowerCase"
                }
            },
            table: {
                type: { summary: 'check' },
                defaultValue: { summary: 'At Least One Lowercase Letter' },
            },
        },
        formatTo: {
            description: "Validating functions",
            options: Object.keys(formattingFunctions), // An array of serializable values
            mapping: formattingFunctions, // Maps serializable option values to complex arg values
            control: {
                type: 'select', // Type 'select' is automatically inferred when 'options' is defined
                labels: {
                    // 'labels' maps option values to string labels
                    formatToPostalCode: 'formatToPostalCode',
                    formatToCreditCardNumber: 'formatToCreditCardNumber',
                }
            }
        },
        formatFrom: {
            description: "Validating functions",
            options: Object.keys(reformattingFunctions), // An array of serializable values
            mapping: reformattingFunctions, // Maps serializable option values to complex arg values
            control: {
                type: 'select', // Type 'select' is automatically inferred when 'options' is defined
                labels: {
                    // 'labels' maps option values to string labels
                    formatFromPostalCode: 'formatFromPostalCode',
                    formatFromCreditCardNumber: 'formatFromCreditCardNumber'
                }
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof AutoValidateInput>;

export const Basic: Story = {
    args: {
        validate: [validateIfInputContainsAtLeastOneLowercaseLetter],
    },
}
//
//  export const PostalCodeValidatorAndFormatter: Story = {
//     args: {
//         validate: [validateInputLengthEquals5, validateIfInputContainsOnlyNumbers],
//         formatTo: formatToPostalCode,
//         formatFrom: formatFromPostalCode,
//     },
// };
//
//  export const CreditCardNumberValidatorAndFormatter: Story = {
//     args: {
//         validate: [validateInputLengthEquals16, validateIfInputContainsOnlyNumbers],
//         formatTo: formatToCreditCardNumber,
//         formatFrom: formatFromCreditCardNumber,
//     },
// };


