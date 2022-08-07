import { useState } from "react";
import { StyledCarousel, StyledCarouselChild } from "./App.styled"


export const Carousel = () => {

    const [counter, setCounter] = useState(0);

    return (
        <StyledCarousel
            onClick={() => setCounter((prev) => prev + 1)}
        >
            <StyledCarouselChild counter={counter}>A</StyledCarouselChild>
            <StyledCarouselChild counter={counter}>B</StyledCarouselChild>
            <StyledCarouselChild counter={counter}>C</StyledCarouselChild>
        </StyledCarousel>
    )
}