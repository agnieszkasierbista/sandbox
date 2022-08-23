import FocusTrap from 'focus-trap-react';
import React from 'react';
import { StyledModalContent, StyledOverlay } from "./App.styled";
import { Color, Background, Blur, Creator, CancelButton, ConfirmButton, XButton } from './App.types';
import { useScrollBlocking } from './customHooks';
import { getCancelButton, getConfirmButton, getXbutton } from './helpers';

export const CustomModal = (props: {
    isModalVisible: boolean;
    creator: Creator;
    dispatchToggleModalVisibility: () => void;
    color: Color;
    background: Background;
    blur: Blur;
    xButton: XButton;
    dispatchClose: () => void;
    dispatchCancelX: () => void;
    dispatchConfirmX: () => void;
    cancelButton: CancelButton;
    dispatchCancel: () => void;
    dispatchClear: () => void;
    dispatchCancelAndClose: () => void;
    confirmButton: ConfirmButton;
    dispatchConfirm: () => void;
    dispatchSave: () => void;
    dispatchConfirmAndClose: () => void;
}) => {

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
                            onClick={() => getXbutton(props.xButton, props.dispatchClose, props.dispatchCancelX, props.dispatchConfirmX)}
                        >x</button>
                        <article>
                            <p>
                                Here goes some message.
                            </p>
                            <button
                                onClick={() => getCancelButton(props.cancelButton, props.dispatchCancel, props.dispatchClear, props.dispatchCancelAndClose)}

                            >Cancel</button>
                            <button
                                onClick={() => getConfirmButton(props.confirmButton, props.dispatchConfirm, props.dispatchSave, props.dispatchConfirmAndClose)}

                            >Confirm</button>
                        </article>
                    </StyledModalContent>
                </StyledOverlay>
            </FocusTrap >
            :
            null
    )
};