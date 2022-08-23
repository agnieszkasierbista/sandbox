import FocusTrap from 'focus-trap-react';
import React from 'react';
import { StyledModalContent, StyledOverlay } from "./App.styled";
import { useScrollBlocking } from './customHooks';
import { getCancelButton, getConfirmButton, getXbutton } from './helpers';

export const CustomModal = (props: any) => {

    useScrollBlocking(props.isModalVisible);


    return (
        props.isModalVisible && props.creator[1] === "custom"
            ?
            <FocusTrap>
                <StyledOverlay
                    id="overlay"
                    onClick={() => props.dispatchToggleModalVisibility()}
                    colorOption={props.color}
                    backgroundOption={props.background}
                    blurOption={props.blur}>

                    <StyledModalContent
                        id="customModal"
                    >
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
                    </StyledModalContent>
                </StyledOverlay>
            </FocusTrap >
            :
            null
    )
};