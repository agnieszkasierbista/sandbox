import React from "react";
import ReactDOM from "react-dom";
import { StyledModalContent, StyledOverlay } from "./App.styled";
import { Color, Background, Creator } from "./App.types";
import FocusTrap from 'focus-trap-react';


export const CreatePortalModal = (props: { dispatchToggleModalVisibility: () => void; color: Color; background: Background; isModalVisible: boolean, creator: Creator }) => {
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
                            onClick={() => console.log("X")}
                        >x</button>
                        <article>
                            <p>
                                Here goes some message.
                            </p>
                            <button
                                onClick={() => console.log("Cancel")}

                            >Cancel</button>
                            <button
                                onClick={() => console.log("Confirm")}

                            >Confirm</button>
                        </article>
                    </StyledModalContent>
                </StyledOverlay>
            </FocusTrap >
            :
            null
    ), document.body);
}


