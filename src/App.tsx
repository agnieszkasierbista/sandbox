import React from 'react';
import "./App.css";
import {StyledAutoValidateInput, StyledInput, StyledTextInput} from './App.styled';

type FormFieldNameAndValueArray = [string, FormDataEntryValue][];

function findEmptyFields(data: FormFieldNameAndValueArray): string[] {

    const emptyFields = data.filter(field => {
        const fieldValue = field[1];

        if (typeof fieldValue === "string") {
            return fieldValue.length === 0
        }
    })

    return emptyFields.map(emptyField => emptyField[0])

}

function validate(data: FormFieldNameAndValueArray): boolean {

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

function validateInputLength(inputValue: string) {
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

function validateInputContent(inputValue: string) {
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

interface StateOnBlur {
    isValid: boolean,
    errors: string[],
}

interface Dfs extends StateOnBlur {
    rawData: string,
    formattedData: string,
}

function formatting(inputValue: string): string {
    if (inputValue.length === 5) {
        return "xx-xxx";
    } else {
        return "No good";
    }
}

const AutoValidateInput: React.FC<{ handleOnBlur: (value: string) => StateOnBlur }> = props => {

    const [stateOnBlur, setStateOnBlur] = React.useState<Dfs>();

    return (
        <StyledAutoValidateInput>
            <StyledTextInput
                isValid={stateOnBlur?.isValid}
                type="text"
                value={stateOnBlur?.formattedData || ""}
                onChange={(evt) => {
                    //@ts-ignore
                    setStateOnBlur((prev) => {
                       return {
                           ...prev,
                           rawData: evt.target.value || "",
                           formattedData: evt.target.value || ""
                       }
                    })
                }}
                onBlur={(event) => {
                    const evtValue = event.target.value;
                    const targetOnBlur = props.handleOnBlur(evtValue);
                    setStateOnBlur({...targetOnBlur, rawData: evtValue, formattedData: evtValue});
                }}
            />

            <p>
                {
                    stateOnBlur && stateOnBlur.errors
                }
                {stateOnBlur && formatting(stateOnBlur.rawData)}
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

                <AutoValidateInput handleOnBlur={validateInputLength}/>
                <AutoValidateInput handleOnBlur={validateInputContent}/>

                <button type="submit">Submit</button>
                <div>{state}</div>
            </form>
        </div>
    );
}

export default App;
