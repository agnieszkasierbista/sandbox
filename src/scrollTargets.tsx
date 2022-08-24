import { StyledCuteArticle, StyledCuteImg, StyledCuteSection } from "./App.styled"
import { loremipsum } from "./loremipsum"

export const Cats = () => {
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
            <StyledCuteImg src="../pictures/cute-cats.jpg" alt="cute-kitties" id="cats" />
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

export const Dogs = () => {
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
            <StyledCuteImg src="../pictures/cute_doggies.jpg" alt="cute-puppies" id="dogs" />
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

export const Bunnies = () => {
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
            <StyledCuteImg src="../pictures/cute-bunnies.jpg" alt="cute-bunnies" id="bunnies" />
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