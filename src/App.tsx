import React from 'react';
import "./App.css";
import {StyledInput, StyledTextInput} from './App.styled';

// type FormData = [string, FormDataEntryValue][];

function findEmptyFields(data: [string, FormDataEntryValue][]): string[] {

    const emptyFields = data.filter(field => {
        const fieldValue = field[1];

        if (typeof fieldValue === "string") {
            return fieldValue.length === 0
        }
    })

    return emptyFields.map(emptyField => emptyField[0])

}

function validate(data: [string, FormDataEntryValue][]): boolean {

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

    if (validate(Array.from(formData.entries()))) {
        fetch('https://localhost:8080/abc').then((res) => {
            console.log('res', res)
        }).catch((err) => {
            console.log('err', err)
        })
    } else {

        alert("Wrong data!");
    }
}

function handleOnBlur(inputValue: string) {
    if (inputValue.length > 0 && inputValue.length < 6) {
        return {
            isValid: true,
            errors: []
        }
    } else {
        return {
            isValid: false,
            errors: ["The input has wrong length! Try to fit between one and six characters!"]
        }
    }
}

function App() {

    //2 możliwe rozwiazania podkreslenia niewypełnionych pol na czerwono - hooki ref i set state
    const reference = React.useRef<HTMLFormElement>(null);

    const [state, setState] = React.useState<string[]>([]);
    const [stateOnBlur, setStateOnBlur] = React.useState();

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

                <StyledTextInput
                    type="text"
                    onBlur={(event) => {
                        //@ts-ignore
                        setStateOnBlur(handleOnBlur(event.target.value));
                    }}
                />

                <p>
                    {
                        //@ts-ignore
                        stateOnBlur && stateOnBlur.errors
                    }
                </p>

                <button type="submit">Submit</button>
                <div>{state}</div>
            </form>
        </div>
    );
}

export default App;
