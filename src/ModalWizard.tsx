import React from "react";
import { StyledCustomizableModal as StyledModalWizard, StyledFieldset, StyledFormForWizard, StyledSection } from "./App.styled"


//@ts-ignore
function handleSubmit(payload, updateFunc, toggleFunc) {

    updateFunc(payload);
    toggleFunc();

}

export const ModalWizard = (props: any) => {

    const [isHidden, setIsHidden] = React.useState(true);

    return (
        <StyledModalWizard>
            <StyledFormForWizard 
            name="modalWizard"
            onSubmit={(event) => {

                event.preventDefault();
                event.stopPropagation();

                const formData = new FormData(event.currentTarget);
                const formEntries = Array.from(formData.entries());

                handleSubmit(formEntries, props.dispatchUpdateWizardValues, props.dispatchToggleModalVisibility);

            }}
            >
            <StyledFieldset id="modalCustomizer">
                <legend>Modal window customizer:</legend>
            <section>
                <h2>Choose your background:</h2>
                <input type="checkbox" name="modalBackground" value="transparent" id="transparent" />
                <label htmlFor="transparent">Transparent</label><br />
                <input type="checkbox" name="modalBackground" value="blured" id="blured" />
                <label htmlFor="blured">Blur</label><br />
                <input type="checkbox" name="modalBackground" value="colored" id="colored" onChange={() => setIsHidden(prev => !prev)}/>
                <label htmlFor="colored">Color</label><br />
            </section>

            <StyledSection id="colors" isHidden={isHidden}>
                <h2>Choose your color:</h2>
                <input type="radio" name="modalColor" value="blue" id="blue" />
                <label htmlFor="blue">Blue</label><br />
                <input type="radio" name="modalColor" value="yellow" id="yellow" />
                <label htmlFor="yellow">Yellow</label><br />
                <input type="radio" name="modalColor" value="green" id="green" />
                <label htmlFor="green">Green</label><br />
            </StyledSection>

            <section>
                <h2>Choose your creator:</h2>
                <input type="radio" name="modalCreator" value="portal" id="portal" />
                <label htmlFor="portal">Protal</label><br />
                <input type="radio" name="modalCreator" value="native" id="native" />
                <label htmlFor="native">Native</label><br />
                <input type="radio" name="modalCreator" value="custom" id="custom" />
                <label htmlFor="custom">Custom</label><br />
            </section>

            <button type="submit">Create modal!</button>
            </StyledFieldset>
            </StyledFormForWizard>
        </StyledModalWizard>
    )
}