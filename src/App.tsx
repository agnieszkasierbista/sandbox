import React from "react";
import { Router, Link, Route, Routes } from "react-router-dom";
import Form from "./Form.container";

const App = () => {
    return (
        <Routes>
            <Route path="/a" element={<div>AAAAAAAAAA<Link to="/b">Bbbb</Link></div>}>
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