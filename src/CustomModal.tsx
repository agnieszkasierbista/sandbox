import FocusTrap from 'focus-trap-react';
import { StyledModalContent, StyledOverlay } from "./App.styled";

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
    )
};