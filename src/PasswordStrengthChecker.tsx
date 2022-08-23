import React from "react"
import { StyledColoredStar, StyledPasswordStrengthChecker, StyledSecurityRating, StyledStar } from "./App.styled"
import { Validation } from "./App.types"
import { AutoValidateInput } from "./AutoValidateInput"

export const PasswordStrengthChecker = (props: { validate: ((inputValue: string) => Validation)[] }) => {

    const starsCount = props.validate.length;
    const starsArray: number[] = new Array(starsCount).fill(0);

    const [state, setState] = React.useState({
        inputValue: "",
        validationResults: [] as Validation[],
        starsArray: starsArray
    })


    const star = <StyledColoredStar validationResults={state.validationResults} src="/pictures/star.png" />;
    const emptyStar = <StyledStar src="/pictures/star_empty.png" />;

    function validateOnTheFly(inputValue: string) {

        const passedValidations = props.validate?.filter((validationFunction) => validationFunction(state.inputValue).isValid === true)
        const arrayOfPassedValidationsResults: Validation[] = passedValidations.map((item) => {
            return item(state.inputValue)
        })

        setState((prev) => {
            const updatedArray = prev.starsArray.map((item, idx) => {
                if (idx <= arrayOfPassedValidationsResults.length - 1) {
                    return 1
                } else {
                    return 0
                }
            });
            return {
                ...prev,
                starsArray: updatedArray,
                validationResults: arrayOfPassedValidationsResults
            }
        })

        return arrayOfPassedValidationsResults
    }

    React.useEffect(() => {
        validateOnTheFly(state.inputValue);
    }, [state.inputValue])


    return (
        <StyledPasswordStrengthChecker>
            <AutoValidateInput
                validate={props.validate}
               
                observe={(inputValue: string) => {
                    setState((prev) => {
                        return { ...prev, inputValue: inputValue }
                    });
                }}
            />
            <StyledSecurityRating>
                {
                    state.starsArray.map(((item, idx) =>
                        item % 2
                            ? <div key={"a" + idx}>{star}</div>
                            : <div key={"ab" + item + idx}>{emptyStar}</div>))
                }
            </StyledSecurityRating>
        </StyledPasswordStrengthChecker>
    );
}