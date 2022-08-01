import React, { useState } from 'react';
import "./App.css";
import {
    StyledAutoValidateInput,
    StyledCustomDropdown,
    StyledDropdownContainer,
    StyledDropdownContent,
    StyledDropdownElement,
    StyledDropdownListElement,
    StyledInput,
    StyledTextInput,
    StyledTextInputForDropdown
} from './App.styled';
import { FieldState, Validation, FormFieldNameAndValueArray, Format } from "./App.types";
import { compose, is } from 'ramda';
import { Provider } from 'react-redux';
import store from "./store";


function findEmptyFields(data: FormFieldNameAndValueArray): string[] {

    const emptyFields = data.filter(field => {
        const fieldValue = field[1];

        if (typeof fieldValue === "string") {
            return fieldValue.length === 0
        }
    })

    return emptyFields.map(emptyField => emptyField[0])

}

function isString(data: FormFieldNameAndValueArray): boolean {

    const isAString = data.find(entry => {
        const entryValue = entry[1];

        if (typeof entryValue === "string") {
            return entryValue.length > 0
        }
    })

    return !!isAString;
}


function handleSubmit(event: React.FormEvent<HTMLFormElement>, formData: FormData) {

    event.preventDefault();
    console.log("all form data", Array.from(formData.entries()))
    console.log("EMPTY", findEmptyFields(Array.from(formData.entries())))

    if (isString(Array.from(formData.entries()))) {
        fetch('https://localhost:8080/abc').then((res) => {
            console.log('res', res)
        }).catch((err) => {
            console.log('err', err)
        })
    } else {

        alert("Wrong data!");
    }
}

function validateInputLengthEquals5(inputValue: string): Validation {
    if (inputValue.length === 5) {
        return {
            isValid: true,
            errors: []
        }
    } else {
        return {
            isValid: false,
            errors: ["The input has wrong length! Type exactly 5 characters!"]
        }
    }
}

function validateInputLengthEquals16(inputValue: string): Validation {
    if (inputValue.length === 16) {
        return {
            isValid: true,
            errors: []
        }
    } else {
        return {
            isValid: false,
            errors: ["The input has wrong length! Type exactly 16 numbers!"]
        }
    }
}

function validateInputContentContainsAbcLowerCase(inputValue: string): Validation {
    if (inputValue.includes("abc")) {
        return {
            isValid: true,
            errors: []
        }
    } else {
        return {
            isValid: false,
            errors: ["You must type a word containing abc in this field!"]
        }
    }

}

function validateIfInputContainsOnlyNumbers(inputValue: string): Validation {
    if (inputValue.match(/[A-Za-z]+/)) {
        console.log("Bang!")
        return {
            isValid: false,
            errors: ["You must type numbers only!"]
        }
    } else {
        return {
            isValid: true,
            errors: []
        }
    }

}

function formatToPostalCode(inputValue: string): Format {
    return {
        value: inputValue.slice(0, 2) + "-" + inputValue.slice(2, 5),
        isFormatted: true
    }
}

function formatFromPostalCode(formattedValue: string): string {
    return formattedValue.slice(0, 2) + formattedValue.slice(3, 6)
}

function formatToCreditCardNumber(inputValue: string): Format {
    return {
        value: inputValue.slice(0, 4) + "-" + inputValue.slice(4, 8) + "-" + inputValue.slice(8, 12) + "-" + inputValue.slice(12, 16),
        isFormatted: true
    }
}

function formatFromCreditCardNumber(formattedValue: string): string {
    return formattedValue.slice(0, 4) + formattedValue.slice(5, 9) + formattedValue.slice(10, 14) + formattedValue.slice(15, 19)
}

const AutoValidateInput: React.FC<{
    validate: ((value: string) => Validation)[],
    formatTo: (value: string) => Format,
    formatFrom: (formattedValue: string) => string
}> = props => {

    const [fieldState, setFieldState] = React.useState<FieldState>({
        isValid: undefined,
        value: "",
        errors: [],
        isFormatted: false
    });

    return (
        <StyledAutoValidateInput>
            <StyledTextInput
                isValid={fieldState?.isValid}
                type="text"
                value={fieldState?.value || ""}
                onChange={(evt) => {
                    console.log("state on change", fieldState);
                    setFieldState((prev) => {
                        return {
                            ...prev,
                            value: evt.target.value || ""
                        }
                    })
                }}
                onBlur={(event) => {
                    const evtValue = event.target.value;
                    const validationResult = props.validate.find((validatingFunction) => validatingFunction(evtValue).isValid === false)?.(evtValue);
                    const postValidationState = (validationResult || { isValid: true, errors: [] });
                    setFieldState((prev) => ({
                        ...prev,
                        ...postValidationState,
                        ...(postValidationState.isValid ? props.formatTo(evtValue) : {})

                    }));
                    console.log("state on blur", fieldState);

                }}
                onFocus={() => {
                    console.log("state on focus", fieldState);

                    if (fieldState.value && fieldState.isFormatted) {
                        setFieldState(
                            {
                                ...fieldState,
                                value: (fieldState.isFormatted ? props.formatFrom(fieldState.value) : fieldState.value),
                                isFormatted: false
                            })
                    }
                }}
            />

            <p>
                {
                    fieldState && fieldState.errors
                }
            </p>
        </StyledAutoValidateInput>
    )
};

