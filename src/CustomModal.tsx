import { StyledModalContent, StyledOverlay } from "./App.styled"

export const CustomModal = (props: any) => {
    return (
        props.isModalVisible && props.creator[1] === "custom"
            ?
            <div>
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
            null
    )
}