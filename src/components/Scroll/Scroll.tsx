import React from "react";
import {Link, Route, Routes} from "react-router-dom"
import {Bunnies, Cats, Dogs} from "./scrollTargets"

export const Scroll = (props: { shouldShowImg: boolean; dispatchStartUploading: () => void; isUploading: boolean }) => {
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
                    <Route path="cats"
                           element={<Cats shouldShowImg={props.shouldShowImg} isUploading={props.isUploading}/>}/>

                    <Route path="dogs"
                           element={<Dogs shouldShowImg={props.shouldShowImg} isUploading={props.isUploading}/>}/>

                    <Route path="bunnies"
                           element={<Bunnies shouldShowImg={props.shouldShowImg} isUploading={props.isUploading}/>}/>
                </Routes>
            </div>
        </div>
    )
}