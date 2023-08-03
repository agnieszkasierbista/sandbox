/// <reference path="../../../index.d.ts" />
import React from "react"
import {StyledCuteArticle, StyledCuteImg, StyledCuteSection} from "../App/App.styled"
import {useScrollBlocking} from "../helpers/customHooks"
import {loremipsum} from "./loremipsum"
import cats from "../../assets/pictures/cute-cats.jpg"
import dogs from "../../assets/pictures/cute-cats.jpg"
import bunnies from "../../assets/pictures/cute-cats.jpg"

export const Cats = (props: { shouldShowImg: boolean, isUploading: boolean }) => {

    const refCats = React.useRef<HTMLImageElement>(null)

    React.useEffect(() => {
        if (refCats.current) {
            refCats.current?.scrollIntoView({behavior: "smooth",});
        }
    }, [props.shouldShowImg]);

    useScrollBlocking(props.isUploading);

    return (
        <StyledCuteSection>
            <h2>Cats</h2>
            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>
            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>
            {

                props.shouldShowImg
                    ?
                    <StyledCuteImg ref={refCats} src={cats} alt="cute-kitties" id="cats"/>
                    :
                    null

            }
            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>
            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>
        </StyledCuteSection>
    )
}

export const Dogs = (props: { shouldShowImg: boolean, isUploading: boolean }) => {

    const refDogs = React.useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        if (refDogs.current) {
            refDogs.current?.scrollIntoView({behavior: "smooth",});
        }
    }, [props.shouldShowImg]);

    useScrollBlocking(props.isUploading);


    return (
        <StyledCuteSection>
            <h2>Dogs</h2>
            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>
            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>

            {
                props.shouldShowImg
                    ?
                    <StyledCuteImg ref={refDogs} src={dogs} alt="cute-puppies" id="dogs"/>
                    :
                    null
            }

            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>
            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>
        </StyledCuteSection>
    )
}

export const Bunnies = (props: { shouldShowImg: boolean, isUploading: boolean }) => {

    const refBunnies = React.useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        if (refBunnies.current) {
            refBunnies.current?.scrollIntoView({behavior: "smooth",});
        }
    }, [props.shouldShowImg]);


    useScrollBlocking(props.isUploading);

    return (
        <StyledCuteSection>
            <h2>Bunnies</h2>
            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>
            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>

            {
                props.shouldShowImg
                    ?
                    <StyledCuteImg ref={refBunnies} src={bunnies} alt="cute-bunnies" id="bunnies"/>
                    :
                    null
            }

            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>
            <StyledCuteArticle>
                <h3>Title</h3>
                {loremipsum}
            </StyledCuteArticle>
        </StyledCuteSection>
    )
}