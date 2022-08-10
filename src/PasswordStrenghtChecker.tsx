import { StyledPasswordStrengthChecker, StyledSecurityRating } from "./App.styled"
import { Validation } from "./App.types"
import { AutoValidateInput } from "./AutoValidateInput"

export const PasswordStrengthChecker = (props: { validate: ((inputValue: string) => Validation)[] }) => {
    return (
        <StyledPasswordStrengthChecker>
            <AutoValidateInput
                validate={props.validate}
                formatTo={(a) => ({ value: a, isFormatted: true })}
                formatFrom={(a) => a}
            />
            <StyledSecurityRating>
//stąd gwiazdki wyszli
            </StyledSecurityRating>
        </StyledPasswordStrengthChecker>
    )
}