import React from "react";
import ReactDOM from "react-dom";
import { StyledModalContent, StyledOverlay } from "./App.styled";
import { Color, Background, Creator, XButton, CancelButton, ConfirmButton } from "./App.types";
import FocusTrap from 'focus-trap-react';


export const CreatePortalModal = (props: {
    dispatchCancelAndClose: () => void;
    dispatchConfirm: () => void;
    dispatchSave: () => void;
    dispatchConfirmAndClose: () => void;
    dispatchClear: () => void;
    dispatchCancel: () => void;
    dispatchClose: () => void;
    dispatchCancelX: () => void;
    dispatchConfirmX: () => void;

    xButton: XButton;
    cancelButton: CancelButton;
    confirmButton: ConfirmButton;
    dispatchToggleModalVisibility: () => void;
    color: Color;
    background: Background;
    isModalVisible: boolean,
    creator: Creator
}) => {

    console.log("props", props)

    function getXbutton() {
        switch (props.xButton[1]) {
            case "close":
                return props.dispatchClose()
            case "cancelX":
                return props.dispatchCancelX()
            case "confirmX":
                return props.dispatchConfirmX()
            default:
                return console.log("X button clicked!")
        }
    };


    function getCancelButton() {
        switch (props.cancelButton[1]) {
            case "cancel":
                return props.dispatchCancel()
            case "clear":
                return props.dispatchClear()
            case "cancelAndClose":
                return props.dispatchCancelAndClose()
            default:
                return console.log("Cancel button clicked!")
        }
    };


    function getConfirmButton() {
        switch (props.confirmButton[1]) {
            case "confirm":
                return props.dispatchConfirm()
            case "save":
                return props.dispatchSave()
            case "confirmAndClose":
                return props.dispatchConfirmAndClose()
            default:
                return console.log("Confirm button clicked!")
        }
    };

    return ReactDOM.createPortal((
        props.isModalVisible && props.creator[1] === "portal"
            ?

            <FocusTrap id="portal">
                <StyledOverlay
                    onClick={() => props.dispatchToggleModalVisibility()}
                    colorOption={props.color}
                    backgroundOption={props.background}>

                    <StyledModalContent

                    >
                        <button
                            onClick={() => getXbutton()}
                        >x</button>
                        <article>
                            <p>
                                Here goes some message.
                            </p>
                            <button
                                onClick={() => getCancelButton()}

                            >Cancel</button>
                            <button
                                onClick={() => getConfirmButton()}

                            >Confirm</button>
                        </article>
                    </StyledModalContent>
                </StyledOverlay>
            </FocusTrap >
            :
            null
    ), document.body);
}


