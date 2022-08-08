import React from "react";
import { Router, Link, Route, Routes } from "react-router-dom";
import { CarouselContainer } from "./CarouselContainer";
import Form from "./Form.container";

const App = () => {
    return (
        <Routes>
            <Route path="/a" element={<CarouselContainer/>}>
            </Route>

            <Route path="/b" element={<div>BBBBBBB <Link to="/c">Cccccc</Link></div>}>
            </Route>

            <Route path="/c" element={<div>CCCCCc<Link to="/">Form</Link></div>}>
            </Route>

            <Route path="/" element={<Form/>}>
            </Route>


           

        </Routes>
    )
}

export default App;