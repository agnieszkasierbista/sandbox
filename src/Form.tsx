import React from 'react';
import "./App.css";
import {
    StyledInput
} from './App.styled';
import { validateInputLengthEquals5, validateIfInputContainsOnlyNumbers, validateInputLengthEquals16, validateIfInputContainsAtLeastOneUppercaseLetter, validateIfInputContainsAtLeastOneLowercaseLetter, validateIfInputContainsAtLeastOneNumber, validateIfInputContainsAtLeastOneSpecialCharacter } from "./validators";
import { formatToPostalCode, formatFromPostalCode, formatToCreditCardNumber, formatFromCreditCardNumber } from './formatters';
import { AutoValidateInput } from './AutoValidateInput';
import { CustomDropdown } from './CustomDropdown';
import { findEmptyFields, isString } from './helpers';
import { Spinner } from './spinner';
import { PasswordStrengthChecker } from './PasswordStrenghtChecker';


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

function Form(props: any) {

    const reference = React.useRef<HTMLFormElement>(null);

    const [state, setState] = React.useState<string[]>([]);

    return (<>
        <form ref={reference}
            onSubmit={(event) => {
                // console.log(reference.current);
                const formData = new FormData(event.currentTarget);
                // console.log(reference.current && Array.from(new FormData(reference.current).entries()));
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
                <CustomDropdown
                    dispatchSetDropdownContent={props.dispatchSetDropdownContent}
                    values={props.values} />
                <Spinner isSpinning={props.isFetching} />
            </fieldset>
            <fieldset id="passwordChecker">
                <legend>Check your password strenght!</legend>
                <PasswordStrengthChecker
                    validate={[validateIfInputContainsAtLeastOneUppercaseLetter, 
                        validateIfInputContainsAtLeastOneLowercaseLetter, 
                        validateIfInputContainsAtLeastOneNumber, 
                        validateIfInputContainsAtLeastOneSpecialCharacter]}
                />
            </fieldset>


            <button type="submit">Submit</button>
            <div>{state}</div>
        </form>
    </>
    );
}

export default Form;
