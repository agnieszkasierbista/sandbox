import React from 'react';
import {AutoValidateInputType, FieldState} from "../App/App.types";
import { StyledAutoValidateInput, StyledTextInput } from './AutoValidateInput.styled';

export const AutoValidateInput: React.FC<AutoValidateInputType> = props => {

    const [fieldState, setFieldState] = React.useState<FieldState>({
        isValid: undefined,
        value: "",
        errors: [],
        isFormatted: false
    });

    return (
        <StyledAutoValidateInput>
            <StyledTextInput
                isValid={fieldState?.isValid}
                type="text"
                value={fieldState?.value || ""}
                onChange={(evt) => {
                    props.observe?.(evt.target.value);
                    // console.log("state on change", fieldState);
                    setFieldState((prev) => {
                        return {
                            ...prev,
                            value: evt.target.value || ""
                        };
                    });
                }}
                onBlur={(event) => {
                    const evtValue = event.target.value;
                    const validationResult = props.validate.find((validatingFunction) => validatingFunction(evtValue).isValid === false)?.(evtValue);
                    const postValidationState = (validationResult || {isValid: true, errors: []});
                    setFieldState((prev) => ({
                        ...prev,
                        ...postValidationState,
                        ...(postValidationState.isValid ? props.formatTo?.(evtValue) : {})
                    }));
                    // console.log("state on blur", fieldState);

                }}
                onFocus={() => {
                    // console.log("state on focus", fieldState);

                    if (fieldState.value && fieldState.isFormatted) {
                        setFieldState(
                            {
                                ...fieldState,
                                value: (fieldState.isFormatted ? props.formatFrom?.(fieldState.value) || "" : fieldState.value),
                                isFormatted: false
                            });
                    }
                }}/>

            <p>
                {fieldState && fieldState.errors}
            </p>
        </StyledAutoValidateInput>
    );
};
