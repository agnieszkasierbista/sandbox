import React from 'react';
import "./App.css";

function App() {
    return (
        <div>
            <form onSubmit={(event) => {
                const formData = new FormData(event.currentTarget);
                event.preventDefault();
                console.log(Array.from(formData.entries()))
            }}>
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
                {/*// pobranie wartosci formularza - evt.preventDefault()*/}
            </form>
        </div>
    );
}

export default App;
