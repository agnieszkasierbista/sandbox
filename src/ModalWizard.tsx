import { is } from "ramda";
import React from "react";
import { StyledCustomizableModal as StyledModalWizard, StyledFieldset, StyledFormForWizard, StyledRange, StyledSectionBlurs, StyledSectionColors } from "./App.styled"
import { FormFieldNameAndValueArray } from "./App.types";



function handleSubmit(payload: FormFieldNameAndValueArray, updateFunc: (values: FormFieldNameAndValueArray) => {
    type: string;
    payload: FormFieldNameAndValueArray;
}, toggleFunc: () => void) {

    updateFunc(payload);
    toggleFunc();

}

export const ModalWizard = (props: {
    dispatchUpdateWizardValues: (values: FormFieldNameAndValueArray) => {
        type: string;
        payload: FormFieldNameAndValueArray;
    };
    dispatchToggleModalVisibility: () => void;
}) => {

    const [isHidden, setIsHidden] = React.useState({ color: true, blur: true, manual: true });

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
                        <input
                            type="checkbox"
                            name="modalBackground"
                            value="blured"
                            id="blured"
                            onChange={() => setIsHidden((prev) => { return { ...prev, blur: !prev.blur } })} />
                        <label htmlFor="blured">Blur</label><br />
                        <input
                            type="checkbox"
                            name="modalBackground"
                            value="colored"
                            id="colored"
                            onChange={() => setIsHidden((prev) => { return { ...prev, color: !prev.color } })} />
                        <label htmlFor="colored">Color</label><br />
                    </section>

                    <StyledSectionColors id="colors" isHidden={isHidden.color}>
                        <h2>Choose your color:</h2>
                        <input type="radio" name="modalColor" value="blue" id="blue" />
                        <label htmlFor="blue">Blue</label><br />
                        <input type="radio" name="modalColor" value="yellow" id="yellow" />
                        <label htmlFor="yellow">Yellow</label><br />
                        <input type="radio" name="modalColor" value="green" id="green" />
                        <label htmlFor="green">Green</label><br />
                    </StyledSectionColors>

                    <StyledSectionBlurs id="blurs" isHidden={isHidden.blur}>
                        <h2>Choose your blur intensity:</h2>
                        <input
                            type="radio"
                            name="modalBlur"
                            value="light"
                            id="light"
                            disabled={!isHidden.manual} />
                        <label htmlFor="light">Light</label><br />
                        <input
                            type="radio"
                            name="modalBlur"
                            value="medium"
                            id="medium"
                            disabled={!isHidden.manual} />
                        <label htmlFor="medium">Medium</label><br />
                        <input
                            type="radio"
                            name="modalBlur"
                            value="strong"
                            id="strong"
                            disabled={!isHidden.manual} />
                        <label htmlFor="strong">Strong</label><br />
                        <input
                            type="checkbox"
                            name="modalBlur"
                            value="manual"
                            id="manual"
                            onChange={() => setIsHidden((prev) => { return { ...prev, manual: !prev.manual } })}
                        />
                        <label htmlFor="manual">Manual</label><br />
                        <StyledRange id="picker" isHidden={isHidden}>
                            <label htmlFor="range">Choose your custom value between 1 and 10: </label><br />
                            <input type="range" name="modalBlur" id="range" min="1" max="10" defaultValue={5}/>
                        </StyledRange>

                    </StyledSectionBlurs>

                    <section>
                        <h2>Choose your creator:</h2>
                        <input type="radio" name="modalCreator" value="portal" id="portal" />
                        <label htmlFor="portal">Protal</label><br />
                        <input type="radio" name="modalCreator" value="native" id="native" />
                        <label htmlFor="native">Native</label><br />
                        <input type="radio" name="modalCreator" value="custom" id="custom" />
                        <label htmlFor="custom">Custom</label><br />
                    </section>

                    <section>
                        <h2>Choose your action for X button:</h2>
                        <input type="radio" name="actionForX" value="close" id="close" />
                        <label htmlFor="close">Close</label><br />
                        <input type="radio" name="actionForX" value="cancelX" id="cancelX" />
                        <label htmlFor="cancelX">Cancel</label><br />
                        <input type="radio" name="actionForX" value="confirmX" id="confirmX" />
                        <label htmlFor="confirmX">Confirm</label><br />
                    </section>

                    <section>
                        <h2>Choose your action for Cancel:</h2>
                        <input type="radio" name="actionForCancel" value="cancel" id="cancel" />
                        <label htmlFor="cancel">Cancel</label><br />
                        <input type="radio" name="actionForCancel" value="clear" id="clear" />
                        <label htmlFor="clear">Clear selection</label><br />
                        <input type="radio" name="actionForCancel" value="cancelAndClose" id="cancelAndClose" />
                        <label htmlFor="cancelAndClose">Cancel and Close</label><br />
                    </section>

                    <section>
                        <h2>Choose your action Confirm:</h2>
                        <input type="radio" name="actionForConfirm" value="confirm" id="confirm" />
                        <label htmlFor="confirm">Confirm</label><br />
                        <input type="radio" name="actionForConfirm" value="save" id="save" />
                        <label htmlFor="save">Save selection</label><br />
                        <input type="radio" name="actionForConfirm" value="confirmAndClose" id="confirmAndClose" />
                        <label htmlFor="confirmAndClose">Confirm and Close</label><br />
                    </section>

                    <button id="createModal" type="submit">Create modal!</button>
                </StyledFieldset>
            </StyledFormForWizard>
        </StyledModalWizard>
    )
}