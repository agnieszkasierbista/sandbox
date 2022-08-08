import { useState } from "react";
import { StyledArrowLeft, StyledArrowRight, StyledCarousel, StyledCarouselChild, StyledCarouselContainer } from "./App.styled"


export const Carousel = () => {

    const [counter, setCounter] = useState(0);
    const [direction, setDirection] = useState("");
    return (
        <StyledCarouselContainer>
            <StyledArrowLeft
                onClick={() => {
                    setCounter((prev) => prev - 1);
                    setDirection("left");
                }}>
                <img src="/pictures/arrowLeft.png" height="45" width="45" />
            </StyledArrowLeft>
            <StyledCarousel>
                <StyledCarouselChild direction={direction} counter={counter}>A</StyledCarouselChild>
                <StyledCarouselChild direction={direction} counter={counter}>B</StyledCarouselChild>
                <StyledCarouselChild direction={direction} counter={counter}>C</StyledCarouselChild>
            </StyledCarousel>
            <StyledArrowRight 
            onClick={() => {
                    setCounter((prev) => prev + 1);
                    setDirection("right");
                }}>
                <img src="/pictures/arrowRight.png" height="45" width="45" />
            </StyledArrowRight>
        </StyledCarouselContainer>
    )
}