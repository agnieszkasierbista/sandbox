import styled from "styled-components";

export const StyledInput = styled.input<{isEmpty?: boolean}>`
  outline: 4px solid red;
  background-color: ${(props) => props.isEmpty ? "red" : "blue"};
`;

export const StyledTextInput = styled.input<{}>`

`;

export const StyledAutoValidateInput = styled.div`
    
`;
