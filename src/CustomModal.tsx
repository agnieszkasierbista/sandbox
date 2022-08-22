import FocusTrap from 'focus-trap-react';
import { StyledModalContent, StyledOverlay } from "./App.styled";
import { getCancelButton, getConfirmButton, getXbutton } from './helpers';

export const CustomModal = (props: any) => {
    return (
        props.isModalVisible && props.creator[1] === "custom"
            ?
            <FocusTrap>
                <StyledOverlay
                    id="overlay"
                    onClick={() => props.dispatchToggleModalVisibility()}
                    colorOption={props.color}
                    backgroundOption={props.background}>

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