import React from "react";
import { StyleDialog, StyledModalContent } from "./App.styled";
import { Color, Background, Creator } from "./App.types";

export const NativeModal = (props: {
    creator: Creator;
    isModalVisible: boolean;
    color: Color;
    background: Background;
    dispatchToggleModalVisibility: () => void;
}) => {

    const ref = React.useRef<HTMLDialogElement>(null);


    React.useEffect(() => {
        if (ref.current && props.creator[1] === "native") {
            ref.current.showModal();
        }
    }, [ref, props.isModalVisible])


    return (
        props.isModalVisible
            ?
            <StyleDialog
                ref={ref}
                colorOption={props.color}
                backgroundOption={props.background}
                onClick={() => props.dispatchToggleModalVisibility()}
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

            </StyleDialog>
            :
            null
    )
}