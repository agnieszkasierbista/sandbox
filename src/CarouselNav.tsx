import React from 'react';
import { StyledCarouselNav, StyledPaginationItem } from "./App.styled";


export const CarouselNav = (props: { setCounter: (x: number) => void, setDirection: (y: string) => void, counter: number }) => {
    return (
        <StyledCarouselNav>
            <StyledPaginationItem
                isActive={props.counter === 0}
                onClick={() => {
                    props.counter >= 1 ? props.setDirection("left") : props.setDirection("right");
                    props.setCounter(0);
                }}>1</StyledPaginationItem>
            <StyledPaginationItem
                isActive={props.counter === 1}
                onClick={() => {
                    props.counter >= 2 ? props.setDirection("left") : props.setDirection("right");
                    props.setCounter(1);
                }}>2</StyledPaginationItem>
            <StyledPaginationItem
                isActive={props.counter === 2}
                onClick={() => {
                    props.counter === 1 || props.counter === 0 ? props.setDirection("right") : props.setDirection("left");
                    props.setCounter(2);
                }}>3</StyledPaginationItem>
        </StyledCarouselNav>
    )
}