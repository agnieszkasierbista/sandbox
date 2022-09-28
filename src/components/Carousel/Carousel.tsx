import React, {useEffect, useState} from 'react';
import {StyledCarousel, StyledCarouselChild} from '../App/App.styled';
import {SVGcomponentCircles} from "../SVG/SVGcomponent.circles";
import {SVGcomponentRectangles} from "../SVG/SVGcomponent.rectangles";

const fn = () => {
    console.log('boom!')
    return [];
};
export const Carousel = (props: { direction: string; counter: number; }) => {

    // const [state, setState] = useState(fn());
    // const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     setInterval(() => setCounter((prev) => prev + 1), 2000);
    // }, []);

    return (
        <StyledCarousel>
            <StyledCarouselChild direction={props.direction} counter={props.counter}>
                <SVGcomponentRectangles/>
            </StyledCarouselChild>
            <StyledCarouselChild direction={props.direction} counter={props.counter}>
                B
                <SVGcomponentCircles/>
            </StyledCarouselChild>
            <StyledCarouselChild direction={props.direction} counter={props.counter}>C</StyledCarouselChild>
        </StyledCarousel>
    )
}