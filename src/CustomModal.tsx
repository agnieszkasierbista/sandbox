import { StyledModalContent, StyledOverlay } from "./App.styled"

export const CustomModal = (props: any) => {
    return (
        props.isModalVisible 
        ?
        <div>
            <StyledOverlay onClick={() => props.dispatchToggleModalVisibility()}>

            <StyledModalContent>
                <div>x</div>
                <article>
                    <p>
                        Here goes some message.
                    </p>
                </article>
            </StyledModalContent>
            </StyledOverlay>
        </div>
        :
        null
    )
}