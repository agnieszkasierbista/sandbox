import styled, { keyframes, css } from "styled-components";
import { Validation } from "./App.types";
import { Link } from "react-router-dom";

export const StyledForm = styled.form`
  width: 80%;
`;

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
  padding: 5px;
  background-color: aqua;
  width: min-content;
  height: 100%;

`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    margin-top: 2px;
    padding: 6px 8px;
    border: 1px solid navy;
    border-radius: 5px;
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

export const StyledAccordeonContent = styled.div<{ isExpanded: boolean }>`
  padding: 20px;
  overflow-y: auto;
  backround-color: mediumvioletred;
  border: 2px dotted purple;
  height: ${(props) => props.isExpanded ? "350px" : "20px"};
  transition: height 1s;
`;

export const StyledAccordeonHearedContent = styled.div`
  display: inline-block;

`;
export const StyledChevron = styled.img<{ isExpanded: boolean }>`
  display: inline-block;
  transform: rotate(${props => props.isExpanded ? "180deg" : 0});
  transition: transform 1s;
`;

const animateGradient = () => keyframes`
0% {
  background-position: 0% 0%;
}
50% {
  background-position: 100% 0%;
}
100% {
  background-position: 200% 0%;
}
`;

export const StyledLoader = styled.div<{ isLoading: boolean }>`
  display: inline-block;
  height: 20px;
  width: 80%;
  border: 2px solid gray;
  border-radius: 10px;
  background-size: 200% 200%;
  background-color: ${props => props.isLoading ? "blue" : "green"};
  background-image: ${props => props.isLoading
  ? "repeating-linear-gradient(90deg, blue, turquoise, red, yellow, magenta, blue)"
  : "none"};
  animation: ${animateGradient} 5s linear infinite;
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

export const StyledColoredStar = styled.img<{ validationResults: Validation[] }>`
    display: inline-block;
    filter: ${(props) => {
    switch (props.validationResults.length) {
      case 1:
        return "invert(37%) sepia(97%) saturate(6380%) hue-rotate(352deg) brightness(96%) contrast(137%)"
      case 2:
        return "invert(88%) sepia(100%) saturate(7500%) hue-rotate(352deg) brightness(105%) contrast(107%)"
      case 3:
        return "invert(64%) sepia(94%) saturate(4101%) hue-rotate(83deg) brightness(124%) contrast(120%)"
      case 4:
        return "invert(21%) sepia(91%) saturate(4804%) hue-rotate(101deg) brightness(99%) contrast(102%)"
      default:
        return "none"
    }


  }

  };
`;

export const StyledFillingStars = styled.div`
  display: flex;
  width: 80%;
  height: 100px;
  border: 2px solid gray;
  border-radius: 10px; 

`;

export const StyledPasswordStrengthChecker = styled.article`
  display: flex;
  align-items: center;
`;

export const StyledSecurityRating = styled.div`
  display: flex;
`;

export const StyledCustomizableModal = styled.div`
  display: flex;
  justify-content: space-between;
`;