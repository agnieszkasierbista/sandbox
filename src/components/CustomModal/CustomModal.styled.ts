import styled, {css} from "styled-components";
import {Color, Background, Blur} from "./CustomModal.types";

export const StyledOverlay = styled.div<{ colorOption: Color, backgroundOption: Background, blurOption: Blur }>`
  position: fixed;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: ${(props) => {

    const colorVal = props.colorOption[1];
    const a = props.backgroundOption.map(option => option[1]).includes("transparent");

    if (props.backgroundOption.map(option => option[1]).includes("transparent")) {


      switch (colorVal) {
        case "yellow":
          return "rgba(255,255,0, 0.5)"

        case "blue":
          return "rgba(0, 0, 255, 0.5)"

        case "green":
          return "rgba(0,128,0, 0.5)"

        default:
          return "rgba(255,192,203, 0.5)"
      }
    } else {
      switch (colorVal) {
        case "yellow":
          return "rgb(255,255,0)"

        case "blue":
          return "rgb(0, 0, 255)"

        case "green":
          return "rgb(0,128,0)"

        default:
          return "pink"
      }
    }
  }};
  backdrop-filter: ${(props) => {

    console.log("BLUR", props.blurOption);

    const blurValRadio = props.blurOption[1];
    const blurValManual = props.blurOption[3];

    if (props.backgroundOption.map(option => option[1]).includes("blured") && props.blurOption[1] !== "manual") {
      switch (blurValRadio) {
        case "light":
          return css`blur(2px)`
        case "medium":
          return css`blur(4px)`
        case "strong":
          return css`blur(10px)`
        default:
          return css`blur(4px)`
      }
    } else if (props.backgroundOption.map(option => option[1]).includes("blured") && props.blurOption[1] === "manual") {
      return css`blur(${blurValManual}px)`

    } else {
      css`blur(0)`
    }
  }};
`;

export const StyledModalContent = styled.div`
  position: relative;
  top: 150px;
  left: 200px;
  width: 50%;
  height: 50%;
  background-color: yellow;
  border: 2px solid gold;
`;