import React from 'react';
import { StyledCarousel, StyledCarouselChild } from './App.styled';

export const Carousel = (props: { direction: string; counter: number; }) => {
    return (
        <StyledCarousel>
            <StyledCarouselChild direction={props.direction} counter={props.counter}>A</StyledCarouselChild>
            <StyledCarouselChild direction={props.direction} counter={props.counter}>B</StyledCarouselChild>
            <StyledCarouselChild direction={props.direction} counter={props.counter}>C</StyledCarouselChild>
        </StyledCarousel>
    )
}