import React from 'react';
import "./App.css";

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


function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    console.log(Array.from(formData.entries()))
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


function App() {

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <fieldset id="personals" name="Personals">
                    <legend>Personalia:</legend>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" name="name"/>
                    <label htmlFor="sName">Second name:</label>
                    <input id="sName" type="text" name="sName"/>
                </fieldset>
                <fieldset id="favouriteMusic">
                    <legend>My music:</legend>
                    <input type="checkbox" id="rap" value="rap" name="rap" hidden/>
                    <label htmlFor="rap">B-rrrap</label>
                    <input type="checkbox" id="techno" value="techno" name="techno"/>
                    <label htmlFor="techno">Umc-umc</label>
                    <input type="checkbox" id="romantic" value="romantic" name="romantic"/>
                    <label htmlFor="romantic">La-lala</label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
