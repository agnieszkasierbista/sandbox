import React from "react";
import { ArrowButton, StyledArrowContainer, StyledCarousel, StyledCarouselChild, StyledCarouselContainer } from "./App.styled"
import { Carousel } from "./Carousel";
import { CarouselNav } from "./CarouselNav";


export const CarouselContainer = () => {

    const [counter, setCounter] = React.useState(0);
    const [direction, setDirection] = React.useState("");

    console.log(counter, "counter")

    return (
        <StyledCarouselContainer>
            <StyledArrowContainer
                onClick={() => {
                    setCounter((prev) => prev === 0 ? 2 : prev - 1);
                    setDirection("left");
                }}>
                <ArrowButton src="/pictures/arrowLeft.png" height="45" width="45" />
            </StyledArrowContainer>
            <Carousel direction={direction} counter={counter} />
            <StyledArrowContainer
                onClick={() => {
                    setCounter((prev) => prev === 2 ? 0 : prev + 1);
                    setDirection("right");
                }}>
                <ArrowButton src="/pictures/arrowRight.png" height="45" width="45" />
            </StyledArrowContainer>
            <CarouselNav setCounter={setCounter} setDirection={setDirection} counter={counter}/>
        </StyledCarouselContainer>
    )
}