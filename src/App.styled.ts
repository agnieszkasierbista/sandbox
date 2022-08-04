import styled, { keyframes, css } from "styled-components";

export const StyledInput = styled.input<{ isEmpty?: boolean }>`
  outline: 4px solid red;
  background-color: ${(props) => props.isEmpty ? "red" : "blue"};
`;

export const StyledAutoValidateInput = styled.div<{}>`

`;

export const StyledTextInput = styled.input<{ isValid: boolean | undefined }>`
  outline: ${(props) => props.isValid === false ? "4px solid red" : ""};
`;

export const StyledTextInputForDropdown = styled.input`
  position: relative;
  outline: 2px solid green;
`;

export const StyledDropdownContent = styled.div<{ isVisible: boolean }>`
  position: absolute;
  visibility: ${(props) => props.isVisible === false ? "hidden" : "visible"};
  border: 1px solid black;
  background-color: aquamarine;
  width: 100%;
  //top: 30px;
  //left: 0;
  
`;

export const StyledDropdownContainer = styled.ul`
  margin: 0;
  padding: 0;


`;

export const StyledDropdownListElement = styled.li`
  list-style-type: none;
`;

export const StyledDropdownElement = styled.button`
    
`;

export const StyledCustomDropdown = styled.div`
  display: inline-block;
  position: relative;
`;


const spin = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(180deg)
  }
`;

const anim = css`animation: ${(props: { isSpinning: boolean }) => props.isSpinning ? css`${spin} 2s linear infinite` : null};`

export const StyledSpinner = styled.div<{ isSpinning: boolean }>`
  display: inline-block;
  vertical-align: middle;
  height: 30px;
  width: 30px;
  background-color: blue;
  ${anim}
`;

