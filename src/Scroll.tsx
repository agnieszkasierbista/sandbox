import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import { Cats, Dogs, Bunnies} from "./scrollTargets"

export const Scroll = (props: { shouldShowImg: boolean; dispatchStartUploading: () => void}) => {
    return (
        <div>
            <h1>Scroll</h1>
            <nav>
                <Link to="cats" onClick={() => props.dispatchStartUploading()}>Cats</Link>
                <Link to="dogs" onClick={() => props.dispatchStartUploading()}>Dogs</Link>
                <Link to="bunnies" onClick={() => props.dispatchStartUploading()}>Bunnies</Link>
            </nav>
            <div>
                <Routes>
                    <Route path="cats" element={<Cats shouldShowImg={props.shouldShowImg} />} />

                    <Route path="dogs" element={<Dogs shouldShowImg={props.shouldShowImg} />} />

                    <Route path="bunnies" element={<Bunnies shouldShowImg={props.shouldShowImg} />} />
                </Routes>
            </div>
        </div>
    )
}