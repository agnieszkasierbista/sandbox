import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import { Cats, Dogs, Bunnies} from "./scrollTargets"

export const Scroll = () => {
    return (
        <div>
            <h1>Scroll</h1>
            <nav>
                <Link to="cats">Cats</Link>
                <Link to="dogs">Dogs</Link>
                <Link to="bunnies">Bunnies</Link>
            </nav>
            <div>
                <Routes>
                    <Route path="cats" element={<Cats />} />

                    <Route path="dogs" element={<Dogs />} />

                    <Route path="bunnies" element={<Bunnies />} />
                </Routes>
            </div>
        </div>
    )
}