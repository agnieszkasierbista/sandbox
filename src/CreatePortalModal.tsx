import { getConfirmButton, getCancelButton, getXbutton } from "./helpers";
import React from "react";
import ReactDOM from "react-dom";
import { StyledModalContent, StyledOverlay } from "./App.styled";
import { Color, Background, Creator, XButton, CancelButton, ConfirmButton, Blur } from "./App.types";
import FocusTrap from 'focus-trap-react';
import { useScrollBlocking } from "./customHooks";

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

    forXButton?: Function;
    forConfirmButton?: Function;
    forCancelButton?: Function;

    xButton: XButton;
    cancelButton: CancelButton;
    confirmButton: ConfirmButton;
    dispatchToggleModalVisibility: () => void;
    color: Color;
    blur: Blur;
    background: Background;
    isModalVisible: boolean,
    creator: Creator
}) => {

    console.log("props", props)

    useScrollBlocking(props.isModalVisible);

    return ReactDOM.createPortal((
        props.isModalVisible && props.creator[1] === "portal"
            ?

            <FocusTrap id="portal">
                <StyledOverlay
                    onClick={() => props.dispatchToggleModalVisibility()}
                    colorOption={props.color}
                    backgroundOption={props.background}
                    blurOption={props.blur}>

                    <StyledModalContent

                    >
                        {props.forXButton && props.forCancelButton && props.forConfirmButton
                            ?
                            <div>JEST OK

                                <button
                                    onClick={() => props.forXButton}
                                >x</button>
                                <article>
                                    <p>
                                        Here goes some message.
                                    </p>
                                    <button
                                        onClick={() => props.forCancelButton}

                                    >Cancel</button>
                                    <button
                                        onClick={() => props.forConfirmButton}

                                    >Confirm</button>
                                </article>

                            </div>
                            :
                            (
                                <>
                                    <button
                                        onClick={() => getXbutton(props)}
                                    >x</button>
                                    <article>
                                        <p>
                                            Here goes some message.
                                        </p>
                                        <button
                                            onClick={() => getCancelButton(props)}

                                        >Cancel</button>
                                        <button
                                            onClick={() => getConfirmButton(props)}

                                        >Confirm</button>
                                    </article>
                                </>
                            )}
                    </StyledModalContent>
                </StyledOverlay>
            </FocusTrap >
            :
            null
    ), document.body);
}


