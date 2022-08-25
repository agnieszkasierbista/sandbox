import React, {useState} from 'react';
import {
    StyledCustomDropdown,
    StyledDropdownContainer,
    StyledDropdownContent,
    StyledDropdownElement,
    StyledDropdownListElement,
    StyledTextInputForDropdown
} from '../App/App.styled';

export const CustomDropdown: React.FC<{ values: string[], dispatchSetDropdownContent: () => void }> = props => {

    const [dropdownState, setDropdownState] = useState({
        isVisible: false,
        dropdownContents: ["aaa", "aaab", "aaabbb", "bbbccc", "bbbddd", "cccddd", "ccctttt", "bbb", "bbbbeee"],
        value: ""
    });

    const [inputState, setInputState] = useState({
        value: ""
    });

    return (
        <StyledCustomDropdown
            onBlur={() => setDropdownState({...dropdownState, isVisible: false})}
            tabIndex={0}
        >
            <StyledTextInputForDropdown
                type="text"
                name="dropdown"
                autoComplete='off'
                value={inputState.value}
                onChange={(event) => {
                    // console.log("value", event.target.value);
                    if (event.target.value.length <= 1) {
                        setDropdownState({...dropdownState, isVisible: false});
                        setInputState({value: event.target.value});
                    } else {
                        setInputState({...dropdownState, value: event.target.value});

                        setTimeout(() => setDropdownState({...dropdownState, isVisible: true}), 1000);

                        props.dispatchSetDropdownContent();
                    }
                }}
            />
            <StyledDropdownContent
                isVisible={dropdownState.isVisible}
            >
                <StyledDropdownContainer>
                    {props.values
                        .filter((cellData) => cellData.includes(inputState.value))
                        .map((cellData, idx) => {
                            return (
                                <StyledDropdownListElement key={idx}>
                                    <StyledDropdownElement
                                        onMouseDown={() => {
                                            setInputState({...inputState, value: cellData});
                                        }}>
                                        {cellData}
                                    </StyledDropdownElement>
                                </StyledDropdownListElement>
                            );
                        })}
                </StyledDropdownContainer>
            </StyledDropdownContent>
        </StyledCustomDropdown>
    );
};
