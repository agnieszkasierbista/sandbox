import { StyledSpinner } from "./App.styled"

export const Spinner = (props: {isSpinning: boolean}) => {
    return (
        <StyledSpinner isSpinning={props.isSpinning}></StyledSpinner>
    )
}