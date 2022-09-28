import styled, {keyframes} from "styled-components";

const moveCircle = keyframes`
  50% {
    cy: 150;
    r: 13;
  }
`;

export const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;

  & circle {
    cy: 50;
    r: 20;
    animation: ${moveCircle} 1250ms ease-in-out both infinite;
  }

  & circle:nth-child(1) {
    cx: 60;
    fill: #780116ff;
  }

  & circle:nth-child(2) {
    cx: 120;
    fill: #c32f27ff;
    animation-delay: 100ms;
  }

  & circle:nth-child(3) {
    cx: 180;
    fill: #ec9f05ff;
    animation-delay: 200ms;
  }

  & circle:nth-child(4) {
    cx: 240;
    fill: #7fd1b9ff;
    animation-delay: 300ms;
  }

  & circle:nth-child(5) {
    cx: 300;
    fill: #388697ff;
    animation-delay: 400ms;
  }
  
  & circle:nth-child(6) {
    cx: 360;
    fill: #ff595e;
    animation-delay: 500ms;
  }
  
  & circle:nth-child(7) {
    cx: 420;
    fill: #493657;
    animation-delay: 600ms;
  }
  
& circle:nth-child(8) {
    cx: 480;
    fill: #e2c2ff;
    animation-delay: 700ms;
  }

`;

const backgroundshift = keyframes`
  49.99% {
    background: white;
  }
  50% {
    background: black;
  }
  100% {
    background: black;
  }
`;

const scaleshift = keyframes`
  0% {
    transform: scale(.001);
    rx: 50;
  }
  35% {
    rx: 40;
  }
  50% {
    transform: scale(1);
    rx: 0;
  }
  100% {
    transform: scale(1);
    rx: 0;
  }
`;

export const StyledTopLeftBlack = styled.rect`
 
  animation-direction: alternate;
  transform-origin: 50px 50px;
`;
export const StyledTopRightWhite = styled.rect`
  x: 100px;
  fill: white;
  animation-direction: alternate-reverse;
  transform-origin: 150px 50px;
`;
export const StyledBottomLeftWhite = styled.rect`
  fill: white;
  animation-direction: alternate-reverse;
  y: 100px;
  transform-origin: 50px 150px;
`;
export const StyledBottomRightBlack = styled.rect`
  x: 100px;
  y: 100px;
  fill: black;
  animation-direction: alternate;
  transform-origin: 150px 150px;
`;

export const StyledSVGwithPattern = styled.svg`
  width: 100%;
  height: 100%;
  animation: ${backgroundshift} 3s alternate infinite;

  & pattern {
    width: 100px;
    height: 100px;
  }

  & pattern rect {
    animation: ${scaleshift} 3s infinite cubic-bezier(.36, .17, .86, .67);
  }
`;
