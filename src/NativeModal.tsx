import React from "react";
import { StyleDialog, StyledModalContent } from "./App.styled";

export const NativeModal = (props: any) => {

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

                <div>x</div>
                <article>
                    <p>
                        Here goes some message.
                    </p>
                </article>

            </StyleDialog>
            :
            null
    )
}