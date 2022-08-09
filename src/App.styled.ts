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

export const StyledCarouselContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: skyblue;
`;

export const StyledArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ArrowButton = styled.img`
  height: 45px;
  width: 45px;
`;

export const StyledCarousel = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: yellow;
  flex: 8 0;
  height: 400px;
  width: 400px;
`;

const move = (x1: number, x2: number) => keyframes`
  from {
    transform: translateX(${x1}%)
  }

  to {
    transform: translateX(${x2}%)
  }
`;

export const StyledCarouselChild = styled.div<{ counter: number, direction: string }>`
  flex-shrink: 0;
  background-color: green;
  height: 100%;
  width: 100%;
  animation: ${props => props.direction && move(
  (props.counter - (props.direction === "right" ? 1 : -1)) * -100,
  (props.counter - (props.direction === "right" ? 0 : 0)) * -100
)} 1s ease;
  animation-fill-mode: forwards;
`;

export const StyledCarouselNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  flex-basis: 100%;
  padding: 5px;
  `;

export const StyledPaginationItem = styled.div<{ isActive: boolean }>`
  background-color: ${props => props.isActive ? "red" : "orange"};
  border: ${props => props.isActive ? "2px solid black" : "1px solid gray"};
  border-radius: 5px;
  padding: 8px 16px;
  margin: 2px 2px;
`;

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  background-color: aqua;
  width: min-content;
  height: 100%;

`;

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

export const StyledAccordeonContent = styled.div<{isExpanded: boolean}>`
  padding: 20px;
  overflow-y: auto;
  backround-color: mediumvioletred;
  border: 2px dotted purple;
  height: ${(props) => props.isExpanded? "350px" : "20px"};
  transition: height 1s;
`;

export const StyledAccordeonHearedContent = styled.div`
  display: inline-block;

`;
export const StyledChevron = styled.img<{isExpanded: boolean}>`
  display: inline-block;
  transform: rotate(${props => props.isExpanded ? "180deg" : 0});
  transition: transform 1s;
`;

export const StyledLoader = styled.div<{isLoading: boolean}>`
    display: inline-block;
    height: 20px;
    width: 80%;
    border: 2px solid gray;
    border-radius: 10px;

`;

export const StyledLoadingStars = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 80%;
    border: 2px solid gray;
    border-radius: 10px; 
`;

export const StyledStar = styled.img`
    display: inline-block;
`;