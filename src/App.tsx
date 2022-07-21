import React from 'react';
import "./App.css";
import {StyledAutoValidateInput, StyledInput, StyledTextInput} from './App.styled';
import {FieldState, Validation, FormFieldNameAndValueArray, Format} from "./App.types";
import {compose} from 'ramda';


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
                    const postValidationState = (validationResult || {isValid: true, errors: []});
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
                                value: (fieldState.isFormatted ? props.formatFrom(fieldState.value) : fieldState.value)
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

function App() {

    //2 możliwe rozwiazania podkreslenia niewypełnionych pol na czerwono - hooki ref i set state
    const reference = React.useRef<HTMLFormElement>(null);

    const [state, setState] = React.useState<string[]>([]);

    return (
        <div>
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
                    <StyledInput id="name" type="text" name="name" isEmpty={state.includes("name")}/>
                    <label htmlFor="sName">Second name:</label>
                    <StyledInput id="sName" type="text" name="sName" isEmpty={state.includes("sName")}/>
                </fieldset>
                <fieldset id="favouriteMusic">
                    <legend>My music:</legend>
                    <StyledInput type="checkbox" id="rap" value="rap" name="rap" hidden
                                 isEmpty={state.includes("rap")}/>
                    <label htmlFor="rap">B-rrrap</label>
                    <StyledInput type="checkbox" id="techno" value="techno" name="techno"
                                 isEmpty={state.includes("techno")}/>
                    <label htmlFor="techno">Umc-umc</label>
                    <StyledInput type="checkbox" id="romantic" value="romantic" name="romantic"
                                 isEmpty={state.includes("romantic")}/>
                    <label htmlFor="romantic">La-lala</label>
                </fieldset>

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

                <button type="submit">Submit</button>
                <div>{state}</div>
            </form>
        </div>
    );
}

export default App;
