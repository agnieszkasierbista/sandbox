import React from "react";
import { Router, Link, Route, Routes } from "react-router-dom";
import { Accordeon } from "./Accordeon";
import { StyledLink, StyledNav } from "./App.styled";
import { CarouselContainer } from "./CarouselContainer";
import Form from "./Form.container";
import { Loader } from "./Loader";
import Progress from "./Progress.container";

const App = () => {
    return (
        <>

            <StyledNav>
                <StyledLink to="/">Form </StyledLink>
                <StyledLink to="/c">Loader </StyledLink>
                <StyledLink to="/a">Carousel </StyledLink>
                <StyledLink to="/b">Accordeon </StyledLink>
            </StyledNav>

            <Routes>
                <Route path="/a" element={<CarouselContainer />}>
                </Route>

                <Route path="/b" element={<Accordeon />}>
                </Route>

                <Route path="/c" element={<Progress/>}>
                </Route>

                <Route path="/" element={<Form />}>
                </Route>




            </Routes>
        </>
    )
}

export default App;