/// <reference path="../../../index.d.ts" />
import React from "react";
import {ArrowButton, StyledArrowContainer, StyledCarouselContainer} from "../App/App.styled"
import {Carousel} from "./Carousel";
import {CarouselNav} from "./CarouselNav";
import arrow_left from "../../assets/pictures/arrowLeft.png"
import arrow_right from "../../assets/pictures/arrowRight.png"


export const CarouselContainer = () => {

    const [counter, setCounter] = React.useState(0);
    const [direction, setDirection] = React.useState("");

    // console.log(counter, "counter")

    return (
        <StyledCarouselContainer>
            <StyledArrowContainer
                onClick={() => {
                    setCounter((prev) => prev === 0 ? 2 : prev - 1);
                    setDirection("left");
                }}>
                <ArrowButton src={arrow_left} height="45" width="45"/>
            </StyledArrowContainer>
            <Carousel direction={direction} counter={counter}/>
            <StyledArrowContainer
                onClick={() => {
                    setCounter((prev) => prev === 2 ? 0 : prev + 1);
                    setDirection("right");
                }}>
                <ArrowButton src={arrow_right} height="45" width="45"/>
            </StyledArrowContainer>
            <CarouselNav setCounter={setCounter} setDirection={setDirection} counter={counter}/>
        </StyledCarouselContainer>
    )
}