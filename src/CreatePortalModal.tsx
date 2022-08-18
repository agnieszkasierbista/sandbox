import React from "react";
import ReactDOM from "react-dom";
import { StyledModalContent, StyledOverlay } from "./App.styled";
import { Color, Background, Creator } from "./App.types";

export const CreatePortalModal = (props: { dispatchToggleModalVisibility: () => void; color: Color; background: Background; isModalVisible: boolean, creator: Creator }) => {
    return ReactDOM.createPortal((
        props.isModalVisible && props.creator[1] === "portal"
            ?

            <div id="portal">
                <StyledOverlay
                    onClick={() => props.dispatchToggleModalVisibility()}
                    colorOption={props.color}
                    backgroundOption={props.background}>

                    <StyledModalContent

                    >
                        <div>x</div>
                        <article>
                            <p>
                                Here goes some message.
                            </p>
                        </article>
                    </StyledModalContent>
                </StyledOverlay>
            </div >
            :
            <div>mmm</div>
    ), document.body);
}


