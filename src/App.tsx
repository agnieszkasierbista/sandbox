import React from "react";
import { Router, Link, Route, Routes } from "react-router-dom";
import { Accordeon } from "./Accordeon";
import { StyledNav } from "./App.styled";
import { CarouselContainer } from "./CarouselContainer";
import Form from "./Form.container";

const App = () => {
    return (
        <>

            <StyledNav>
                <Link to="/">Form </Link>
                <Link to="/c">Cccccc </Link>
                <Link to="/a">Carousel </Link>
                <Link to="/b">Accordeon </Link>
            </StyledNav>

            <Routes>
                <Route path="/a" element={<CarouselContainer />}>
                </Route>

                <Route path="/b" element={<Accordeon />}>
                </Route>

                <Route path="/c" element={<div>CCCCCc</div>}>
                </Route>

                <Route path="/" element={<Form />}>
                </Route>




            </Routes>
        </>
    )
}

export default App;