import React, { useState } from 'react';
import {
    StyledCustomDropdown,
    StyledDropdownContainer,
    StyledDropdownContent,
    StyledDropdownElement,
    StyledDropdownListElement, StyledTextInputForDropdown
} from './App.styled';

export const CustomDropdown: React.FC<any> = props => {

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
            onBlur={() => setDropdownState({ ...dropdownState, isVisible: false })}
            tabIndex={0}
        >
            <StyledTextInputForDropdown
                type="text"
                name="dropdown"
                value={inputState.value}
                onChange={(event) => {
                    console.log("value", event.target.value);
                    if (event.target.value.length <= 1) {
                        setDropdownState({ ...dropdownState, isVisible: false });
                        setInputState({ value: event.target.value });
                    } else {
                        setInputState({ ...dropdownState, value: event.target.value });

                        setTimeout(() => setDropdownState({ ...dropdownState, isVisible: true }), 1000);

                        props.dispatchSetDropdownContent();
                    }
                }} />
            <StyledDropdownContent
                isVisible={dropdownState.isVisible}
            >
                <StyledDropdownContainer>
                    {dropdownState.dropdownContents
                        .filter((cellData) => cellData.includes(inputState.value))
                        .map((cellData, idx) => {
                            return (
                                <StyledDropdownListElement key={idx}>
                                    <StyledDropdownElement
                                        onMouseDown={() => {
                                            setInputState({ ...inputState, value: cellData });
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
