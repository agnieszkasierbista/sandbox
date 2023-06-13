import styled from "styled-components";

export const StyledAccordeon = styled.div`
  padding: 20px;
  background-color: cornflowerblue;
  border: 2px solid navy;
  color: black;
  width: 700px;
`;

export const StyledAccordeonHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: deepskyblue;
  border: 2px dashed gray;
`;

export const StyledAccordeonContent = styled.div<{ isExpanded: boolean }>`
  padding: 20px;
  overflow-y: auto;
  backround-color: mediumvioletred;
  border: 2px dotted purple;
  height: ${(props) => props.isExpanded ? "350px" : "20px"};
  transition: height 1s;
`;

export const StyledAccordeonHeaderContent = styled.div`
  display: inline-block;

`;
export const StyledChevron = styled.img<{ isExpanded: boolean }>`
  display: inline-block;
  transform: rotate(${props => props.isExpanded ? "180deg" : 0});
  transition: transform 1s;
`;