const CustomDropdown: React.FC<any> = props => {

    const [dropdownState, setDropdownState] = useState({
        isVisible: false,
        dropdownContents: ["aaa", "aaab", "aaabbb", "bbbccc", "bbbddd", "cccddd", "ccctttt", "bbb", "bbbbeee"],
        value: ""
    });

    const [inputState, setInputState] = useState({
        value: ""
    });

    return (
        <StyledCustomDropdown
            onBlur={() => setDropdownState({ ...dropdownState, isVisible: false })}
            tabIndex={0}
        >
            <StyledTextInputForDropdown
                type="text"
                name="dropdown"
                value={inputState.value}
                onChange={(event) => {
                    console.log("value", event.target.value);
                    if (event.target.value.length <= 1) {
                        setDropdownState({ ...dropdownState, isVisible: false })
                        setInputState({ value: event.target.value })
                    } else {
                        setInputState({ ...dropdownState, value: event.target.value })

                        setTimeout(() => setDropdownState({ ...dropdownState, isVisible: true }), 1000)

                        props.dispatchSetDropdownContent();
                    }
                }}

            />
            <StyledDropdownContent
                isVisible={dropdownState.isVisible}
            >
                <StyledDropdownContainer>
                    {
                        dropdownState.dropdownContents
                            .filter((cellData) => cellData.includes(inputState.value))
                            .map((cellData, idx) => {
                                return (
                                    <StyledDropdownListElement key={idx}>
                                        <StyledDropdownElement
                                            onMouseDown={() => {
                                                setInputState({ ...inputState, value: cellData });
                                            }}>
                                            {cellData}
                                        </StyledDropdownElement>
                                    </StyledDropdownListElement>
                                )
                            })
                    }
                </StyledDropdownContainer>
            </StyledDropdownContent>
        </StyledCustomDropdown>
    )
}

function App(props: any) {

    //2 możliwe rozwiazania podkreslenia niewypełnionych pol na czerwono - hooki ref i set state
    const reference = React.useRef<HTMLFormElement>(null);

    const [state, setState] = React.useState<string[]>([]);

    return (
        <form ref={reference}
            onSubmit={(event) => {
                console.log(reference.current);
                const formData = new FormData(event.currentTarget);
                console.log(reference.current && Array.from(new FormData(reference.current).entries()));
                handleSubmit(event, formData);
                setState(findEmptyFields(Array.from(formData.entries())));
            }}>
            <fieldset id="personals" name="Personals">
                <legend>Personalia:</legend>
                <label htmlFor="name">Name:</label>
                <StyledInput id="name" type="text" name="name" isEmpty={state.includes("name")} />
                <label htmlFor="sName">Second name:</label>
                <StyledInput id="sName" type="text" name="sName" isEmpty={state.includes("sName")} />
            </fieldset>
            <fieldset id="favouriteMusic">
                <legend>My music:</legend>
                <StyledInput type="checkbox" id="rap" value="rap" name="rap" hidden
                    isEmpty={state.includes("rap")} />
                <label htmlFor="rap">B-rrrap</label>
                <StyledInput type="checkbox" id="techno" value="techno" name="techno"
                    isEmpty={state.includes("techno")} />
                <label htmlFor="techno">Umc-umc</label>
                <StyledInput type="checkbox" id="romantic" value="romantic" name="romantic"
                    isEmpty={state.includes("romantic")} />
                <label htmlFor="romantic">La-lala</label>
            </fieldset>
            <fieldset id="autovalidationGroup">
                <legend>My numbers:</legend>
                <AutoValidateInput
                    validate={[validateInputLengthEquals5]}
                    formatTo={formatToPostalCode}
                    formatFrom={formatFromPostalCode}
                />
                <AutoValidateInput
                    validate={[validateIfInputContainsOnlyNumbers, validateInputLengthEquals5]}
                    formatTo={formatToPostalCode}
                    formatFrom={formatFromPostalCode}
                />

                <AutoValidateInput
                    validate={[validateIfInputContainsOnlyNumbers, validateInputLengthEquals16]}
                    formatTo={formatToCreditCardNumber}
                    formatFrom={formatFromCreditCardNumber}
                />
            </fieldset>
            <fieldset id="dropdowns">
                <legend>My dropdown:</legend>
                <CustomDropdown dispatchSetDropdownContent={props.dispatchSetDropdownContent} />
            </fieldset>


            <button type="submit">Submit</button>
            <div>{state}</div>
        </form>
    );
}

export default App;
